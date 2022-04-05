import React from 'react';
import { Page } from '../../components/Page/Page';
import { Timer } from '../../components/Timer/Timer';

export const Home = (): JSX.Element => {
  const homeText = 'Home';

  return (
    <Page description={homeText} keywords={homeText} title={homeText}>
      <Timer time={25} />
    </Page>
  );
};
