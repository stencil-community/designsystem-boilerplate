import { stencilSSR } from "@stencil/ssr";


export const viteSSR = () => stencilSSR({
    module: import('./components.js'),
    from: '@placid/react',
    hydrateModule: import('@placid/core/hydrate')
  });
