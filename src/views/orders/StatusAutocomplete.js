import React from "react";
import { Autocomplete, TextField, chip } from "@mui/material";
import { current } from "@reduxjs/toolkit";

export function StatusAutocomplete({ currentStatus, onStatusChange }) {
  const options = [
    "Pendente",
    "Aguardando Cliente",
    "Fotolito",
    "Corrosão",
    "Banho",
    "Embalagem",
    "Envio",
  ];

  const statusColors = {
    Pendente: 'default',
    'Aguardando Cliente': 'warning',
    Fotolito: 'info',
    Corrosão: 'secondary',
    Banho: 'primary',
    Embalagem: 'success',
    Envio: 'error'
  };

  return (
    <Autocomplete 
      value={currentStatus || null} 
      options={options} 
      onChange={(event, newValue) => {
        onStatusChange(newValue)}}
      renderInput={(params) => (
        <TextField {...params} variant="standard" placeholder="Select Status" />
      )}
      renderOption={( props, option) => (
        <li {...props}>
          <Chip 
            label={option} 
            color={statusColors[option] || 'default'} 
            size="small"
          />
          &nbsp;{option}
        </li>
      )} 
    />
  )
}