import { ExperienceBar } from "../Componentes/ExperienceBar";
import Head from 'next/head'
import { Profile } from "../Componentes/Profile";

import styles from '../styles/components/Home.module.css'
import { CompletedChallenges } from "../Componentes/CompletedChallenges";
import { Countdown } from "../Componentes/Countdown";
import { ChallengeBox } from "../Componentes/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Inicio | Breaktime

        
      </title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
      <section>
        <div className = "">
        <Profile/>
        <CompletedChallenges/>
        <Countdown/>
        </div>
        <div>
        <ChallengeBox/>
        </div>
      </section>
      </CountdownProvider>
      </div>
      
  )
}
