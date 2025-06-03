import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import logo from "../../assets/img/foodius-logo.png";
import banner from "../../assets/img/banner.png";

const LandingPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#F5EFEF",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={banner}
            alt="Banner"
            sx={{
              width: { xs: "100%", md: "1400px" },
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Container>
      </Box>

      {/* Únete a Foodius */}
      <Box sx={{ py: 10 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ flex: "1 1 400px" }}>
            <img
              src="https://i.imgur.com/nT2Pjqz.png"
              alt="Chef"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </Box>

          <Box sx={{ flex: "1 1 400px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Únete a <span style={{ color: "#F20574" }}>#Foodius</span>
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Estamos encantados de que estés considerando unirte a nosotros. Si
              tienes un negocio en línea para pedidos o estás pensando en
              comenzar uno, este es el lugar perfecto para ti.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#F20574" }}
            >
              Ver más
            </Button>
          </Box>
        </Container>
      </Box>

      {/* #Foodius Section */}
      <Box sx={{ py: 10, backgroundColor: "#F20574", color: "#fff" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ flex: "1 1 400px" }}>
            <Typography variant="h4" fontWeight="bold">
              #Foodius
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              En Foodius, estamos comprometidos a hacer que tu experiencia de
              pedido de comida en línea sea fácil, rápida y deliciosa. ¿Te
              apetece algo? ¡lo tenemos todo cubierto!
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 400px" }}>
            <img
              src="https://i.imgur.com/TnkXahI.png"
              alt="Hot Air Balloon"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, backgroundColor: "#f7f0f2" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Foodius" style={{ height: "50px" }} />
            <Typography
              variant="h6"
              sx={{ ml: 2, color: "#E9008C", fontWeight: "bold" }}
            >
              Foodius
            </Typography>
          </Box>

          <Button variant="text" sx={{ color: "#E9008C" }}>
            Contactanos
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
