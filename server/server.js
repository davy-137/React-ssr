import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";

import App from '../src/App'

const PORT = 8080
const app = express()

const router = express.Router()
app.use('/build', express.static('build'));

// const serverRenderer = (req, res, next) => {
//   fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).send('An error occurred')
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(
//         <App/>  
//       )}</div>`
//       )
//     )
//   })
// }

app.get("*", (req, res) => {
  let context={};
    let html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        {typeof window !== 'undefined' && (
        <App/>
      )}
      </StaticRouter>
    );
    
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    console.log("req.url", req.url);
    return res.send(data.replace('<div id="root"></div>',`<div id="root">${html}</div>`));
  });

});

// router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})