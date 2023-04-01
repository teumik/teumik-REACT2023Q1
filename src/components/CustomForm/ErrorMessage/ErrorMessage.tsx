import { Component } from 'react';
import style from './errorMessage.module.scss';

interface ErrorMessageProps {
  message: string | undefined;
}

class ErrorMessage extends Component<ErrorMessageProps> {
  render() {
    const { message } = this.props;
    return <div className={style.error}>{message || ''}</div>;
  }
}

export { ErrorMessage };
