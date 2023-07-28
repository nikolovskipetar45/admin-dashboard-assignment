import { Box, Grid, Typography } from '@mui/material'
import AreaChart from '@/components/charts/area'
import PieChart from '@/components/charts/pie'
import Table from '@/components/table'

export default function HomePage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
          <AreaChart
            title="Yearly Sales"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                {
                  year: '2019',
                  data: [
                    { name: 'Total Income', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    { name: 'Total Income', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                  ],
                },
              ],
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PieChart
            title="Current Download"
            chart={{
              series: [
                { label: 'Mac', value: 12244 },
                { label: 'Window', value: 53345 },
                { label: 'iOS', value: 44313 },
                { label: 'Android', value: 78343 },
              ],
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Table
            title="New Invoice"
            tableLabels={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'category', label: 'Category' },
              { id: 'price', label: 'Price' },
              { id: 'status', label: 'Status' },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
