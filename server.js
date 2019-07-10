const fs = require('fs');
const path = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const template =  fs.readFileSync('./src/index.template.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    basedir: path.resolve(__dirname, './'),
    template,
    clientManifest
});

const server = express();

// # 使用此行后会被客户端接管，data-server-rendered="true"在接管后消失
server.use('/dist', express.static(path.resolve(__dirname, './dist')));

server.get('*', (req, res) => {
    const context = { url: req.url };

    renderer.renderToString(context, (err, html) => {
        if (err) {
            res.redirect('/error');
        } else {
            res.end(html);
        }
    })
});

server.listen(9002);
