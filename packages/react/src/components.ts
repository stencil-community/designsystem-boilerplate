/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "@placid/core/components/my-component.js";
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type MyComponentEvents = NonNullable<unknown>;

export const MyComponent = /*@__PURE__*/ createComponent<MyComponentElement, MyComponentEvents>({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: {} as MyComponentEvents,
    defineCustomElement: defineMyComponent
});