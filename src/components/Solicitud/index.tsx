import React from "react";
import { Box, Typography, IconButton, Avatar, Paper } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

interface BusinessCardProps {
  name: string;
  status: string;
  image: string;
  onApprove: () => void;
  onReject: () => void;
  onClick: () => void;
}

export default function BusinessCard({
  name,
  status,
  image,
  onApprove,
  onReject,
  onClick,
}: BusinessCardProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 1,
        overflow: "hidden",
        p: 1.5,
        mb: 2,
        cursor: "pointer",
      }}
      onClick={onClick} // <-- usamos el onClick
    >
      <Avatar
        variant="rounded"
        src={image}
        sx={{ width: 64, height: 64, mr: 2 }}
      />
      <Box sx={{ flex: 1 }}>
        <Typography fontWeight="bold" color="#f20574">
          {name}
        </Typography>
        <Typography color="text.secondary" fontSize={14}>
          {status}
        </Typography>
      </Box>
      <Box onClick={(e) => e.stopPropagation()}>
        {/* Solo mostramos los botones si está en pendiente */}
        {status === "PENDING" && (
          <>
            <IconButton onClick={onReject}>
              <ClearIcon />
            </IconButton>
            <IconButton onClick={onApprove}>
              <CheckIcon />
            </IconButton>
          </>
        )}
      </Box>
    </Paper>
  );
}
