import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Ordenes() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header de negocio */}
      <Box mb={4}>
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
              width: 100,
              height: 100,
              bgcolor: "#f20574",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) translateY(50%)",
              bottom: -5,
            }}
          />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={8}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Ordenes
            </Typography>
            <Typography variant="body1">Horario: 9:00 AM a 11:30 PM</Typography>
          </Box>

          <Button
            variant="contained"
            size="small"
            sx={{ bgcolor: "#f20574", borderRadius: 10, textTransform: "none" }}
          >
            Editar Información
          </Button>
        </Box>
      </Box>

      {/* Botones de acceso */}
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3}>
        <Paper
          elevation={3}
          sx={{
            bgcolor: "#f5a500",
            flex: 1,
            p: 3,
            textAlign: "center",
            borderRadius: 2,
            cursor: "pointer",
            '&:hover': { opacity: 0.9 }
          }}
          onClick={() => handleNavigate("/menu")}
        >
          <Typography variant="h5" fontWeight="bold" color="#fff">
            Menú
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            bgcolor: "#f20574",
            flex: 1,
            p: 3,
            textAlign: "center",
            borderRadius: 2,
            cursor: "pointer",
            '&:hover': { opacity: 0.9 }
          }}
          onClick={() => handleNavigate("/ordenes")}
        >
          <Typography variant="h5" fontWeight="bold" color="#fff">
            Órdenes
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            bgcolor: "#000",
            flex: 1,
            p: 3,
            textAlign: "center",
            borderRadius: 2,
            cursor: "pointer",
            '&:hover': { opacity: 0.9 }
          }}
          onClick={() => handleNavigate("/horarios")}
        >
          <Typography variant="h5" fontWeight="bold" color="#fff">
            Horarios
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
