import { Component, h } from '@stencil/core';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'liam-component',
  styleUrls: {
    'ios': 'liam-component.ios.css',
    'md': 'liam-component.md.css'
  },
  shadow: true,
})
export class LiamComponent {
  render() {
    return <div>Component should be blue for ios mode and green for md mode</div>;
  }
}
