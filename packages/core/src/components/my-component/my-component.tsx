import { Component, Host, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <Host>
      <span class="salutation">Hello, World! I'm</span>
      <span class="name-container">
        <span class="name">{this.getText()}</span>
      </span>
      <span class="footer"></span>
    </Host>;
  }
}
