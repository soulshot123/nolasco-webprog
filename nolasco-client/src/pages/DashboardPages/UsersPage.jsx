import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';

const columns = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 70,
    },
    { 
        field: 'avatar',
        headerName: 'Avatar',
        width: 80,
        renderCell: (params) => (
            <Avatar src={params.value} alt={params.row.firstName} />
        ),
    },
    { 
        field: 'firstName', 
        headerName: 'First name', 
        width: 130, 
        editable: true,
    },
    { 
        field: 'lastName', 
        headerName: 'Last name', 
        width: 130,
        editable: true,
    },
    { 
        field: 'email', 
        headerName: 'Email', 
        width: 200,
        editable: true,
    },
    { 
        field: 'role', 
        headerName: 'Role',
        width: 120,
        editable: true,
    },
    { 
        field: 'status', 
        headerName: 'Status',
        width: 100,
        editable: true,
    },
    { 
        field: 'lastLogin', 
        headerName: 'Last Login',
        width: 150,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 120,
        sortable: false,
        renderCell: (params) => (
            <>
                <IconButton size="small" color="primary">
                    <EditIcon />
                </IconButton>
                <IconButton size="small" color="error">
                    <DeleteIcon />
                </IconButton>
            </>
        ),
    },
];

const rows = [
    { 
        id: 1, 
        firstName: 'Jon', 
        lastName: 'Snow', 
        email: 'jon.snow@company.com',
        role: 'Admin',
        status: 'Active',
        lastLogin: '2024-01-15 10:30',
        avatar: 'https://i.pravatar.cc/150?img=1'
    },
    { 
        id: 2, 
        firstName: 'Cersei', 
        lastName: 'Lannister', 
        email: 'cersei.lannister@company.com',
        role: 'Manager',
        status: 'Active',
        lastLogin: '2024-01-14 09:15',
        avatar: 'https://i.pravatar.cc/150?img=5'
    },
    { 
        id: 3, 
        firstName: 'Jaime', 
        lastName: 'Lannister', 
        email: 'jaime.lannister@company.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2024-01-13 14:20',
        avatar: 'https://i.pravatar.cc/150?img=3'
    },
    { 
        id: 4, 
        firstName: 'Arya', 
        lastName: 'Stark', 
        email: 'arya.stark@company.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2024-01-12 16:45',
        avatar: 'https://i.pravatar.cc/150?img=9'
    },
    { 
        id: 5, 
        firstName: 'Daenerys', 
        lastName: 'Targaryen', 
        email: 'daenerys.targaryen@company.com',
        role: 'Admin',
        status: 'Active',
        lastLogin: '2024-01-11 11:00',
        avatar: 'https://i.pravatar.cc/150?img=11'
    },
    { 
        id: 6, 
        firstName: 'Tyrion', 
        lastName: 'Lannister', 
        email: 'tyrion.lannister@company.com',
        role: 'Manager',
        status: 'Active',
        lastLogin: '2024-01-10 08:30',
        avatar: 'https://i.pravatar.cc/150?img=13'
    },
    { 
        id: 7, 
        firstName: 'Ferrara', 
        lastName: 'Clifford', 
        email: 'ferrara.clifford@company.com',
        role: 'User',
        status: 'Inactive',
        lastLogin: '2024-01-05 12:00',
        avatar: 'https://i.pravatar.cc/150?img=15'
    },
    { 
        id: 8, 
        firstName: 'Rossini', 
        lastName: 'Frances', 
        email: 'rossini.frances@company.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2024-01-09 15:30',
        avatar: 'https://i.pravatar.cc/150?img=17'
    },
    { 
        id: 9, 
        firstName: 'Harvey', 
        lastName: 'Roxie', 
        email: 'harvey.roxie@company.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2024-01-08 10:00',
        avatar: 'https://i.pravatar.cc/150?img=19'
    },
    { 
        id: 10, 
        firstName: 'John', 
        lastName: 'Doe', 
        email: 'john.doe@company.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2024-01-07 09:45',
        avatar: 'https://i.pravatar.cc/150?img=21'
    },
    { 
        id: 11, 
        firstName: 'Jane', 
        lastName: 'Smith', 
        email: 'jane.smith@company.com',
        role: 'Manager',
        status: 'Active',
        lastLogin: '2024-01-06 14:15',
        avatar: 'https://i.pravatar.cc/150?img=23'
    },
    { 
        id: 12, 
        firstName: 'Mike', 
        lastName: 'Johnson', 
        email: 'mike.johnson@company.com',
        role: 'User',
        status: 'Inactive',
        lastLogin: '2023-12-20 11:30',
        avatar: 'https://i.pravatar.cc/150?img=25'
    },
];

function UsersPage() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Users Management
            </Typography>
            
            {/* Summary Cards */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6" color="primary">Total Users</Typography>
                        <Typography variant="h4">{rows.length}</Typography>
                    </CardContent>
                </Card>
                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6" color="success.main">Active Users</Typography>
                        <Typography variant="h4">
                            {rows.filter(row => row.status === 'Active').length}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6" color="error.main">Inactive Users</Typography>
                        <Typography variant="h4">
                            {rows.filter(row => row.status === 'Inactive').length}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6" color="warning.main">Admins</Typography>
                        <Typography variant="h4">
                            {rows.filter(row => row.role === 'Admin').length}
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>

            {/* Search and Actions */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
                <TextField
                    placeholder="Search users..."
                    size="small"
                    sx={{ flex: 1 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<AddIcon />}
                    sx={{ flex: 0, whiteSpace: 'nowrap' }}
                >
                    Add User
                </Button>
            </Stack>

            {/* Users Data Grid */}
            <Box sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { 
                                pageSize: 10 
                            },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{
                        '& .MuiDataGrid-cell': {
                            display: 'flex',
                            alignItems: 'center',
                        },
                    }}
                />
            </Box>
        </>
    );
}

export default UsersPage;
