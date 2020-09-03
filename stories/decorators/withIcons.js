import React from 'react';
import { loadIcons } from '../../src/main/webapp/app/config/icon-loader';

const withIcons = story => {
  loadIcons();
  return <>{story()}</>;
};

export default withIcons;
