import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'; import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

import NavItem from './NavItem';
import Icon from '@/src/MaterialIcon';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 16px',
  },
  dense: {
    margin: 0,
    padding: 0,
  },
  navItem: {
    flex: 1,
  }
}));
const usePanelStyles = makeStyles(theme => ({
  root: {
    padding: 0,
  },
  content: {
    margin: 0,
  },
}));
const useDetailsStyles = makeStyles(theme => ({
  root: {
    flexWrap: 'wrap',
    padding: '8px 16px 16px',
  },
}));

export default (props) => {
  const { name, icon, items } = props;
  const classes = useStyles();
  const overridePanel = usePanelStyles();
  const overrideDetails = useDetailsStyles();

  if (items) {
    return <ExpansionPanel square className={classes.root}>
      <ExpansionPanelSummary
        classes={overridePanel}
        expandIcon={<KeyboardArrowDown />}
      >
        <ListItem dense disableGutters>
          <ListItemIcon>
            <Icon icon={icon} />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails classes={overrideDetails}>
        {items.map((route, i) => {
          return <div key={i} className={classes.navItem}>
            <NavItem {...route} />
          </div>
        })}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  }
  return <NavItem {...props} />;
}