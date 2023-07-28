import { Box, Card, CardHeader, Typography } from '@mui/material'
import useChart from './useChart'
import dynamic from 'next/dynamic'
import { useTheme, styled } from '@mui/material/styles'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const CHART_HEIGHT = 400
const LEGEND_HEIGHT = 72

const StyledChart = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': {
    height: CHART_HEIGHT,
  },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}))

export default function PieChart({ title, subheader, chart, ...other }) {
  const { colors, series, options } = chart

  const chartSeries = series.map((i) => i.value)

  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors,
    labels: series.map((i) => i.label),
    legend: { floating: true, horizontalAlign: 'center' },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (value) => (value),
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            value: {
              formatter: (value) => (value),
            },
            total: {
              formatter: (w) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                return (sum)
              },
            },
          },
        },
      },
    },
    ...options,
  })

  return (
    <Card sx={{ height: '100%' }} {...other}>
      <CardHeader title={title} subheader={subheader} />
      <StyledChart>
        <Chart type="donut" series={chartSeries} options={chartOptions} height={280} />
      </StyledChart>
    </Card>
  )
}
