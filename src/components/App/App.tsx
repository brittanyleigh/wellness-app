import { ThemeProvider, ColorModeProvider } from '@chakra-ui/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../store';
import { Layout } from '../Layout/Layout';
import { Routes } from '../Routes/Routes';

export const App = (): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <ThemeProvider theme={{}}>
          <ColorModeProvider options={{}}>
            <Routes />
          </ColorModeProvider>
        </ThemeProvider>
      </Layout>
    </BrowserRouter>
  </Provider>
);
