import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'




export function LevelUpModal() {
    const{level,closeSetLevelUpModal} = useContext(ChallengeContext)

    return (

        <div className={styles.overlay}>
            <div className={styles.container}>
            <header>{level}</header>
            <strong>Parabéns</strong>
            <p>Você Alcançou</p>

            <button 
            type='button'
            onClick={closeSetLevelUpModal}
            
            >
                <img src='/icons/close.svg'  alt="Fechar modal"/>
            </button>
            </div>
        </div>


    )
}