import React from 'react';
import { Box, Grid } from '@mui/material';

import { MainLogo } from './components/MainLogo/MainLogo';
import { MainTitle } from './components/MainTitle/MainTitle'
import { MainCompaniesList } from './components/MainCompaniesList/MainCompaniesList';

export const Main = () => {
  return(
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: '0 24px',
        backgroundColor: '#F5F7F6',
      }}
    >
      <MainLogo />
      <Grid
        container
      >
        <MainTitle />
        <MainCompaniesList />
      </Grid>
    </Box>
  );
}
