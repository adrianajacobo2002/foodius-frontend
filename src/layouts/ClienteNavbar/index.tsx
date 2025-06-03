import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Box, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/foodius-logo.png';
import PersonIcon from '@mui/icons-material/Person';
import { AuthContext } from '../../contexts/AuthContext';

const ClientNavbar: React.FC = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: '#F5EFEF', boxShadow: 'none', py: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
          <Box>
            <Link to="/client">
              <img src={logo} alt="Foodius Logo" style={{ height: '55px' }} />
            </Link>
          </Box>

          <Box>
            <IconButton size="large" sx={{ color: '#E9008C' }} onClick={handleMenuClick}>
              <PersonIcon fontSize="large" />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ClientNavbar;
