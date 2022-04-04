import React from 'react';
import { Page } from '../../components/Page/Page';
import { Timer } from '../../components/Timer/Timer';
import { useCounter } from '../../database/counter';
import { useCounter as useCounterRedux } from '../../store/counter';

export const Home = (): JSX.Element => {
  const homeText = 'Home';

  return (
    <Page description={homeText} keywords={homeText} title={homeText}>
      <Timer />
    </Page>
  );
};
