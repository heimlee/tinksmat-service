import React from 'react';

import { MainLogo } from './components/MainLogo/MainLogo';

import './main.scss';

export const Main = () => {
  return(
    <main className="main-container">
      <MainLogo />
    </main>
  );
}
