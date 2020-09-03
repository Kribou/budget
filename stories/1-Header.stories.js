import React from 'react';
import Header from '../src/main/webapp/app/shared/layout/header/header';

import { boolean, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Header',
  component: Header,
};

export const TestStory = () => {
  const isAdmin = boolean('isAdmin?', false);
  return isAdmin ? <div>Admin</div> : <div>Not an admin</div>;
};

export const HeaderStory = () => {
  const isAuthenticated = boolean('isAuthenticated?', false);
  const isAdmin = boolean('isAdmin?', false);
  const isInProduction = boolean('isInProduction?', false);
  const isSwaggerEnabled = boolean('isSwaggerEnabled?', false);
  const localeChange = action('locale change to');
  const language = radios(
    'language',
    {
      fr: 'fr',
      en: 'en',
    },
    'fr'
  );

  return (
    <Header
      currentLocale={language}
      isAdmin={isAdmin}
      isAuthenticated={isAuthenticated}
      isInProduction={isInProduction}
      isSwaggerEnabled={isSwaggerEnabled}
      ribbonEnv={'dev'}
      onLocaleChange={localeChange}
    />
  );
};

HeaderStory.story = {
  name: 'Header',
};
