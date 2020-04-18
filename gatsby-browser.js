import Template from "./src/templates/blogTemplate.js"

import "./src/styles/global.css"

// or:
// require('./src/styles/global.css')

import CMS from 'netlify-cms'
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('src/templates/blogTemplate.js', Template)