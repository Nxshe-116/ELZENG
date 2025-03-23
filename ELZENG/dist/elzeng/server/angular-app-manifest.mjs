
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 24245, hash: '2fc0c9e518ccf8ca82cf152c7a713c9a14f42d922b1dd1560cc1d645f7528968', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19867, hash: '8810599a6820346fdf364386898ad824b1d862a65421b1f4182deb1a5bddc7c5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJ6VVE6I.css': {size: 28503, hash: 'dD7SeNVTSjg', text: () => import('./assets-chunks/styles-ZJ6VVE6I_css.mjs').then(m => m.default)}
  },
};
