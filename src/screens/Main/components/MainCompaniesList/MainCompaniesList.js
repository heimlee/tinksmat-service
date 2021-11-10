import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import { fetchCompaniesList } from './actions/mainCompaniesListActions';
import { CompanyCard } from '../companyCard/CompanyCard';

export const MainCompaniesList = () => {
  const companiesList = useSelector(state => state.companiesList.companiesList);
  const loading = useSelector(state => state.companiesList.loading);
  const hasError = useSelector(state => state.companiesList.hasError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompaniesList());
  }, [dispatch]);

  const renderCompaniesList = () => {
    if (loading) {
      return <p>Loading companies list...</p>;
    } else if (hasError) {
      return <p>Unable to display companies.</p>
    } else {
      return companiesList.map(company => <CompanyCard key={company.id} company={company} />)
    }
  };

  return(
    <Grid
      container
      spacing={2}
    >
      {renderCompaniesList()}
    </Grid>
  );
};
