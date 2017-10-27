import React from 'react';
import {renderToString} from 'react-dom/server';
import express from 'express';
import Root from './root/components/Root';
import ContentProvider from './utils/ContentProvider';
import {spaceId, accessToken} from './contentful.config.js';
import './index.scss';
import template from './index.pug';

const port = 3000;
const dir = './build';

const syncContentFromContentful = () =>
  ContentProvider.connect({
    space: spaceId,
    accessToken: accessToken,
    locale: 'en-US',
  });

const server = express();

server.use(express.static(dir));

server.get('/', (req, res) => {
  syncContentFromContentful()
  .then(() => {
    const appString = renderToString(<Root />);
    const html = template({
      appString,
    });
    res.send(html);
  })
  .catch(err => res.status(500).send(err));
});

server.listen(port);
