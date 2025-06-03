import stencilConfig from '@stencil/ssr/next'

type StencilConfigFunction = typeof stencilConfig;
type NextConfig = ReturnType<ReturnType<StencilConfigFunction>>
export const withSSR = (nextConfig: NextConfig): NextConfig => {
  return stencilConfig({
    from: '@placid/react',
    module: import('./components.js'),
    hydrateModule: import('@placid/core/hydrate'),
  })(nextConfig)
}
