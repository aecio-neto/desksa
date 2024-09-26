import React from 'react';
import { Box, Breadcrumbs, Link, Grid, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function PageHeader({ title, breadcrumbs }) {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: 2,
        padding: '16px',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '24px'
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h4" fontWeight="bold">
          {title || 'Título da Página'}
        </Typography>
 
      {breadcrumbs && (
        <Grid item>
          <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            {breadcrumbs.map((breadcrumb, index) => (
              <Link key={index} underline="hover" color={breadcrumb.color || 'inherit'} href={breadcrumb.href}>
                {breadcrumb.label}
              </Link>
            ))}
          </Breadcrumbs>
        </Grid>
      )}
      </Grid>
    </Box>
  );
}

export default PageHeader;
