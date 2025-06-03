import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

// Registrar los componentes de ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export default function Home() {
  const [filter, setFilter] = React.useState("Semanal");

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  // Dummy data
  const productBarData = {
    labels: ["Taco", "Burrito", "Quesadilla", "Nachos", "Enchiladas"],
    datasets: [
      {
        label: "Ventas",
        data: [150, 120, 90, 60, 30],
        backgroundColor: "#f20574",
      },
    ],
  };

  const hoursLineData = {
    labels: ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    datasets: [
      {
        label: "Pedidos",
        data: [5, 12, 18, 30, 20, 10, 5],
        borderColor: "#f20574",
        backgroundColor: "#f20574",
        fill: false,
      },
    ],
  };

  const salesLineData = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    datasets: [
      {
        label: "Ventas ($)",
        data: [200, 450, 300, 500, 700, 900, 400],
        borderColor: "#f20574",
        backgroundColor: "#f20574",
        fill: false,
      },
    ],
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header de negocio */}
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

        <Typography variant="h4" fontWeight="bold" mt={8}>
          Rico Rico Taco
        </Typography>

        <Typography variant="body1" mt={1}>
          Horario: 9:00 AM a 11:30 PM
        </Typography>

        <Button variant="contained" sx={{ mt: 2, bgcolor: "#f20574" }}>
          Administrar negocio
        </Button>

        <Box display="flex" justifyContent="center" gap={4} mt={3}>
          <Box>
            <Typography variant="h6" color="#f20574">
              $0.00
            </Typography>
            <Typography variant="body2">Ingresos</Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="#f20574">
              0
            </Typography>
            <Typography variant="body2">Órdenes</Typography>
          </Box>
        </Box>
      </Box>

      {/* Métricas */}
      <Typography variant="h5" fontWeight="bold" color="#f20574" mb={2}>
        Tus Métricas
      </Typography>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3}>
        <Paper elevation={1} sx={{ p: 2, flex: 1, height: 300 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Producto más vendido
          </Typography>
          <Bar data={productBarData} />
        </Paper>

        <Paper elevation={1} sx={{ p: 2, flex: 1, height: 300 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Hora con más pedidos
          </Typography>
          <Line data={hoursLineData} />
        </Paper>
      </Box>

      {/* Ventas totales */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Ventas
        </Typography>

        <FormControl size="small" sx={{ mb: 2 }}>
          <InputLabel>Filtrar</InputLabel>
          <Select value={filter} onChange={handleFilterChange} label="Filtrar">
            <MenuItem value="Semanal">Semanal</MenuItem>
            <MenuItem value="Mensual">Mensual</MenuItem>
            <MenuItem value="Anual">Anual</MenuItem>
          </Select>
        </FormControl>

        <Paper elevation={1} sx={{ p: 2, height: 350 }}>
          <Line data={salesLineData} />
        </Paper>
      </Box>
    </Container>
  );
}
