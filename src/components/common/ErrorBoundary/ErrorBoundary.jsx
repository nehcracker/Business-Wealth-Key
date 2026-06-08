import { Component } from 'react'
import './ErrorBoundary.css'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // Log to console in dev — swap for error reporting service in production
    console.error('[ErrorBoundary] caught:', error, info)
  }

  handleReload() {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <div className="error-boundary__inner">
            <div className="error-boundary__icon" aria-hidden="true">⚠</div>
            <h2 className="error-boundary__heading">Something went wrong</h2>
            <p className="error-boundary__message">
              This page could not be loaded. This may be a temporary issue.
            </p>
            <button
              className="error-boundary__btn"
              onClick={this.handleReload}
            >
              Reload page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
