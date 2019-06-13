import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Link from 'next/link';
import Icon from '@/src/MaterialIcon';

export default ({ path, name, icon }) => {
  return <Link
    key={`${path}_${name}`}
    href={path}
  >
    <ListItem button>
      <ListItemIcon>
        <Icon icon={icon} />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  </Link>
}