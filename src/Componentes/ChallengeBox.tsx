import { useContext, useState } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const contextData = useContext(ChallengesContext);
    
    
    
    const hasActiveChallenge = true;
    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? 
            (
                <div className={styles.challengeActive}>
                    <header> Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg" alt="" />
                        <strong>Novo Desafio</strong>
                        <p>Levante e Faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button
                            type='button'
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>

                        <button
                            type='button'
                            className={styles.challengeSucceededButton}

                        >
                            Completei
                        </button>

                    </footer>
                    </div>
            ) : (
                    <div className={styles.challengedNotActive}>
                        <strong>Inicie um ciclo
                        para receber desafios a
                        serem completados
                 </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level-up" />
                     Avance de level completando desafios
                 </p>
                    </div>
            )
            }
                </div>
            )
}