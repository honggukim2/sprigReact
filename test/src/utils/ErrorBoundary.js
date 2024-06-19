import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false , error: null, errorInfo: null};
    }
  
    static getDerivedStateFromError(error) {
      // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error("Uncaught error:", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
        return (
            <div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        );
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary;