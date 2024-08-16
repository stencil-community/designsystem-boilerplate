import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
    },
    angularOutputTarget({
      componentCorePackage: '@placid/core',
      outputType: 'standalone',
      directivesProxyFile: '../angular-workspace/projects/angular/src/lib/standalone/components.ts',
      directivesArrayFile: '../angular-workspace/projects/angular/src/lib/standalone/index.ts',
    }),
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
