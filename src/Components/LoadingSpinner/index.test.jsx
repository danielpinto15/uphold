import { render, screen } from '@testing-library/react'
import LoadingSpinner from './index'
import { describe, it, expect } from 'vitest'

describe('LoadingSpinner', () => {
  it('renders the loading spinner component', () => {
    render(<LoadingSpinner />)

    // Check if the loading spinner container is in the document
    const spinnerContainer = screen.getByRole('img', { name: /loading/i })
    expect(spinnerContainer).toBeInTheDocument()
  })

  it('renders the logo image', () => {
    render(<LoadingSpinner />)

    // Ensure the image is rendered with the correct src and alt text
    const image = screen.getByAltText('Loading...')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'assets/logo.svg')
  })

  it('applies the correct classes', () => {
    render(<LoadingSpinner />)

    // Check if the container has the 'loading-spinner' class
    const spinnerContainer = screen.getByRole('img', { name: /loading/i })
    expect(spinnerContainer.parentElement).toHaveClass('loading-spinner')

    // Check if the image has the 'spinner-logo' class
    const image = screen.getByAltText('Loading...')
    expect(image).toHaveClass('spinner-logo')
  })
})
