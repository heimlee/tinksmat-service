import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import { fetchCompaniesList } from './actions/mainCompaniesListActions';
import { CompanyCard } from '../companyCard/CompanyCard';

export const MainCompaniesList = () => {
  const companiesList = useSelector(state => state.companiesList);
  const addCompany = useSelector(state => state.addedCompany.addCompanyToSystem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompaniesList());
  }, [dispatch, addCompany]);
  
  const renderCompaniesList = () => {
    if (companiesList.loading) {
      return <p>Loading companies list...</p>;
    } else if (companiesList.hasError) {
      return <p>Unable to display companies.</p>
    } else {
      return companiesList.companiesList.filter(company => company.id === null).map(company => <CompanyCard key={company.id} company={company} />);
    }
  };
  const renderAddedCompaniesList = () => {
    return companiesList.companiesList.filter(company => !!company.id === true).map(company => <CompanyCard key={company.id} company={company} />);
  };

  return(
    <Grid
      container
      spacing={2}
    >
      {renderAddedCompaniesList()}
      {renderCompaniesList()}
    </Grid>
  );
};
