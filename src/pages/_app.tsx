import '../styles/global.css'

import { ChallengesProvider } from '../context/ChallengesContext';
import { useState } from 'react';
import { CountdownProvider } from '../context/CountdownContext';

function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      
      <Component {...pageProps} />
      
    </ChallengesProvider>
  )
}

export default MyApp
