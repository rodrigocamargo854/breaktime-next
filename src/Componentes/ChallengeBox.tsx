import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const {activeChallenge ,resetChallenge, completeChallenge} = useContext(ChallengeContext);
    const {resetCountDown } = useContext(CountdownContext)

    function handleChallengeSucceded(){
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountDown();
    }


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
                            className={styles.challengeFailedButton}
                            onClick = {handleChallengeFailed}
                            >
                            Falhei
                        </button>

                        <button
                            type='button'
                            className={styles.challengeSucceededButton}
                            onClick = {handleChallengeSucceded}
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
                )}
        </div>
    )}