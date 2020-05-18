import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    let logInfo = {
      timeStamp: new Date(),
      stackTrace: info.componentStack,
      pageon: window.location.pathname,
      browserVersion1a: navigator.appVersion,
      env: process.env.REACT_APP_ENV
    }
    console.info('logInfo', logInfo);
    // logComponentStackToMyService(logInfo);
  }

  render() {
    if (this.state.hasError) {
      // render any custom fallback UI
      return <span>Error</span>;
    }
    return <div>
      <span>Private component</span>
    </div>;
  }
}

export default Main;
