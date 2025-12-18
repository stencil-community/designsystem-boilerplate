# Angular Component Library

This package provides Angular 20 bindings for the StencilJS component library, built with `ng-packagr` for seamless integration into Angular applications.

## Features

- **Minimal Dependencies**: Stripped-down setup with only essential packages required by `ng-packagr`
- **StencilJS Components**: Direct access to all StencilJS components with Angular-specific wrappers
- **Tree-shakeable**: Optimized bundle sizes through proper module exports
- **TypeScript Support**: Full type safety and IDE intellisense

## Setup

When you build your Stencil project, The `@stencil/angular-output-target` handles the generation of Angular components for you. The remaining step is ensure that your package is structured to conform to the [Angular Package Format](https://angular.dev/tools/libraries/angular-package-format). And [ng-packagr](https://github.com/ng-packagr/ng-packagr) handles this for you. 

- The key files here are going to be `package.json` and `ng-package.json`, which is the configuration that ng-packgr uses to build the package.
- At a minimum, you need thef following dev/peer dependencies defined:
```json
    "devDependencies": {
        "@angular/common": "^20.3.15",
        "@angular/core": "^20.3.15",
        "ng-packagr": "^20.3.2",
        "rxjs": "^7.8.2",
        "tslib": "^2.8.1"
    },
    "peerDependencies": {
        "@angular/common": ">=20.3.15",
        "@angular/core": ">=20.3.15"
    }
```
- You also need a dependency to your stencil component library defined:
```json
  "dependencies": {
    "@sencillo/core": "workspace:*"
  },
```

- In order to use this package in your workspace, you can use the following exports - which will reference the `dist` folder that `ng-packagr` will generate for you (it will also handle overriding necessary values when you publish the `dist` folder):
```json
    "module": "./dist/fesm2022/sencillo-angular.mjs",
    "typings": "./dist/index.d.ts",
    "files": ["dist/", "css/"],
    "exports": {
        "./css/*": "./css/*",
        "./package.json": {
        "default": "./dist/package.json"
        },
        ".": {
        "types": "./dist/index.d.ts",
        "default": "./dist/fesm2022/sencillo-angular.mjs"
        }
    },
```
>💡 **Tip:** The `css` folder is totally optional, but if you have a global stylesheet that you want to provide with your components, this is a great approach. In your Angular app, you could import in your app's `scss` using:

```scss
@import "@placid/angular/css/placid.css";
```

## Build

Run `pnpm --filter @placid/angular build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library, go to the dist folder `cd dist` and run `npm publish`.