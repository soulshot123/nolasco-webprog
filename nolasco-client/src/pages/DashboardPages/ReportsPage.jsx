import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
    increase: '#1B5E20',
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
                content: '"📜"',
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

// Change Indicator
const ChangeIndicator = ({ change, positive = true, ...props }) => (
    <Typography
        variant="body2"
        {...props}
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: positive ? themeColors.success : '#C62828',
            fontWeight: 600,
            fontFamily: "'Cinzel', serif",
            ...props.sx,
        }}
    >
        {positive ? '▲' : '▼'} {change}
    </Typography>
);

const barChartData = [
    { id: 'Jan', value: 2800 },
    { id: 'Feb', value: 3900 },
    { id: 'Mar', value: 2000 },
    { id: 'Apr', value: 4200 },
    { id: 'May', value: 3100 },
    { id: 'Jun', value: 4500 },
];

const pieChartData = [
    { id: 'Desktop', value: 400, label: 'Desktop' },
    { id: 'Mobile', value: 300, label: 'Mobile' },
    { id: 'Tablet', value: 300, label: 'Tablet' },
    { id: 'Other', value: 200, label: 'Other' },
];

const lineChartSeries = [
    {
        data: [3500, 4200, 3800, 5200, 4900, 6100, 5800, 7200, 6900, 8400],
        label: 'Revenue',
    },
];

const lineChartXAxis = [
    {
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        scaleType: 'band',
    },
];

function ReportsPage() {
    return (
        <Box sx={{ 
            background: 'linear-gradient(135deg, rgba(247,244,227,0.95) 0%, rgba(237,228,217,0.95) 100%)',
            padding: '24px',
            borderRadius: '12px',
            border: `2px solid ${themeColors.iron}`,
            boxShadow: 'inset 0 0 30px rgba(212,175,55,0.1)',
        }}>
            <StyledTitle variant="h4">
                📜 Reports & Analytics 📜
            </StyledTitle>
            
            {/* Summary Cards - Treasury Overview */}
            <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={3} 
                sx={{ mb: 4 }}
            >
                <StyledCard sx={{ flex: 1 }} goldAccent>
                    <CardContent>
                        <StatLabel>Treasury</StatLabel>
                        <StatValue>$52,400</StatValue>
                        <ChangeIndicator change="+15% from last month" positive />
                    </CardContent>
                </StyledCard>
                <StyledCard sx={{ flex: 1 }}>
                    <CardContent>
                        <StatLabel>Total Sales</StatLabel>
                        <StatValue>38,450</StatValue>
                        <ChangeIndicator change="+8% from last month" positive />
                    </CardContent>
                </StyledCard>
                <StyledCard sx={{ flex: 1 }}>
                    <CardContent>
                        <StatLabel>Conversion Rate</StatLabel>
                        <StatValue>3.2%</StatValue>
                        <ChangeIndicator change="+0.5% from last month" positive />
                    </CardContent>
                </StyledCard>
            </Stack>

            {/* Bar Chart - Monthly Revenue */}
            <SectionTitle>Monthly Treasury Income</SectionTitle>
            <Box sx={{ 
                height: 320, 
                width: '100%', 
                mb: 4,
                background: 'rgba(247,244,227,0.8)',
                border: `1px solid ${themeColors.iron}`,
                borderRadius: '8px',
                p: 2,
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
            }}>
                <BarChart
                    dataset={barChartData}
                    xAxis={[{ 
                        scaleType: 'band', 
                        dataKey: 'id',
                        tickLabelStyle: { fill: themeColors.ink, fontFamily: "'Cinzel', serif" },
                        labelStyle: { fill: themeColors.ink, fontFamily: "'Cinzel', serif", fontWeight: 600 },
                    }]}
                    series={[{ 
                        dataKey: 'value', 
                        label: 'Revenue ($)',
                        color: themeColors.gold,
                    }]}
                    height={300}
                    margin={{ top: 40, right: 40, bottom: 40, left: 60 }}
                    sx={{
                        '& .MuiCharts-axisLabel': {
                            fill: themeColors.ink,
                            fontFamily: "'Cinzel', serif",
                        },
                        '& .MuiCharts-tick': {
                            fill: themeColors.ink,
                        },
                    }}
                />
            </Box>

            {/* Pie Chart - Sales by Category */}
            <SectionTitle>Distribution by Province</SectionTitle>
            <Stack 
                direction={{ xs: 'column', lg: 'row' }} 
                spacing={3}
                sx={{ mb: 4 }}
            >
                <Box sx={{ 
                    flex: 1,
                    background: 'rgba(247,244,227,0.8)',
                    border: `1px solid ${themeColors.iron}`,
                    borderRadius: '8px',
                    p: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
                }}>
                    <PieChart
                        series={[
                            {
                                data: pieChartData,
                                innerRadius: 60,
                                outerRadius: 100,
                                colors: [
                                    themeColors.gold,
                                    themeColors.silver,
                                    themeColors.iron,
                                    themeColors.steel,
                                ],
                            },
                        ]}
                        height={280}
                        width={320}
                    />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Stack spacing={2}>
                        {pieChartData.map((item, index) => (
                            <Box
                                key={item.id}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 2,
                                    borderRadius: '8px',
                                    border: `1px solid ${themeColors.silver}`,
                                    background: 'linear-gradient(145deg, #F7F4E3, #EDE4D9)',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        borderRadius: '4px',
                                        backgroundColor: [
                                            themeColors.gold,
                                            themeColors.silver,
                                            themeColors.iron,
                                            themeColors.steel,
                                        ][index],
                                        border: `1px solid ${themeColors.ink}`,
                                    }}
                                />
                                <Typography sx={{ 
                                    flex: 1,
                                    fontFamily: "'Cinzel', serif",
                                    fontWeight: 600,
                                    color: themeColors.ink,
                                }}>
                                    {item.label}
                                </Typography>
                                <Typography sx={{ 
                                    fontFamily: "'Cinzel', serif",
                                    fontWeight: 700,
                                    color: themeColors.gold,
                                }}>
                                    {item.value}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Stack>

            {/* Line Chart - Revenue Trends */}
            <SectionTitle>Revenue Expedition Trends</SectionTitle>
            <Box sx={{ 
                height: 320, 
                width: '100%', 
                mb: 4,
                background: 'rgba(247,244,227,0.8)',
                border: `1px solid ${themeColors.iron}`,
                borderRadius: '8px',
                p: 2,
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
            }}>
                <LineChart
                    series={lineChartSeries}
                    xAxis={lineChartXAxis}
                    height={300}
                    margin={{ top: 40, right: 40, bottom: 40, left: 60 }}
                    colors={[themeColors.gold]}
                    sx={{
                        '& .MuiCharts-axisLabel': {
                            fill: themeColors.ink,
                            fontFamily: "'Cinzel', serif",
                        },
                        '& .MuiCharts-tick': {
                            fill: themeColors.ink,
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

export default ReportsPage;
