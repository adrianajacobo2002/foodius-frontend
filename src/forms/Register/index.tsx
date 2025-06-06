import React, { useState } from 'react';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/img/foodius-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/authService';

const RegisterForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const requestBody = {
        first_name: firstName,
        last_names: lastName,
        email: email,
        phone_number: phone,
        password: password
      };

      const response = await AuthService.register(requestBody);
      localStorage.setItem('token', response.data.data.token);
      navigate('/login');
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || 'Error al registrar');
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

        <Box display="flex" gap={2} mb={2}>
          <Box flex={1}>
            <Typography sx={{ color: '#E9008C', mb: 1 }}>Nombres</Typography>
            <TextField fullWidth placeholder="Nombres" size="small" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </Box>
          <Box flex={1}>
            <Typography sx={{ color: '#E9008C', mb: 1 }}>Apellidos</Typography>
            <TextField fullWidth placeholder="Apellidos" size="small" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Box>
        </Box>

        <Box mb={2}>
          <Typography sx={{ color: '#E9008C', mb: 1 }}>Correo Electrónico</Typography>
          <TextField fullWidth placeholder="Example@email.com" size="small" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Box>

        <Box mb={2}>
          <Typography sx={{ color: '#E9008C', mb: 1 }}>Teléfono</Typography>
          <TextField fullWidth placeholder="XXXX - XXXX" size="small" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Box>

        <Box mb={2}>
          <Typography sx={{ color: '#E9008C', mb: 1 }}>Contraseña</Typography>
          <TextField fullWidth type="password" size="small" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Box>

        <Typography variant="body2" textAlign="center" mb={2}>
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" style={{ color: '#E9008C', textDecoration: 'none' }}>
            Inicia Sesión
          </Link>
        </Typography>

        <Button fullWidth sx={{ backgroundColor: '#E9008C', color: '#fff', borderRadius: '10px', textTransform: 'none', '&:hover': { backgroundColor: '#C50075' } }}
          onClick={handleRegister}>
          Registrarse
        </Button>
      </Container>
    </Box>
  );
};

export default RegisterForm;
