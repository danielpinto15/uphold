import { render, screen, fireEvent } from '@testing-library/react'
import Footer from './index'
import { describe, it, expect } from 'vitest'

describe('Footer', () => {
  it('contains links with the correct href values', () => {
    render(<Footer />)

    const links = [
      { text: 'Consumers', href: '#' },
      { text: 'Business', href: '#' },
      { text: 'Partners', href: '#' },
      { text: 'About', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Press', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'FAQ & Support', href: '#' },
      { text: 'Platform Status', href: '#' },
      { text: 'Pricing', href: '#' },
      { text: 'Legal', href: '#' },
      { text: 'Facebook', href: '#' },
      { text: 'Twitter', href: '#' },
      { text: 'Instagram', href: '#' },
      { text: 'LinkedIn', href: '#' },
      { text: 'Agreements', href: '#' },
      { text: 'Privacy & Data Policy', href: '#' },
      { text: 'Cookie Policy', href: '#' },
    ]

    links.forEach(({ text, href }) => {
      const link = screen.getByText(text)
      expect(link).toHaveAttribute('href', href)
    })
  })
})
