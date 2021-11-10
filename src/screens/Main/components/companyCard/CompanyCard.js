import React from 'react'
import { Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CompanyCardContainer = styled(Paper)({
  borderRadius: '16px',
  width: '100%',
  height: '168px',
  border: '2px solid #FFFFFF',
  boxSizing: 'border-box',
  boxShadow: '0px 0px 8px rgba(196, 196, 196, 0.25)',
  background: '#F5F7F6',
  padding: '23px 24px 26px',
  display: 'flex',
  flexDirection: 'column',
});

const CompanyCardTitle = styled(Typography)({
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '38px',
  display: 'flex',
  alignItems: 'center',
  color: '#000000',
  height: '48px',
});

const CompanyCardDescription = styled(Typography)({
  fontFamily: 'Open Sans',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '18px',
  color: '#2D2C30',
  mixBlendMode: 'normal',
  height: '24px',
});

const ButtonAddCompanyToSystem = styled(Button)({
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '24px',
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  color: '#1445F5',
  height: '24px',
  padding: '0',
  width: '96px',
  marginTop: '24px',
});

export const CompanyCard = ({ company }) => {
  return(
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      xl={3}
    >
      <CompanyCardContainer>
        <CompanyCardTitle>{company.name}</CompanyCardTitle>
        <CompanyCardDescription>Reg.nr: {company.registryCode}</CompanyCardDescription>
        <ButtonAddCompanyToSystem variant="text">ADD to SYSTEM</ButtonAddCompanyToSystem>
      </CompanyCardContainer>
    </Grid>
  );
};
