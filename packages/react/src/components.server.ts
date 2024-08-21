/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { LiamComponent as LiamComponentElement, defineCustomElement as defineLiamComponent } from "@placid/core/components/liam-component.js";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "@placid/core/components/my-component.js";
import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type LiamComponentEvents = NonNullable<unknown>;

export const LiamComponent: StencilReactComponent<LiamComponentElement, LiamComponentEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<LiamComponentElement, LiamComponentEvents>({
        tagName: 'liam-component',
        elementClass: LiamComponentElement,
        react: React,
        events: {} as LiamComponentEvents,
        defineCustomElement: defineLiamComponent
    })
    : /*@__PURE__*/ createSSRComponent<LiamComponentElement, LiamComponentEvents>({
        tagName: 'liam-component',
        hydrateModule: import('@placid/core/hydrate')
    });

type MyComponentEvents = NonNullable<unknown>;

export const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyComponentElement, MyComponentEvents>({
        tagName: 'my-component',
        elementClass: MyComponentElement,
        react: React,
        events: {} as MyComponentEvents,
        defineCustomElement: defineMyComponent
    })
    : /*@__PURE__*/ createSSRComponent<MyComponentElement, MyComponentEvents>({
        tagName: 'my-component',
        hydrateModule: import('@placid/core/hydrate')
    });
