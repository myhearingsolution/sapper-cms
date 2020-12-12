/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React from 'react'
import createClass from 'create-react-class'
import type { SvelteComponent as SvelteComponentInstance } from 'svelte'

type SvelteComponentClass = typeof SvelteComponentInstance

function wrapSvelteComponent<Props = unknown>(
  SvelteComponent: SvelteComponentClass,
): React.ComponentClass<Props> {
  return createClass<Props, { svelteComponent: SvelteComponentInstance }>({
    render() {
      return <div ref={(div: Element) => (this.div = div)} />
    },

    componentDidMount() {
      this.svelteComponent = new SvelteComponent({
        target: this.div as Element,
        props: this.props as unknown,
      })
    },

    componentDidUpdate() {
      ;(this.svelteComponent as SvelteComponentInstance).$set(this.props)
    },

    componentWillUnmount() {
      ;(this.svelteComponent as SvelteComponentInstance).$destroy()
    },
  })
}

export default wrapSvelteComponent
