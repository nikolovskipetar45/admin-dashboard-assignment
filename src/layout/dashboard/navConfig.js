import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Receipt as ReceiptIcon,
  InsertDriveFile as InsertDriveFileIcon
} from '@mui/icons-material';

export const topNavItems = [
  {
    subheader: '',
    items: [
      { title: 'Dashboard', path: '/', icon: <DashboardIcon/> }
    ]
  },
  {
    subheader: 'General',
    items: [
      { title: 'Files', path: '/', icon: <InsertDriveFileIcon/> },
      { title: 'Invoices', path: '/', icon: <ReceiptIcon/> },
    ]
  },
]

export const bottomNavItems = [
  {
    subheader: 'Profile',
    items: [
      { title: 'My Profile', path: '/', icon: <PersonIcon/> },
      { title: 'Logout', path: '/', icon: <LogoutIcon/> },
    ]
  },
]
