import { useState } from 'react'
import { Card, CardHeader, Box, TextField } from '@mui/material'
import useChart from './useChart'

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function AreaChart({ title, subheader, chart, ...other }) {
  const { colors, categories, series, options } = chart
  const [seriesData, setSeriesData] = useState('2019')

  const chartOptions = useChart({
    colors,
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    xaxis: {
      categories,
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <TextField
            select
            size="small"
            SelectProps={{ native: true }}
            value={seriesData}
            onChange={(event) => setSeriesData(event.target.value)}
          >
            {series.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </TextField>
        }
      />

      {series.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && <Chart type="area" options={chartOptions} series={item.data} height={364} />}
        </Box>
      ))}
    </Card>
  )
}
