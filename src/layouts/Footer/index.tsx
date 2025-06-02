import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f0f2', padding: '3rem 0' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>Foodius</Typography>
            <Typography variant="body2">
              En Foodius, creemos que la comida es más que una necesidad básica;
              es una experiencia que une a las personas y enriquece sus vidas.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>Servicios</Typography>
            <Typography variant="body2">Servicio 1</Typography>
            <Typography variant="body2">Servicio 2</Typography>
            <Typography variant="body2">Servicio 3</Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>Servicio al Cliente</Typography>
            <Typography variant="body2">Soporte</Typography>
            <Typography variant="body2">Preguntas Frecuentes</Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>Contáctanos</Typography>
            <Typography variant="body2">Nuestras oficinas</Typography>
            <Typography variant="body2">foodius@email.com</Typography>
            <Typography variant="body2">(+503) XXXX-XXXX</Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="body2" color="textSecondary">
            © 2024 Todos los derechos reservados Foodius S.A de C.V
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
