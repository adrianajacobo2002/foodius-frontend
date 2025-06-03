import React from 'react';
import { AppBar, Toolbar, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/foodius-logo.png';

const PublicNavbar: React.FC = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#F5EFEF', 
        boxShadow: 'none', 
        py: 2 // más padding vertical
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
          
          {/* Logo */}
          <Box>
            <Link to="/">
              <img src={logo} alt="Foodius Logo" style={{ height: '55px' }} />
            </Link>
          </Box>

          {/* Botones */}
          <Box>
            <Button 
              component={Link} 
              to="/login" 
              sx={{ 
                backgroundColor: '#FFA500', 
                color: '#fff', 
                borderRadius: '10px',
                fontWeight: 'bold',
                mr: 2,
                px: 3,
                py: 1,
                '&:hover': { backgroundColor: '#e69500' } 
              }}
            >
              Iniciar Sesión
            </Button>

            <Button
              component={Link}
              to="/register"
              sx={{
                backgroundColor: '#E9008C',
                color: '#fff',
                borderRadius: '10px',
                px: 3,
                py: 1,
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#F20574' },
              }}
            >
              Registrarse
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PublicNavbar;
