import React from 'react';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
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

// Medieval Knight Theme Colors
const themeColors = {
    gold: '#D4AF37',
    silver: '#C0C0C0',
    iron: '#4A5568',
    steel: '#2D3748',
    parchment: '#F7F4E3',
    ink: '#2D1B0F',
    velvet: '#1A0D00',
    success: '#2E7D32',
    error: '#C62828',
};

// Styled Card Component for Theme
const StyledCard = ({ children, goldAccent, ...props }) => (
    <Card
        {...props}
        sx={{
            background: 'linear-gradient(145deg, #F7F4E3, #EDE4D9)',
            border: `2px solid ${themeColors.iron}`,
            borderRadius: '8px',
            position: 'relative',
            overflow: 'visible',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                borderRadius: '10px',
                border: goldAccent ? `2px solid ${themeColors.gold}` : 'none',
                pointerEvents: 'none',
            },
            ...props.sx,
        }}
    >
        <CardContent>{children}</CardContent>
    </Card>
);

// Styled Typography
const StyledTitle = ({ children, ...props }) => (
    <Typography
        {...props}
        sx={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            color: themeColors.ink,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            borderBottom: `2px solid ${themeColors.gold}`,
            paddingBottom: '8px',
            marginBottom: '16px',
            display: 'inline-block',
            ...props.sx,
        }}
    >
        {children}
    </Typography>
);

// Styled Section Title
const SectionTitle = ({ children, ...props }) => (
    <Typography
        variant="h5"
        {...props}
        sx={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 600,
            color: themeColors.iron,
            marginTop: '24px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            '&::before': {
                content: '"👥"',
                color: themeColors.gold,
                fontSize: '1.2em',
            },
            ...props.sx,
        }}
    >
        {children}
    </Typography>
);

// Stat Value Typography
const StatValue = ({ children, ...props }) => (
    <Typography
        variant="h3"
        {...props}
        sx={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            color: themeColors.gold,
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            ...props.sx,
        }}
    >
        {children}
    </Typography>
);

// Stat Label Typography
const StatLabel = ({ children, ...props }) => (
    <Typography
        variant="overline"
        {...props}
        sx={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 600,
            letterSpacing: '0.15em',
            color: themeColors.iron,
            ...props.sx,
        }}
    >
        {children}
    </Typography>
);

// Styled Button
const MedievalButton = ({ children, goldAccent, ...props }) => (
    <Button
        {...props}
        sx={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            background: goldAccent 
                ? `linear-gradient(135deg, ${themeColors.gold}, #B8962E)`
                : `linear-gradient(135deg, ${themeColors.iron}, ${themeColors.steel})`,
            color: themeColors.parchment,
            border: `2px solid ${goldAccent ? themeColors.gold : themeColors.iron}`,
            borderRadius: '6px',
            padding: '8px 20px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            '&:hover': {
                background: goldAccent 
                    ? `linear-gradient(135deg, #E5C04B, ${themeColors.gold})`
                    : `linear-gradient(135deg, ${themeColors.steel}, ${themeColors.iron})`,
                boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
            },
            ...props.sx,
        }}
    >
        {children}
    </Button>
);

