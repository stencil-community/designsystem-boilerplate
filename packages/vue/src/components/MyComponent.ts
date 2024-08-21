import { defineComponent } from 'vue'
import { compile } from 'vue'
import { defineCustomElementMyComponent } from '@placid/core/components'
import type { JSX } from '@placid/core'

import { defineContainer } from '../vue-component-lib/utils'

defineCustomElementMyComponent()

const options = {
  tagName: 'my-component',
}

const MyComponent = /*@__PURE__*/ defineContainer<JSX.MyComponent>('my-component', undefined, [
  'first',
  'middle',
  'last'
])

export default globalThis.window ? MyComponent : defineComponent({
  async setup (props) {
    let stringProps = '';
    const { renderToString } = await import('@placid/core/hydrate');
    for (const [key, value] of Object.entries(props)) {
      if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') {
        continue;
      }
      stringProps += ` ${key}="${value}"`;
    }
    const toSerialize = `<${options.tagName}${stringProps}></${options.tagName}>`;
    const { html } = await renderToString(toSerialize, {
      fullDocument: false
    })
    return compile(
      html
        /**
         * by default Vue strips out the <style> tag, so this little trick
         * makes it work by wrapping it in a component tag
         */
        .replace('<style>', `<component :is="'style'">`)
        .replace('</style>', '</component>'),
      {
        comments: true,
        isCustomElement: (tag) => tag === options.tagName,
      }
    )
  },
  props: {
    first: String,
    middle: String,
    last: String
  },
  template: '<div></div>'
})
