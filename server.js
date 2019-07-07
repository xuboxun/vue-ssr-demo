const fs = require('fs');
const Vue = require('vue');
const express = require('express');
const { createRenderer } = require('vue-server-renderer');

const server = express();

const template =  fs.readFileSync('./src/index.template.html', 'utf-8');

const renderer = createRenderer({
    template
});

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>
                <h1>ssr content</h1>
                <p>the url you requested is {{url}}</p>
            </div>
        `
    });

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error');
            return;
        }
        res.end(html);
    })
});

server.listen(9002);
