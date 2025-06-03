import {
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Divider,
  Stack,
  Container,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import BusinessCard from "../../components/Solicitud";
import businessService from "../../services/businessService";
import BusinessDetailModal from "../../components/BusinessDetailModal";

export default function AdminDashboard() {
  const [tab, setTab] = useState(0);
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      let response;
      if (tab === 0) {
        response = await businessService.getPending();
      } else if (tab === 1) {
        response = await businessService.getApproved();
      } else {
        response = await businessService.getRejected();
      }
      setBusinesses(response.data.data);
    } catch (error) {
      console.error("Error al obtener los negocios", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tab]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleApprove = async (id: number) => {
    try {
      await businessService.approveBusiness(id);
      await fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id: number) => {
    try {
      await businessService.rejectBusiness(id);
      await fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = (business: any) => {
    setSelectedBusiness(business);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBusiness(null);
    setModalOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
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
          Bienvenido Admin
        </Typography>
      </Box>

      <Typography variant="h4" fontWeight="bold" color="#f20574" mb={2}>
        Solicitudes
      </Typography>

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

      {loading ? (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      ) : (
        <Stack spacing={2}>
          {businesses.map((business) => (
            <BusinessCard
              key={business.id}
              name={business.name}
              status={business.status}
              image={business.logo || "/images/plato.png"}
              onApprove={() => handleApprove(business.id)}
              onReject={() => handleReject(business.id)}
              onClick={() => handleOpenModal(business)}
            />
          ))}
        </Stack>
      )}

      <BusinessDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        business={selectedBusiness}
        onApprove={async () => {
          await handleApprove(selectedBusiness.id);
          handleCloseModal();
        }}
        onReject={async () => {
          await handleReject(selectedBusiness.id);
          handleCloseModal();
        }}
      />
    </Container>
  );
}
