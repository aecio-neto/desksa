import React, { useState } from 'react';
import { Chip, Menu, MenuItem } from '@mui/material';

export function StatusChipWithMenu({ currentStatus, onStatusChange }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const statusColors = {
    Pendente: 'default',
    'Aguardando Cliente': 'warning',
    Fotolito: 'info',
    Corrosão: 'secondary',
    Banho: 'primary',
    Embalagem: 'success',
    Envio: 'error'
  };

  const options = Object.keys(statusColors);

  const handleChipClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (status) => {
    onStatusChange(status);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Chip
        label={currentStatus}
        color={statusColors[currentStatus] || 'default'}
        onClick={handleChipClick}
        clickable
        sx={{ cursor: 'pointer' }}
      />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {options.map((status) => (
          <MenuItem key={status} selected={status === currentStatus} onClick={() => handleMenuItemClick(status)}>
            {status}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
