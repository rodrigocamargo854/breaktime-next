import { ExperienceBar } from "../Componentes/ExperienceBar";
import Head from 'next/head'
import { Profile } from "../Componentes/Profile";

import styles from '../styles/components/Home.module.css'
import { CompletedChallenges } from "../Componentes/CompletedChallenges";


export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        <div className = "">
        <Profile/>
        <CompletedChallenges/>
        </div>
        <div>

        </div>
      </section>
      </div>
      
  )
}
