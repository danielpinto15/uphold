import { render, screen } from '@testing-library/react'
import Navbar from './index'
import { describe, it, expect } from 'vitest'

describe('Navbar', () => {
  it('renders the navbar correctly', () => {
    render(<Navbar />)

    // Check if the navbar is in the document
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the navbar links', () => {
    render(<Navbar />)

    // Check if the navbar links are in the document
    const personalLink = screen.getByText('Personal')
    const businessLink = screen.getByText('Business')
    const partnersLink = screen.getByText('Partners')

    expect(personalLink).toBeInTheDocument()
    expect(businessLink).toBeInTheDocument()
    expect(partnersLink).toBeInTheDocument()
  })

  it('renders the logo image with correct attributes', () => {
    render(<Navbar />)

    // Check if the logo image is rendered
    const logoImage = screen.getByAltText('Uphold Logo')
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src', 'assets/logo.svg')
  })

  it('renders the login button correctly', () => {
    render(<Navbar />)

    // Check if the login button is in the document
    const loginButton = screen.getByRole('button', { name: /log in/i })
    expect(loginButton).toBeInTheDocument()
  })
})
