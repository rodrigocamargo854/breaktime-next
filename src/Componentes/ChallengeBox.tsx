import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const {activeChallenge } = useContext(ChallengeContext);

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ?
                (<div className={styles.challengeActive}>
                    <header> Ganhe {activeChallenge.amount}</header>
                   
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}  />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type='button'
                            className={styles.challengeFailedButton}>
                            Falhei
                        </button>

                        <button
                            type='button'
                            className={styles.challengeSucceededButton}>
                            Completei
                        </button>
                    </footer>
                </div>
                ) : (
                <div className={styles.challengedNotActive}>
                    <strong>Inicie um ciclo
                    para receber desafios a
                    serem completado
                    </strong>
                    <p>
                    <img src="icons/level-up.svg" alt="Level-up" />
                     Avance de level completando desafios
                 </p>
                </div>
                )}
        </div>
    )}