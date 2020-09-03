import React from 'react';
import Provider from '../components/provider';
import initStore from '../../src/main/webapp/app/config/store';
import { registerLocale } from '../../src/main/webapp/app/config/translation';

const store = initStore();
registerLocale(store);

const withProvider = story => <Provider store={store}>{story()}</Provider>;

export default withProvider;
