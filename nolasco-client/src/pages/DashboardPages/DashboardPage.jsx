import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Medieval Knight Theme Colors
const themeColors = {
    gold: '#D4AF37',
    silver: '#C0C0C0',
    iron: '#4A5568',
    steel: '#2D3748',
    parchment: '#F7F4E3',
    ink: '#2D1B0F',
    velvet: '#1A0D00',
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
                content: '"⚔"',
                color: themeColors.gold,
                fontSize: '1.2em',
            },
            ...props.sx,
        }}
    >
        {children}
    </Typography>
);

const columns = [
    { 
        field: 'firstName', 
        headerName: 'First Name', 
        width: 150, 
        editable: true,
        headerAlign: 'left',
        headerClassName: 'knight-header',
    },
    { 
        field: 'lastName', 
        headerName: 'Last Name', 
        width: 150,
        editable: true,
    },
    { 
        field: 'age', 
        headerName: 'Age',
        type: 'number', 
        width: 110,
        editable: true,
    },
    { 
        field: 'fullName', 
        headerName: 'Full Name',
        description: 'This column has a value getter and is not sortable.', 
        width: 200,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DashboardPage() {
    return (
        <Box sx={{ 
            background: 'linear-gradient(135deg, rgba(247,244,227,0.95) 0%, rgba(237,228,217,0.95) 100%)',
            padding: '24px',
            borderRadius: '12px',
            border: `2px solid ${themeColors.iron}`,
            boxShadow: 'inset 0 0 30px rgba(212,175,55,0.1)',
        }}>
            <StyledTitle variant="h4">
                ⚔ Dashboard Overview ⚔
            </StyledTitle>
            
            {/* Summary Section */}
            <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={3} 
                sx={{ mb: 4 }}
            >
                <StyledCard sx={{ flex: 1, minWidth: 200 }} goldAccent>
                    <CardContent>
                        <Typography variant="overline" sx={{ 
                            color: themeColors.iron, 
                            fontFamily: "'Cinzel', serif",
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                        }}>
                            Total Knights
                        </Typography>
                        <Typography variant="h3" sx={{ 
                            color: themeColors.gold,
                            fontWeight: 700,
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        }}>
                            {rows.length}
                        </Typography>
                        <Typography variant="caption" sx={{ color: themeColors.silver }}>
                            Active members in realm
                        </Typography>
                    </CardContent>
                </StyledCard>
                <StyledCard sx={{ flex: 1, minWidth: 200 }}>
                    <CardContent>
                        <Typography variant="overline" sx={{ 
                            color: themeColors.iron, 
                            fontFamily: "'Cinzel', serif",
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                        }}>
                            Average Age
                        </Typography>
                        <Typography variant="h3" sx={{ 
                            color: themeColors.iron,
                            fontWeight: 700,
                        }}>
                            {(
                                rows.reduce((sum, row) => sum + (row.age || 0), 0) / 
                                rows.filter((row) => row.age !== null).length
                            ).toFixed(1)}
                        </Typography>
                        <Typography variant="caption" sx={{ color: themeColors.silver }}>
                            Years of service
                        </Typography>
                    </CardContent>
                </StyledCard>
            </Stack>

{/* Charts */}
            <Stack 
                direction={{ xs: 'column', lg: 'row' }} 
                spacing={3} 
                sx={{ mb: 4 }}
            >
                <Box sx={{ flex: 2, minWidth: 300 }}>
                    <SectionTitle>Quarterly Campaign Results</SectionTitle>
                    <Box sx={{ 
                        background: 'rgba(247,244,227,0.8)',
                        border: `1px solid ${themeColors.iron}`,
                        borderRadius: '8px',
                        p: 2,
                        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
                    }}>
                        <BarChart
                            series={[
                                {
                                    data: [35, 44, 24, 34], 
                                    label: 'Victories',
                                    color: themeColors.gold,
                                },
                                {
                                    data: [51, 6, 49, 30], 
                                    label: 'Battles',
                                    color: themeColors.iron,
                                },
                            ]}
                            height={290}
                            xAxis={[{ 
                                data: ['Q1', 'Q2', 'Q3', 'Q4'], 
                                scaleType: 'band', 
                                label: 'Quarters',
                                tickLabelStyle: { fill: themeColors.ink, fontFamily: "'Cinzel', serif" },
                                labelStyle: { fill: themeColors.ink, fontWeight: 600 },
                            }]}
                            title="Quarterly Performance"
                            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                            sx={{
                                '.MuiCharts-axisLabel': {
                                    fill: themeColors.ink,
                                },
                            }}
                        />
                    </Box>
                </Box>
                <Box sx={{ flex: 1, minWidth: 250 }}>
<SectionTitle>Resource Distribution</SectionTitle>
                    <Box sx={{ 
                        background: 'rgba(247,244,227,0.8)',
                        border: `1px solid ${themeColors.iron}`,
                        borderRadius: '8px',
                        p: 2,
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Gold' },
                                        { id: 1, value: 15, label: 'Silver' },
                                        { id: 2, value: 20, label: 'Iron' },
                                    ],
                                    color: [
                                        themeColors.gold,
                                        themeColors.silver,
                                        themeColors.iron,
                                    ],
                                    arcLabel: (item) => `${item.value}`,
                                    arcLabelMinAngle: 45,
                                },
                            ]}
                            width={250}
                            height={250}
                            sx={{
                                '& .MuiChartsPie-series-label': {
                                    fontFamily: "'Cinzel', serif",
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    fill: themeColors.ink,
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Stack>

            {/* Data Grid - Knights Register */}
            <SectionTitle>⚔ Knights Register ⚔</SectionTitle>
            <Box sx={{ 
                height: 400, 
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
                    experimentalFeatures={{ newEditingApi: true }}
                    initialState={{
                        pagination: {
                            paginationModel: { 
                                pageSize: 5 
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
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

            {/* Map - Kingdom Location */}
            <SectionTitle>⚔ Kingdom Location ⚔</SectionTitle>
            <Box sx={{ 
                height: 400, 
                width: '100%',
                border: `2px solid ${themeColors.gold}`,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}>
                <MapContainer 
                    center={[14.604253, 120.994314]} 
                    zoom={13} 
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap contributors'
                    />
                    <Marker position={[14.604253, 120.994314]}>
                        <Popup>
                            <div style={{ 
                                fontFamily: "'Cinzel', serif",
                                textAlign: 'center',
                            }}>
                                <strong>🏰 Castle Nuñas</strong>
                                <br />
                                <i>551 M. F. Jhocson St, Sampaloc, Manila</i>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
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

export default DashboardPage;
