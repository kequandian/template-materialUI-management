import React from 'react';
import * as icons from '@material-ui/icons';

export default function MaterialIcon({ icon }) {
  const Icon = icons[icon];
  if (Icon) {
    return <Icon />;
  }
  return null;
}