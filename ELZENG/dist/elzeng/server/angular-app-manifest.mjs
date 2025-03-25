
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 24330, hash: '3cf2033c12bd1bbe72e993699c536c6f22d71aa0412763e73261eb8b516b7e2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19867, hash: 'b525a6cd363df5de9b1bff2e3b4426c2ebaa51e5f1a6e769b60c830383e5a5ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FAOUBUOY.css': {size: 30199, hash: 'MbfxH9P1IQg', text: () => import('./assets-chunks/styles-FAOUBUOY_css.mjs').then(m => m.default)}
  },
};
