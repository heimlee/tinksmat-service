import React from 'react'
import { Grid } from '@mui/material';

import { CompanyCard } from '../companyCard/CompanyCard';

export const MainCompaniesList = () => {
  return(
    <Grid
      container
      spacing={2}
    >
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </Grid>
  );
};
