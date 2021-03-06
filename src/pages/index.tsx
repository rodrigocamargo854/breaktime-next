import { ExperienceBar } from "../Componentes/ExperienceBar";
import Head from 'next/head'
import { Profile } from "../Componentes/Profile";

import styles from '../styles/components/Home.module.css'
import { CompletedChallenges } from "../Componentes/CompletedChallenges";
import { Countdown } from "../Componentes/Countdown";
import { ChallengeBox } from "../Componentes/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";
import {GetServerSideProps} from 'next'

export default function Home(props) {
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

export const getServerSideProps: GetServerSideProps = async(ctx) =>{
  const {level,currentExperience,challengeCompleted} = ctx.req.cookies;

  
  return {

    props: {
      level,
      currentExperience,
      challengeCompleted
    }
  }
}
