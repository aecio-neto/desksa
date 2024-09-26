import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { StatusChipWithMenu } from './StatusChipWithMenu';
import PageHeader from 'ui-component/PageHeader/PageHeader';

const rows = [
  {
    id: 1,
    name: 'Daenerys',
    channel: 'wa',
    tel: '3199162-9182',
    status: 'Pendente'
  },
  {
    id: 2,
    name: 'Jon Snow',
    channel: 'email',
    tel: '123456789',
    status: 'Aguardando Cliente'
  },
  {
    id: 3,
    name: 'Tyrion Lannister',
    channel: 'phone',
    tel: '987654321',
    status: 'Fotolito'
  }
];

function Pedidos() {
  const [rowData, setRowData] = useState(rows);

  function handleStatusChange(id, newStatus) {
    const updatedRows = rowData.map((row) => {
      return row.id === id ? { ...row, status: newStatus } : row;
    });
    setRowData(updatedRows);
  }

  const handleCellEditCommit = React.useCallback(
    (params) => {
      const updatedRows = rowData.map((row) => (row.id === params.id ? { ...row, [params.field]: params.value } : row));
      setRowData(updatedRows); // Update the state with new status
    },
    [rowData]
  );

  const columns = [
    { field: 'date', headerName: 'Data', width: 100, editable: true },
    { field: 'name', headerName: 'Nome', width: 100, editable: true },
    {
      field: 'status',
      headerName: 'Status',
      width: 250,
      renderCell: (params) => (
        <StatusChipWithMenu
          currentStatus={params.value} // Pass current status value
          onStatusChange={(newStatus) => handleStatusChange(params.id, newStatus)}
        />
      )
    },
    { field: 'firstOrder', headerName: '1ª Compra?', width: 100, editable: true },
    { field: 'tel', headerName: 'Tel', width: 120, editable: true },
    { field: 'channel', headerName: 'Canal', width: 100, editable: true },
    { field: 'type', headerName: 'Tipo', width: 100, editable: true },
    { field: 'item', headerName: 'Item', width: 300, editable: true },
    { field: 'value', headerName: 'Valor', width: 100, editable: true },
    { field: 'frete', headerName: 'Frete', width: 100, editable: true },
    { field: 'total', headerName: 'Total', width: 100, editable: true },
    { field: 'paymentMethod', headerName: 'Pgto', width: 100, editable: true },
    { field: 'isPayd', headerName: 'Pago?', width: 30, editable: true },
    { field: 'printed', headerName: 'I', width: 20, editable: true },
    { field: 'notaFiscal', headerName: 'NF', width: 20, editable: true }
  ];

  return (
    <Box component="section">
      <PageHeader
        title="Pedidos"
        breadcrumbs={[
          { label: 'Dashboard', href: '/' },
          { label: 'Lista de Pedidos', href: '/pedidos', color: 'text.primary' }
        ]}
      />
      <Box>
      <Button variant="contained" sx={{marginBottom: 1}} size='small' startIcon={<AddCircleIcon />}>Add</Button>
        <DataGrid
          rows={rowData}
          columns={columns}
          sx={{
            '& .MuiDataGrid-cell': {
              border: '1px solid #ccc'
            },
            width: '100%'
          }}
          rowHeight={60}
          checkboxSelection
          editMode="cell"
          density="compact"
        />
      </Box>
    </Box>
  );
}

export default Pedidos;
