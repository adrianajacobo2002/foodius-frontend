import React from "react";
import { Box, Typography, IconButton, Avatar, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

interface BusinessCardProps {
  name: string;
  status: string;
  image: string;
  onEdit?: () => void;
  onApprove?: () => void;
  onReject?: () => void;
}

export default function BusinessCard({
  name,
  status,
  image,
  onEdit,
  onApprove,
  onReject,
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
      }}
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
      <Box>
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onReject}>
          <ClearIcon />
        </IconButton>
        <IconButton onClick={onApprove}>
          <CheckIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
