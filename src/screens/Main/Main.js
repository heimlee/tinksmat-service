import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

import { MainLogo } from './components/mainLogo/MainLogo';
import { MainTitle } from './components/mainTitle/MainTitle'
import { MainCompaniesList } from './components/mainCompaniesList/MainCompaniesList';

const MainBoxContainer = styled(Box)({
  height: '100%',
  padding: '0 24px 50px',
});

export const Main = () => {
  return(
    <MainBoxContainer>
      <MainLogo />
      <Grid
        container
      >
        <MainTitle />
        <MainCompaniesList />
      </Grid>
    </MainBoxContainer>
  );
}
