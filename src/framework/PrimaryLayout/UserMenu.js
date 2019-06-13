import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default ({ anchorEl, id, open, onClose }) => {
  return <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={id}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={open}
    onClose={onClose}
  >
    <MenuItem onClick={onClose}>个人中心</MenuItem>
    <MenuItem onClick={onClose}>退出登录</MenuItem>
  </Menu>
}