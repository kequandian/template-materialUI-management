import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@/src/framework/Container';

const styles = {
  root: {
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  code: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top',
  },
  divider: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle',
  },
  message: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0,
  }
};

const errorMsg = {
  404: '未找到页面',
  403: '无权限',
  undefined: '程序运行错误',
  null: '程序运行错误',
};

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }


  render() {
    const { classes, statusCode } = this.props;

    return (
      <Container>
        <div className={classes.root}>
          <div>
            <h1 className={classes.code}>{statusCode || 0}</h1>
            <div className={classes.divider}>
              <h2 className={classes.message}>{errorMsg[statusCode]}</h2>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Error);