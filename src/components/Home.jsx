import React, { useState, useMemo } from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {DataGrid}  from '@mui/x-data-grid';
import CheckBox from "@mui/icons-material/CheckBox";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box'

const Home = ({ rentals, addRent }) => {
  const [newRent, setnewRent] = useState({ name: '',userId:'',phone: '', address: '', item: '', quantity: '', isReturned: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setnewRent(prev => ({ ...prev, [name]: value }));
  };

  const handleaddRent = () => {
    addRent(newRent);
    setnewRent({ name: '', phone: '', address: '', item: '', quantity: '', isReturned: false }); // Clear form
  };

  const columns = [
    { field: 'name', headerName: 'Nom et Prénom', width: 250 },
    { field: 'address', headerName: 'Adresse', width: 150 },
    { field: 'phone', headerName: 'Téléphone', width: 100 },
    { field: 'item', headerName: 'Article', width: 150 },
    { field: 'quantity', headerName: 'QT', type: 'number', width: 50 },
    {
      field: 'isReturned',
      headerName: 'Status',
      width: 80,
      renderCell: (params) => params.value ? <CheckBox /> : <CheckBox />
    }
  ];

  const rows = useMemo(() => rentals.map((user, index) => ({
    id: index + 1,  // Add unique 'id' for each row (required by DataGrid)
    name: user.name,
    address: user.address,
    phone: user.phone,
    item: user.item,
    quantity: user.quantity,
    isReturned: user.isReturned
  })), [rentals]);

  return (
    <Stack sx={{ minHeight: '80vh', mx: 2, my: 2, p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>Tableau de bord</Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          filterModel={{
            items: [
              { columnField: 'name', operatorValue: 'contains', value: '' },
              { columnField: 'address', operatorValue: 'contains', value: '' }
            ],
          }}
        />
      </div>
      <Box sx={{display:{lg:'flex',md:'none',xs:'none'}, justifyContent:'space-around', alignItems:'center', py:2,flexDirection:'row'}}>
            <TextField
              size="small"
              sx={{mx:1}}
              name="name"
              value={newRent.name}
              onChange={handleInputChange}
              placeholder="Nom"
            />
            <TextField
              size="small"
              sx={{mx:1}}
              name="address"
              value={newRent.address}
              onChange={handleInputChange}
              placeholder="Adresse"
            />
            <TextField
              size="small"
              sx={{mx:1}}
              name="phone"
              value={newRent.phone}
              onChange={handleInputChange}
              placeholder="Téléphone"
            />
            <TextField
              size="small"
              sx={{mx:1}}
              name="item"
              value={newRent.item}
              onChange={handleInputChange}
              placeholder="Article"
              />
            <TextField
              size="small"
              sx={{width:'100px',mx:1}}
              type="number"
              name="quantity"
              value={newRent.quantity}
              onChange={handleInputChange}
              placeholder="Quantité"
            />
            <Button onClick={handleaddRent} variant="contained" color="primary" size="small">Ajouter</Button>
      </Box>
      <Box sx={{display:{md:'flex',lg:'none', xs:'none'}, justifyContent:'space-around', alignItems:'center', py:2, flexDirection:'row'}}>
        <TextField
          size="small"
          sx={{mx:1}}
          name="name"
          value={newRent.name}
          onChange={handleInputChange}
          placeholder="Nom"
        />
        <TextField
          size="small"
          sx={{mx:1}}
          name="address"
          value={newRent.address}
          onChange={handleInputChange}
          placeholder="Adresse"
        />
        <TextField
          size="small"
          sx={{mx:1}}
          name="phone"
          value={newRent.phone}
          onChange={handleInputChange}
          placeholder="Téléphone"
        />
        <TextField
          size="small"
          sx={{mx:1}}
          name="item"
          value={newRent.item}
          onChange={handleInputChange}
          placeholder="Article"
        />
        <TextField
          size="small"
          sx={{width:'100px',mx:1}}
          type="number"
          name="quantity"
          value={newRent.quantity}
          onChange={handleInputChange}
          placeholder="Quantité"
        />
        <Button onClick={handleaddRent} variant="contained" color="primary" size="small">Ajouter</Button>
      </Box>
      <Box sx={{display:{xs:'flex',md:'none',lg:'none'}, justifyContent:'space-around', alignItems:'center', py:2, flexDirection:'column'}}>
        <Typography variant="h6" sx={{ my: 1, fontWeight: 600 }}>Nouveau client</Typography>
        <Stack direction="column">
          <TextField
            size="small"
            name="name"
            value={newRent.name}
            onChange={handleInputChange}
            placeholder="Nom"
          />
          <TextField
            size="small"
            name="address"
            value={newRent.address}
            onChange={handleInputChange}
            placeholder="Adresse"
          />
          <TextField
            size="small"
            name="phone"
            value={newRent.phone}
            onChange={handleInputChange}
            placeholder="Téléphone"
          />
          <TextField
            size="small"
            name="item"
            value={newRent.item}
            onChange={handleInputChange}
            placeholder="Article"
          />
          <TextField
            size="small"
            type="number"
            name="quantity"
            value={newRent.quantity}
            onChange={handleInputChange}
            placeholder="Quantité"
          />
          <Button onClick={handleaddRent} variant="contained" color="primary" size="small">Ajouter</Button>
        </Stack>
      </Box>
  </Stack>
  );
};

export default Home;