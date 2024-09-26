import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Box,
} from "@mui/material";
import React from "react";

export function StatusSelect({ currentStatus, onStatusChange }) {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onStatusChange(newValue); // Pass the selected status back to DataGrid
  };

  const options = [
    "Pendente",
    "Aguardando Cliente",
    "Fotolito",
    "Corrosão",
    "Banho",
    "Embalagem",
    "Envio",
  ];

  return (
    <FormControl fullWidth sx={{ m: 1, width: 250 }}>
      <InputLabel id="status-select-label">Status</InputLabel>
      <Select
        labelId="status-select-label"
        value={currentStatus || ""}
        onChange={handleChange}
      >
        {options.map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>

      {currentStatus && (
        <Box sx={{ display: "flex", mt: 1 }}>
          <Chip label={currentStatus} color="primary" />
        </Box>
      )}
    </FormControl>
  );
}