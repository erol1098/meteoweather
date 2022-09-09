import React from 'react';
import { StyledError } from '../styles/styled-componets';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hatanızı bir hata bildirimi servisine de yollayabilirsiniz.
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledError>
          <h1>Something went wrong.</h1>
        </StyledError>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
