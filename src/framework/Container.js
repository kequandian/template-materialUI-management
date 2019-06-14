import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: 'calc(100vh - 112px)',
  },
}));

export default ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>
    {children}
  </div>
}