import * as React from 'react'
import { Box, Container, Drawer, List, Typography } from '@mui/material'
import Image from 'next/image'
import { Dashboard as DashboardIcon } from '@mui/icons-material'
import NavItem from '@/layout/dashboard/navItem'
import { bottomNavItems, topNavItems } from '@/layout/dashboard/navConfig'

const drawerWidth = 280

export default function DashboardLayout({ children }) {

  const renderNavItems = (items) => {
    return items.map((item, idx) => (
      <List key={item.subheader}>
        {item.subheader && (
          <Typography sx={{ mx: '15px', mb: 0.5 }} variant="body2">
            {item.subheader}
          </Typography>
        )}
        {item.items.map(navItem => (
          <NavItem
            key={navItem.title}
            text={navItem.title}
            selected={navItem.title === 'Dashboard'}
            icon={navItem.icon}
          />
        ))}
      </List>
    ))
  }

  return (
    <Box display="flex">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
            padding: '10px 15px',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3 }}>
          <Image
            alt="logo"
            src="/images/logo.png"
            width="220"
            height="73"
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          {renderNavItems(topNavItems)}
        </Box>
        <Box sx={{ mb: 2 }}>
          {renderNavItems(bottomNavItems)}
        </Box>
      </Drawer>
      <Box sx={{ display: 'block', width: '100%' }}>
        <Container
          maxWidth={false}
          sx={{
            flexGrow: 1,
            backgroundColor: '#fff',
            mt: 5
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  )
}
