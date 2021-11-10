import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { removeAddedCompany } from '../mainCompaniesList/actions/mainCompaniesListActions';
import { fetchAddCompanyToSystem } from '../mainCompaniesList/actions/companyAddToSystemActions';

const CompanyCardContainer = styled(Paper)({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid #FFFFFF',
  borderRadius: '16px',
  boxShadow: '0px 0px 8px rgba(196, 196, 196, 0.25)',
  width: '100%',
  height: '168px',
  padding: '23px 24px 26px',
  background: '#F5F7F6',
});

const AddedCompanyCardContainer = styled(Paper)({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid #FFFFFF',
  borderRadius: '16px',
  boxShadow: '0px 0px 8px rgba(196, 196, 196, 0.25)',
  width: '100%',
  height: '168px',
  padding: '23px 24px 26px',
  background: '#FFFFFF',
});

const CompanyCardTitle = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  height: '48px',
  fontSize: '24px',
  lineHeight: '38px',
  fontWeight: '700',
  fontStyle: 'normal',
  color: '#000000',
});

const CompanyCardDescription = styled(Typography)({
  height: '24px',
  fontSize: '12px',
  lineHeight: '18px',
  fontFamily: 'Open Sans',
  fontWeight: '400',
  color: '#2D2C30',
  mixBlendMode: 'normal',
});

const ButtonAddCompanyToSystem = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '24px',
  padding: '0',
  height: '24px',
  width: '96px',
  fontSize: '12px',
  lineHeight: '24px',
  fontWeight: '700',
  textTransform: 'uppercase',
  color: '#1445F5',
});

export const CompanyCard = ({ company }) => {
  const dispatch = useDispatch();
  
  const handleAddCompanyToSystem = () => {
    dispatch(removeAddedCompany(company.registryCode));
    dispatch(fetchAddCompanyToSystem(company.registryCode));
  }

  return(
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      xl={3}
    >
      {company.id === null ? 
        <CompanyCardContainer>
          <CompanyCardTitle>{company.name}</CompanyCardTitle>
          <CompanyCardDescription>Reg.nr: {company.registryCode}</CompanyCardDescription>
          <ButtonAddCompanyToSystem variant="text" onClick={() => handleAddCompanyToSystem()}>ADD to SYSTEM</ButtonAddCompanyToSystem>
        </CompanyCardContainer> :
        <AddedCompanyCardContainer>
          <CompanyCardTitle>{company.name}</CompanyCardTitle>
          <CompanyCardDescription>Reg.nr: {company.registryCode}</CompanyCardDescription>
        </AddedCompanyCardContainer>
      }
    </Grid>
  );
};
