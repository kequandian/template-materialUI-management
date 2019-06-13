import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default ({ anchorEl, id, open, onClose, onOpenUserMenu }) => {
  return <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={id}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={open}
    onClose={onClose}
  >
    <MenuItem>
      <IconButton aria-label="Show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
      <p>消息</p>
    </MenuItem>
    <MenuItem>
      <IconButton aria-label="Show 11 new notifications" color="inherit">
        <Badge badgeContent={11} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>通知</p>
    </MenuItem>
    <MenuItem onClick={onOpenUserMenu}>
      <IconButton
        aria-label="Account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>用户名</p>
    </MenuItem>
  </Menu>
}