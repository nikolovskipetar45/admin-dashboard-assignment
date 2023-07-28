import { ListItem, ListItemText, Box } from '@mui/material'
import { useContext } from 'react'
import {  ThemeContext } from '@/theme'

export default function NavItem({ icon, text, selected }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
      button
      selected={selected}
    >
      <Box sx={{ color: selected ? theme.palette.primary.main : 'inherit' }}>
        {icon}
      </Box>
      <ListItemText primary={text}/>
    </ListItem>
  )
}
