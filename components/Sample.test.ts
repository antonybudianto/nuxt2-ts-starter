import { describe, it } from 'vitest'
import { render } from '@testing-library/vue'

import Sample from './Sample.vue'

describe('app.vue', () => {
  it('component must be mounted correctly', () => {
    // The render method returns a collection of utilities to query your component.
    const { getByText } = render(Sample as any)

    // getByText returns the first matching node for the provided text, and
    // throws an error if no elements match or if more than one match is found.
    getByText('Sample')
  })
})
