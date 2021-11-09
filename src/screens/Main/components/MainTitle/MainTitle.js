import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const MainTitleGridContainer = styled(Grid)({
  marginTop: '208px',
  marginLeft: '0',
  maxWidth: '924px',
  height: '144px',
  paddingTop: '32px',
  paddingBottom: '24px',
});

const MainTitleLogo = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  width: '88px',
  height: '88px',
  cursor: 'pointer',
  background: '#FFFFFF',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
});

const MainTitleTextHead = styled(Typography)({
  fontSize: '24px',
  lineHeight: '38px',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
});

const MainTitleTextDescription = styled(Typography)({
  width: '100%',
  paddingRight: '17px',
  fontFamily: 'Open Sans',
  fontWeight: 'normal',
  fontSize: '12px',
  lineHeight: '18px',
  color: '#2D2C30',
});

export const MainTitle = () => {
  return(
    <MainTitleGridContainer container>
      <Grid
        item
        xs={'88px'}
        sx={{
          width: '88px',
        }}
      >
        <MainTitleLogo>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M10.2667 4.07213C10.2667 4.07213 31.1014 15.7005 25.2667 30.0529C10.3529 27.6797 10.2667 4.07213 10.2667 4.07213Z" fill="#59C5FA"/>
          <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M37.4833 4.07213C37.4833 4.07213 16.6486 15.7005 22.4833 30.0529C37.3971 27.6797 37.4833 4.07213 37.4833 4.07213Z" fill="#5D57F6"/>
          <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M24 2C24 2 11.7708 22.4878 24 32C35.7292 22.4878 24 2 24 2Z" fill="#1445F5"/>
          <path d="M11.236 27C11.236 26.4477 11.6837 26 12.236 26H35.763C36.3153 26 36.763 26.4477 36.763 27V44C36.763 45.1046 35.8676 46 34.763 46H13.236C12.1315 46 11.236 45.1046 11.236 44V27Z" fill="#1445F5"/>
          </svg>
        </MainTitleLogo>
      </Grid>
      <Grid
        container
        xs
        sx={{
          width: '100%',
          paddingLeft: '24px'
        }}
      >
        <Grid
          item
          xs={'auto'}
          sx={{
            width: '100%',
          }}
        >
          <MainTitleTextHead variant="h5">My companies</MainTitleTextHead>
        </Grid>
        <Grid
          item
          xs={'auto'}
          sx={{
            width: '100%',
          }}
        >
          <MainTitleTextDescription component="p">According to the EE Business Register, the following companies are related to you.</MainTitleTextDescription>
        </Grid>
      </Grid>
    </MainTitleGridContainer>
  );
};
