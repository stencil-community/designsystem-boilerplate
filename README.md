Designsystem Boilerplate
========================

A boilerplate project that showcases the usage of Stencil for building large scale design systems. It currently showcases integration of the following frameworks:

- [Angular](https://angular.dev/)
- [React + Vite](https://react.dev/)
- [Vue + Vite](https://vuejs.org/)
- [Next.js](https://nextjs.org/)

## Requirements

This project requires you to have the following installed on your system:

- [Node.js](https://nodejs.org/en) (v20 or higher) - we recommend to use [nvm](https://github.com/nvm-sh/nvm) to install Node.js
- [pnpm](https://pnpm.io/) - install via `npm i -g pnpm`

## Install

This projects provides a very basic setup to build a scaleable design system using [Stencil](https://stenciljs.com/). You can use it as the foundation for a new project:

```sh
git clone https://github.com/stencil-community/designsystem-boilerplate.git ./my-project
```

he project publishes its wrapper packages under the `@placid/*` namespace. Ensure you update all package.json files in the `/packages/*` directory to reflect your specific metadata.

Before we continue let's make sure to install all dependencies and setup the projects:

```sh
pnpm install
```

## Structure

The project is structured in several sub-packages, some are framework wrappers that bundle your Stencil component into the framework of your choice, others showcases how to use them in an actual project. These packages as structured as follows:

- `/packages/core`: your Stencil project that contains raw Stencil components, published as `@placid/core`
- `/packages/react`: Stencil wrapper for React based projects, e.g. Next.js or React, published as `@placid/react`
- `/packages/vue`: Stencil wrapper for Vue based projects, published as `@placid/vue`
- `/packages/angular-workspace/projects/angular`: Stencil wrapper for Angular components, published as `@placid/angular`

You can see how your users can embed the components in our demo apps:

- `/apps/angular`: Angular application
- `/apps/react`: basic React + Vite Application
- `/apps/vue`: basic Vue + Vite Application
- `/apps/next`: Next.js application (with SSR support)
- `/apps/nuxt`: Nuxt application (with SSR support)

## Scripts

The following scripts are configured for you to operate this codebase:

### Build

To build all packages, run:

```sh
$ pnpm run build
```

### Run Example App

This project contains example app to test the integration of your Stencil components in real world projects. The following commands allow you to spawn the dev server for these applications:

```sh
# Angular
pnpm run start:angular
# React
pnpm run start:react
# Vue
pnpm run start:vue
# Next.js
pnpm run start:next
# Nuxt
pnpm run start:nuxt
```