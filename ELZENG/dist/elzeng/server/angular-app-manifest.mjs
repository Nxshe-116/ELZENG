
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 24330, hash: '975658690699523873ca4ae0a57945ea3cd867c0090c6ac0218b6a03678cfe58', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19867, hash: 'f6d552f0a0a6485105e38cef06ffbb3bf0d27fe3f68e75a527a82ef4cf7914f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FAOUBUOY.css': {size: 30199, hash: 'MbfxH9P1IQg', text: () => import('./assets-chunks/styles-FAOUBUOY_css.mjs').then(m => m.default)}
  },
};
