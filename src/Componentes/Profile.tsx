import styles from '../styles/components/Profile.module.css'



interface ProfileProps {
}

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rodrigocamargo854.png" alt="Rodrigo Camargo" />
            <div>
                <strong>Rodrigo Camargo</strong>
                <p>
                    <img src="icons/level.svg" alt="Ícone de nível" />
          Level 1
        </p>
            </div>
        </div>

    );
}

