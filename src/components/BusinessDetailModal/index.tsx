import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from "@mui/material";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

// Fix para los íconos de Leaflet
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface BusinessDetailModalProps {
  open: boolean;
  business: any;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
}

export default function BusinessDetailModal({
  open,
  business,
  onClose,
  onApprove,
  onReject,
}: BusinessDetailModalProps) {
  if (!business) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Detalle del Negocio</DialogTitle>
      <DialogContent dividers>
        <DialogContentText><strong>Nombre:</strong> {business.name}</DialogContentText>
        <DialogContentText><strong>Email:</strong> {business.email}</DialogContentText>
        <DialogContentText><strong>Teléfono:</strong> {business.phone_number}</DialogContentText>
        <DialogContentText><strong>Ubicación:</strong> {business.location}</DialogContentText>
        <DialogContentText><strong>Estado:</strong> {business.approval_status}</DialogContentText>

        {business.latitude && business.longitude && (
          <Box mt={2}>
            <MapContainer
              center={[business.latitude, business.longitude]}
              zoom={16}
              style={{ height: "300px", width: "100%", borderRadius: "10px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={[business.latitude, business.longitude]}>
                <Popup>{business.name}</Popup>
              </Marker>
            </MapContainer>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cerrar</Button>
        {business.approval_status === "PENDING" && (
          <>
            <Button onClick={onReject} color="error">Rechazar</Button>
            <Button onClick={onApprove} color="success">Aprobar</Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
