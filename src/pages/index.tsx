import { ExperienceBar } from "../Componentes/ExperienceBar";
import Head from 'next/head'
import { Profile } from "../Componentes/Profile";

import styles from '../styles/components/Home.module.css'
import { CompletedChallenges } from "../Componentes/CompletedChallenges";
import { Countdown } from "../Componentes/Countdown";
import { ChallengeBox } from "../Componentes/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";
import {GetServerSideProps} from 'next'
import {ChallengesProvider} from '../context/ChallengesContext'

interface HomeProps{
  level:number;
  currentExperience:number;
  challengeCompleted:number;

}

export default function Home(props:HomeProps) {
  return (
    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience}
    challengeCompleted={props.challengeCompleted}
    >
    
    
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
        <br/>
        <CompletedChallenges/>
        <span>Pomodoro timer</span>
        <Countdown/>
        </div>
        <div>
        <ChallengeBox/>
        </div>
      </section>
      </CountdownProvider>
      </div>
    </ChallengesProvider>
      
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) =>{
  const {level,currentExperience,challengeCompleted} = ctx.req.cookies;

  
  return {

    props: {
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengeCompleted:Number(challengeCompleted)
    }
  }
}
