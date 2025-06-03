import React, { useState, useContext } from 'react';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/img/foodius-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await AuthService.login({ email, password });

      const { token, user } = response.data.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setUser(user);

      // Redirigimos según el rol
      switch (user.role) {
        case "ADMIN":
          navigate('/admin');
          break;
        case "CLIENT":
          navigate('/client');
          break;
        case "BUSINESS":
          navigate('/business');
          break;
        default:
          navigate('/');
          break;
      }
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f7f0f2', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="sm" sx={{ backgroundColor: '#fff', borderRadius: '15px', p: 4, position: 'relative' }}>
        <IconButton sx={{ position: 'absolute', top: 10, left: 10 }} component={Link} to="/">
          <CloseIcon sx={{ color: '#555', fontSize: 30 }} />
        </IconButton>

        <Box display="flex" justifyContent="center" mb={3}>
          <img src={logo} alt="Logo" style={{ height: '50px' }} />
        </Box>

        <Box mb={2}>
          <Typography sx={{ color: '#E9008C', mb: 1 }}>Correo Electrónico</Typography>
          <TextField fullWidth placeholder="Example@email.com" size="small" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Box>

        <Box mb={3}>
          <Typography sx={{ color: '#E9008C', mb: 1 }}>Contraseña</Typography>
          <TextField fullWidth type="password" size="small" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Box>

        <Typography variant="body2" textAlign="center" mb={2}>
          ¿No tienes una cuenta?{' '}
          <Link to="/register" style={{ color: '#E9008C', textDecoration: 'none' }}>
            Regístrate
          </Link>
        </Typography>

        <Button fullWidth sx={{ backgroundColor: '#E9008C', color: '#fff', borderRadius: '10px', textTransform: 'none', '&:hover': { backgroundColor: '#C50075' } }}
          onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </Container>
    </Box>
  );
};

export default LoginForm;
