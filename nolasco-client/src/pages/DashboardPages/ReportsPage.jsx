import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
        <>
            <Typography variant="h4" gutterBottom>
                Reports & Analytics
            </Typography>
            
            {/* Summary Cards */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6" color="primary">Total Revenue</Typography>
                        <Typography variant="h4">$52,400</Typography>
                        <Typography variant="body2" color="success.main">+15% from last month</Typography>
                    </CardContent>
                </Card>
                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6" color="primary">Total Sales</Typography>
                        <Typography variant="h4">38,450</Typography>
                        <Typography variant="body2" color="success.main">+8% from last month</Typography>
                    </CardContent>
                </Card>
                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6" color="primary">Conversion Rate</Typography>
                        <Typography variant="h4">3.2%</Typography>
                        <Typography variant="body2" color="success.main">+0.5% from last month</Typography>
                    </CardContent>
                </Card>
            </Stack>

            {/* Bar Chart - Monthly Revenue */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Monthly Revenue
            </Typography>
            <Box sx={{ height: 300, width: '100%', mb: 4 }}>
                <BarChart
                    dataset={barChartData}
                    xAxis={[{ scaleType: 'band', dataKey: 'id' }]}
                    series={[{ dataKey: 'value', label: 'Revenue ($)' }]}
                    height={300}
                />
            </Box>

            {/* Pie Chart - Sales by Category */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Sales by Category
            </Typography>
            <Box sx={{ height: 300, width: '100%', mb: 4 }}>
                <PieChart
                    series={[
                        {
                            data: pieChartData,
                            innerRadius: 60,
                            outerRadius: 100,
                        },
                    ]}
                    height={300}
                />
            </Box>

            {/* Line Chart - Revenue Trends */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Revenue Trends
            </Typography>
            <Box sx={{ height: 300, width: '100%', mb: 4 }}>
                <LineChart
                    series={lineChartSeries}
                    xAxis={lineChartXAxis}
                    height={300}
                />
            </Box>
        </>
    );
}

export default ReportsPage;
