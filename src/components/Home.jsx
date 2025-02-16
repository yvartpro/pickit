import React, { useState, useMemo } from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { MyTextField } from "../MyTextField";

const Home = ({ users, addUser }) => {
    const [newUser, setNewUser] = useState({ name: '', phone: '', address: '', item: '', quantity: '', isReturned: false });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prev => ({ ...prev, [name]: value }));
    };

    const handleAddUser = () => {
        addUser(newUser);
        setNewUser({ name: '', phone: '', address: '', item: '', quantity: '', isReturned: false }); // Clear form
    };

    const tableData = useMemo(() => users, [users]);


    return (
        <Paper sx={{ minHeight: '80vh', mx: 2, my: 2, p: 2, display: 'flex', flexDirection: 'row' }}>
            <Stack sx={{ width: '300px', mx: 2 }}>
                <Typography sx={{ mb: 3, fontWeight: 600 }}>Ajouter un Utilisateur</Typography>
                <MyTextField
                    type="text"
                    label="Nom et prénom"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <MyTextField
                    type="tel"
                    label="Téléphone"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <MyTextField
                    type="text"
                    label="Addresse"
                    name="address"
                    value={newUser.address}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <MyTextField
                    type="text"
                    label="Nom de l'article"
                    name="item"
                    value={newUser.item}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <MyTextField
                    type="number"
                    label="Nombre"
                    name="quantity"
                    value={newUser.quantity}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <Button type="button" onClick={handleAddUser} variant="contained" color="primary">Enregistrer</Button>
            </Stack>

            <TableContainer sx={{ width: 'auto' }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>Tableau de bord</Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Nom et Prénom</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Adresse</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Téléphone</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Article</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Quantité</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.item}</TableCell>
                                <TableCell>{user.quantity}</TableCell>
                                <TableCell>{user.isReturned ? <CheckBox /> : <CheckBox checked />}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                <MyTextField
                                    size="small"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleInputChange}
                                    placeholder="Nom"
                                />
                            </TableCell>
                            <TableCell>
                                <MyTextField
                                    size="small"
                                    name="address"
                                    value={newUser.address}
                                    onChange={handleInputChange}
                                    placeholder="Adresse"
                                />
                            </TableCell>
                            <TableCell>
                                <MyTextField
                                    size="small"
                                    name="phone"
                                    value={newUser.phone}
                                    onChange={handleInputChange}
                                    placeholder="Téléphone"
                                />
                            </TableCell>
                            <TableCell>
                                <MyTextField
                                    size="small"
                                    name="item"
                                    value={newUser.item}
                                    onChange={handleInputChange}
                                    placeholder="Article"
                                />
                            </TableCell>
                            <TableCell>
                                <MyTextField
                                    size="small"
                                    type="number"
                                    name="quantity"
                                    value={newUser.quantity}
                                    onChange={handleInputChange}
                                    placeholder="Quantité"
                                />
                            </TableCell>
                            <TableCell>
                                <Button onClick={handleAddUser} variant="contained" color="primary" size="small">
                                    Ajouter
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default Home;