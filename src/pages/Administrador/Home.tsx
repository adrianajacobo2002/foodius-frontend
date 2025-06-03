import {
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Divider,
  Stack,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import BusinessCard from "../../components/Solicitud/index"; // ajusta según tu ruta

export default function SolicitudesPage() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Imagen y bienvenida */}
      <Box textAlign="center" mb={4}>
        <Box
          sx={{
            backgroundColor: "#fae4e4",
            height: 200,
            borderRadius: 2,
            position: "relative",
          }}
        >
          <Avatar
            sx={{
              width: 200,
              height: 200,
              bgcolor: "#f20574",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) translateY(50%)",
              bottom: -5,
            }}
          />
        </Box>
        <Typography variant="h3" fontWeight="bold" mt={15}>
          Bienvenido Chris
        </Typography>
      </Box>

      {/* Título */}
      <Typography variant="h4" fontWeight="bold" color="#f20574" mb={2}>
        Solicitudes
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          mb: 1,
          "& .MuiTabs-indicator": { backgroundColor: "#f20574" },
        }}
      >
        
        <Tab label="Pendientes" sx={{ textTransform: "none" }} />
        <Tab label="Aprobadas" sx={{ textTransform: "none" }} />
        <Tab label="Rechazadas" sx={{ textTransform: "none" }} />
      </Tabs>

      <Divider sx={{ mb: 2 }} />

      {/* Lista de cards */}
      <Stack spacing={2}>
        {/* Puedes filtrar las cards según `tab` si tienes lógica dinámica */}
        <BusinessCard
          name="Antojitos Rosita"
          status="En espera"
          image="/images/plato.png"
        />
        <BusinessCard
          name="Antojitos Rosita"
          status="En espera"
          image="/images/plato.png"
        />
        <BusinessCard
          name="Antojitos Rosita"
          status="Denegada"
          image="/images/plato.png"
        />
        <BusinessCard
          name="Antojitos Rosita"
          status="Aprobada"
          image="/images/plato.png"
        />
      </Stack>
    </Container>
  );
}
