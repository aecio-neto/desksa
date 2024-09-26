import React, { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';

const OrdersViewTeste = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    orderDetails: '',
    date: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Inserir Pedido</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome do Cliente"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Detalhes do Pedido"
              name="orderDetails"
              value={formData.orderDetails}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Data"
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Valor"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Salvar Pedido
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default OrdersViewTeste;