// Styled TextField
const MedievalTextField = ({ ...props }) => (
    <TextField
        {...props}
        sx={{
            '& .MuiOutlinedInput-root': {
                fontFamily: "'Cinzel', serif",
                background: 'rgba(247,244,227,0.9)',
                borderRadius: '6px',
                '& fieldset': {
                    borderColor: themeColors.iron,
                    borderWidth: '2px',
                },
                '&:hover fieldset': {
                    borderColor: themeColors.gold,
                },
                '&.Mui-focused fieldset': {
                    borderColor: themeColors.gold,
                    borderWidth: '2px',
                },
            },
            '& .MuiInputLabel-root': {
                fontFamily: "'Cinzel', serif",
                color: themeColors.iron,
            },
            '& .MuiInputBase-input': {
                color: themeColors.ink,
            },
            ...props.sx,
        }}
    />
);

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
        <Box sx={{ 
            background: 'linear-gradient(135deg, rgba(247,244,227,0.95) 0%, rgba(237,228,217,0.95) 100%)',
            padding: '24px',
            borderRadius: '12px',
            border: `2px solid ${themeColors.iron}`,
            boxShadow: 'inset 0 0 30px rgba(212,175,55,0.1)',
        }}>
            <StyledTitle variant="h4">
                👥 User Registry 👥
            </StyledTitle>
            
            {/* Summary Cards - Kingdom Subjects */}
            <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={3} 
                sx={{ mb: 4 }}
            >
                <StyledCard sx={{ flex: 1, minWidth: 150 }} goldAccent>
                    <CardContent>
                        <StatLabel>Total Subjects</StatLabel>
                        <StatValue>{rows.length}</StatValue>
                    </CardContent>
                </StyledCard>
                <StyledCard sx={{ flex: 1, minWidth: 150 }}>
                    <CardContent>
                        <StatLabel>Active Knights</StatLabel>
                        <StatValue>
                            {rows.filter(row => row.status === 'Active').length}
                        </StatValue>
                    </CardContent>
                </StyledCard>
                <StyledCard sx={{ flex: 1, minWidth: 150 }}>
                    <CardContent>
                        <StatLabel>Inactive Squires</StatLabel>
                        <StatValue>
                            {rows.filter(row => row.status === 'Inactive').length}
                        </StatValue>
                    </CardContent>
                </StyledCard>
                <StyledCard sx={{ flex: 1, minWidth: 150 }}>
                    <CardContent>
                        <StatLabel>Lord Commanders</StatLabel>
                        <StatValue>
                            {rows.filter(row => row.role === 'Admin').length}
                        </StatValue>
                    </CardContent>
                </StyledCard>
            </Stack>

            {/* Search and Actions */}
            <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={3} 
                sx={{ mb: 4 }}
            >
                <MedievalTextField
                    placeholder="Search subjects..."
                    size="small"
                    sx={{ flex: 1 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: themeColors.iron }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <MedievalButton 
                    variant="contained" 
                    goldAccent
                    startIcon={<AddIcon />}
                    sx={{ flex: 0, whiteSpace: 'nowrap' }}
                >
                    Recruit Subject
                </MedievalButton>
            </Stack>

            {/* Users Data Grid - Knights Register */}
            <SectionTitle>⚔ Knights of the Realm ⚔</SectionTitle>
            <Box sx={{ 
                height: 550, 
                width: '100%', 
                mb: 2,
                border: `2px solid ${themeColors.gold}`,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                '& .MuiDataGrid-root': {
                    border: 'none',
                },
                '& .MuiDataGrid-columnHeaders': {
                    background: `linear-gradient(135deg, ${themeColors.gold}, #B8962E)`,
                    borderBottom: `2px solid ${themeColors.iron}`,
                },
                '& .MuiDataGrid-columnHeaderTitle': {
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 700,
                    color: themeColors.ink,
                },
                '& .MuiDataGrid-cell': {
                    borderColor: `${themeColors.silver}50`,
                },
                '& .MuiDataGrid-row:hover': {
                    backgroundColor: `${themeColors.gold}20`,
                },
            }}>
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
                        backgroundColor: 'rgba(247,244,227,0.95)',
                        '& .MuiDataGrid-footer': {
                            backgroundColor: themeColors.parchment,
                        },
                    }}
                />
            </Box>

            {/* Decorative Footer */}
            <Box sx={{ 
                textAlign: 'center', 
                mt: 4, 
                pt: 2,
                borderTop: `1px solid ${themeColors.silver}`,
            }}>
                <Typography sx={{ 
                    fontFamily: "'MedievalSharp', cursive",
                    color: themeColors.gold,
                    fontSize: '1.2em',
                    letterSpacing: '0.2em',
                }}>
                    ⚜ Honor • Courage • Faith ⚜
                </Typography>
            </Box>
        </Box>
    );
}

export default UsersPage;
