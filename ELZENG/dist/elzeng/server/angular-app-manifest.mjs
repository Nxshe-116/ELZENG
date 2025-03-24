
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 24330, hash: '824d4164073c8ac7e253f80beabab59150f4c04a610928d2d87f9325c430ec9a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19867, hash: 'f8f77404d17fc202a8986bf839950921dd685e06080a5d2461b4d138f0635fcb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-447FLUYU.css': {size: 29661, hash: '8q2A9A+d0AE', text: () => import('./assets-chunks/styles-447FLUYU_css.mjs').then(m => m.default)}
  },
};
