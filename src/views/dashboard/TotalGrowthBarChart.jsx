import React, { useEffect, useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import chartData from './chart-data/total-growth-bar-chart';

const status = [
  { value: 'today', label: 'Today' },
  { value: 'month', label: 'This Month' },
  { value: 'year', label: 'This Year' },
];

const TotalGrowthBarChart = ({ isLoading }) => {
  const [value, setValue] = useState('today');
  const theme = useTheme();
  const chartRef = useRef(null);

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;
  const primary = theme.palette.text.primary;
  const divider = theme.palette.divider;
  const grey500 = theme.palette.grey[500];

  const newChartData = useMemo(() => ({
    ...chartData.options,
    colors: [primary200, primaryDark, secondaryMain, secondaryLight],
    xaxis: {
      labels: {
        style: {
          colors: Array(12).fill(primary),
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [primary],
        },
      },
    },
    grid: { borderColor: divider },
    tooltip: { theme: 'light' },
    legend: { labels: { colors: grey500 } },
  }), [primary200, primaryDark, secondaryMain, secondaryLight, primary, divider, grey500]);

  useEffect(() => {
    console.log('infinite loop')
    if (!isLoading && chartRef.current) {
      const chart = chartRef.current.chart;
      if (chart) {
        chart.updateOptions(newChartData);
      }
    }
  }, [isLoading, newChartData]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Growth</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">$2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-select-currency"
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...chartData} options={newChartData} ref={chartRef} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalGrowthBarChart;