const fs = require('fs');
const path = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const templatePath = path.resolve(__dirname, './src/index.template.html');
const template =  fs.readFileSync(templatePath, 'utf-8');

const isProd = process.env.NODE_ENV === 'production';

const server = express();
// # 使用此行后会被客户端接管，data-server-rendered="true"在接管后消失
server.use('/dist', express.static(path.resolve(__dirname, './dist')));

let renderer;
let readyPromise;

if (isProd) {
    const serverBundle = require('./dist/vue-ssr-server-bundle.json');
    const clientManifest = require('./dist/vue-ssr-client-manifest.json');
    renderer = createBundleRenderer(serverBundle, {
        runInNewContext: false,
        basedir: path.resolve(__dirname, './'),
        template,
        clientManifest
    });
} else {
    const setupDevServer = require('./build/setup-dev-server');
    readyPromise = setupDevServer(
        server,
        templatePath,
        (bundle, options) => {
            renderer = createBundleRenderer(bundle, options)
        }
    )
}

function render(req, res) {
    const context = { url: req.url };

    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log(err);
            res.redirect('/error');
        } else {
            res.end(html);
        }
    });
}

server.get('*', isProd ? render : (req, res) => {
    readyPromise.then(() => render(req, res));
});

server.listen(9002, () => {
    console.log('server started at localhost:9002');
});
