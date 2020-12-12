/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import React from 'react'
import { render as renderReact } from '@testing-library/react'

import wrapSvelteComponent from './wrap-svelte-component'
import SvelteTestChild from './test-utils/SvelteTestChild.svelte'

const WrappedReactParent = wrapSvelteComponent<{ testContent: string }>(
  SvelteTestChild,
)

describe('wrapSvelteCopmonent(SvelteComponent)', () => {
  test('passing props to the child component', () => {
    const { container } = renderReact(
      <WrappedReactParent testContent="Hello, World!" />,
    )

    expect(container).toHaveTextContent('Hello')
  })
})
