import React, { useState } from 'react';
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import usersData from '../../assets/data/users.json';

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
            padding: '12px 28px',
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
        field: 'gender', 
        headerName: 'Gender',
        width: 100,
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
        renderCell: () => (
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



function UsersPage() {
    const [rows, setRows] = useState(usersData.map((user, index) => ({
        id: index + 1,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        gender: user.gender,
        role: user.role.charAt(0).toUpperCase() + user.role.slice(1),
        status: user.isActive ? 'Active' : 'Inactive',
        lastLogin: '2024-10-' + (20 + index).toString().padStart(2, '0') + ' 14:30',
        avatar: `https://i.pravatar.cc/150?img=${index + 1}`
    })));

    // Add User Modal State
    const [openAddModal, setOpenAddModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        contactNumber: '',
        email: '',
        role: '',
        username: '',
        password: '',
        address: '',
        isActive: true
    });
    const [showPassword, setShowPassword] = useState(false);

    // Search & Filter state
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('');
    const [filterGender, setFilterGender] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    // Form validation state
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (formData.password && formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (formData.contactNumber && !/^\\d{11}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = 'Contact number must be exactly 11 digits';
        }

        if (formData.age && (isNaN(formData.age) || parseInt(formData.age) <= 0)) {
            newErrors.age = 'Age must be a positive number';
        }

        if (formData.username && /\\s/.test(formData.username)) {
            newErrors.username = 'Username must not contain spaces';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            alert('Please fix the errors below.');
            return;
        }
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.role || !formData.username || !formData.password) {
            alert('Please fill in all required fields.');
            return;
        }

        const newUser = {
            id: rows.length + 1,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            username: formData.username,
            gender: formData.gender,
            role: formData.role.charAt(0).toUpperCase() + formData.role.slice(1),
            status: formData.isActive ? 'Active' : 'Inactive',
            lastLogin: new Date().toISOString().split('T')[0] + ' 14:30',
            avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`
        };
        setRows(prev => [newUser, ...prev]);
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            contactNumber: '',
            email: '',
            role: '',
            username: '',
            password: '',
            address: '',
            isActive: true
        });
        setErrors({});
        setOpenAddModal(false);
        setShowPassword(false);
    };

    const handleOpenAddModal = () => setOpenAddModal(true);
    // Filtered rows computation
    const filteredRows = rows.filter((row) => {
        const matchesSearch = !searchTerm || 
            row.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.username?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesRole = !filterRole || row.role === filterRole;
        const matchesGender = !filterGender || row.gender === filterGender;
        const matchesStatus = !filterStatus || row.status === filterStatus;

        return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });

    const handleCloseAddModal = () => {
        setOpenAddModal(false);
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            contactNumber: '',
            email: '',
            role: '',
            username: '',
            password: '',
            address: '',
            isActive: true
        });
        setErrors({});
        setShowPassword(false);
    };

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
                        <StatValue>{filteredRows.length}</StatValue>
                    </CardContent>
                </StyledCard>
                <StyledCard sx={{ flex: 1, minWidth: 150 }}>
                    <CardContent>
                        <StatLabel>Active Knights</StatLabel>
                        <StatValue>
                            {filteredRows.filter(row => row.status === 'Active').length}
                        </StatValue>
                    </CardContent>
                </StyledCard>
                <StyledCard sx={{ flex: 1, minWidth: 150 }}>
                    <CardContent>
                        <StatLabel>Inactive Squires</StatLabel>
                        <StatValue>
                            {filteredRows.filter(row => row.status === 'Inactive').length}
                        </StatValue>
                    </CardContent>
                </StyledCard>
                <StyledCard sx={{ flex: 1, minWidth: 150 }}>
                    <CardContent>
                        <StatLabel>Lord Commanders</StatLabel>
                        <StatValue>
                            {filteredRows.filter(row => row.role === 'Admin').length}
                        </StatValue>
                    </CardContent>
                </StyledCard>
            </Stack>

            {/* Search and Filters */}
            <Stack 
                direction="row" 
                spacing={2} 
                sx={{ mb: 4, flexWrap: 'wrap', gap: 2 }}
            >
                <MedievalTextField
                    placeholder="Search by name, email, username..."
                    size="small"
                    sx={{ flex: 1, minWidth: 250 }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: themeColors.iron }} />
                            </InputAdornment>
                        ),
                    }}
                />

                <FormControl size="small" sx={{ minWidth: 140 }}>
                    <InputLabel>Role</InputLabel>
                    <Select 
                        value={filterRole} 
                        onChange={(e) => setFilterRole(e.target.value)} 
                        label="Role"
                    >
                        <MenuItem value="">All Roles</MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="User">User</MenuItem>
                        <MenuItem value="Editor">Editor</MenuItem>
                        <MenuItem value="Viewer">Viewer</MenuItem>
                        <MenuItem value="Moderator">Moderator</MenuItem>
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Gender</InputLabel>
                    <Select 
                        value={filterGender} 
                        onChange={(e) => setFilterGender(e.target.value)} 
                        label="Gender"
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 130 }}>
                    <InputLabel>Status</InputLabel>
                    <Select 
                        value={filterStatus} 
                        onChange={(e) => setFilterStatus(e.target.value)} 
                        label="Status"
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>
                </FormControl>

                <MedievalButton 
                    onClick={() => {
                        setSearchTerm('');
                        setFilterRole('');
                        setFilterGender('');
                        setFilterStatus('');
                    }}
                    sx={{ minWidth: 100 }}
                >
                    Clear
                </MedievalButton>

                <MedievalButton 
                    variant="contained" 
                    goldAccent
                    startIcon={<AddIcon />}
                    onClick={handleOpenAddModal}
                    sx={{ whiteSpace: 'nowrap' }}
                >
                    Add User
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
                    rows={filteredRows}
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

            {/* Add User Modal */}
            <Dialog open={openAddModal} onClose={handleCloseAddModal} maxWidth="md" fullWidth PaperProps={{
                sx: {
                    border: `2px solid ${themeColors.gold}`,
                    borderRadius: '12px'
                }
            }}>
                <DialogTitle sx={{ 
                    fontFamily: "'Cinzel', serif", 
                    fontWeight: 700, 
                    background: `linear-gradient(135deg, ${themeColors.gold}, #B8962E)`,
                    color: themeColors.parchment,
                    borderBottom: `2px solid ${themeColors.iron}`
                }}>
                    ⚔ Enlist New Knight ⚔
                </DialogTitle>
                <form onSubmit={handleAddUser}>
                    <DialogContent sx={{ p: 4 }}>
                        <Stack spacing={3}>
                            {/* Name Row */}
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <MedievalTextField
                                    name="firstName"
                                    label="First Name *"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    sx={{ flex: 1 }}
                                />
                                <MedievalTextField
                                    name="lastName"
                                    label="Last Name *"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    sx={{ flex: 1 }}
                                />
                            </Stack>

                            {/* Age & Gender Row */}
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <MedievalTextField
                                    name="age"
                                    label="Age"
                                    type="number"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    error={!!errors.age}
                                    helperText={errors.age}
                                    sx={{ flex: 1 }}
                                />
                                <FormControl fullWidth sx={{ flex: 1 }}>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        name="gender"
                                        value={formData.gender}
                                        label="Gender"
                                        onChange={handleInputChange}
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            {/* Contact & Email Row */}
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <MedievalTextField
                                    name="contactNumber"
                                    label="Contact Number"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    error={!!errors.contactNumber}
                                    helperText={errors.contactNumber}
                                    sx={{ flex: 1 }}
                                />
                                <MedievalTextField
                                    name="email"
                                    label="Email *"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    sx={{ flex: 1 }}
                                />
                            </Stack>

                            {/* Role & Username Row */}
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <FormControl fullWidth sx={{ flex: 1 }}>
                                    <InputLabel>Role *</InputLabel>
                                    <Select
                                        name="role"
                                        value={formData.role}
                                        label="Role *"
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <MenuItem value="admin">Admin</MenuItem>
                                        <MenuItem value="user">User</MenuItem>
                                        <MenuItem value="moderator">Moderator</MenuItem>
                                    </Select>
                                </FormControl>
                                <MedievalTextField
                                    name="username"
                                    label="Username *"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                    error={!!errors.username}
                                    helperText={errors.username}
                                    sx={{ flex: 1 }}
                                />
                            </Stack>

                            {/* Password Row */}
                            <MedievalTextField
                                name="password"
                                label="Password *"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                error={!!errors.password}
                                helperText={errors.password || 'Minimum 8 characters'}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            {/* Address Row */}
                            <MedievalTextField
                                name="address"
                                label="Address"
                                value={formData.address}
                                onChange={handleInputChange}
                                multiline
                                rows={2}
                                fullWidth
                            />

                            {/* Status Checkbox */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="isActive"
                                        checked={formData.isActive}
                                        onChange={handleInputChange}
                                        sx={{
                                            color: themeColors.iron,
                                            '&.Mui-checked': {
                                                color: themeColors.success,
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography sx={{ fontFamily: "'Cinzel', serif", color: themeColors.iron }}>
                                        Active Status
                                    </Typography>
                                }
                            />
                        </Stack>
                    </DialogContent>
                    <DialogActions sx={{ p: 3, borderTop: `1px solid ${themeColors.iron}` }}>
                        <MedievalButton onClick={handleCloseAddModal} sx={{ flex: 1 }}>
                            Cancel
                        </MedievalButton>
                        <MedievalButton 
                            type="submit" 
                            goldAccent 
                            variant="contained" 
                            sx={{ flex: 1 }}
                        >
                            Enlist Knight
                        </MedievalButton>
                    </DialogActions>
                </form>
            </Dialog>

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
