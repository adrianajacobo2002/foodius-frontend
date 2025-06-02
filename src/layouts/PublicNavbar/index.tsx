import React from 'react';
import { AppBar, Toolbar, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/react.svg'; // aquí iría tu logo real

const PublicNavbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#f7f0f2', boxShadow: 'none', padding: '10px 0' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Link to="/">
              <img src={logo} alt="Foodius Logo" style={{ height: '40px' }} />
            </Link>
          </Box>
          <Box>
            <Button component={Link} to="/login" sx={{ color: '#FFA500', marginRight: 2 }}>
              Iniciar Sesión
            </Button>
            <Button
              component={Link}
              to="/register"
              sx={{
                backgroundColor: '#E9008C',
                color: '#fff',
                borderRadius: '15px',
                '&:hover': { backgroundColor: '#C50075' },
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
