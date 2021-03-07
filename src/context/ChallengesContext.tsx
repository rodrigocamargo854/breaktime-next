import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';
import Cookies from'js-cookie';
import { LevelUpModal } from '../Componentes/LevelUpModal';



interface Challenge{
  type : 'body' | 'eye';
  description : string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number; 
  challengesCompleted: number; 
  activeChallenge: Challenge ;
  experienceToNextLevel:number; 

  levelup:() => void;
  startNewChallenge:() => void;
  resetChallenge:() => void;
  completeChallenge:() => void;
  closeSetLevelUpModal:() => void;
  
}

interface ChallengesProviderProps {
  children: ReactNode;
  level:number;
  currentExperience:number;
  challengeCompleted:number;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider(
{
  children,
  ...rest
}: ChallengesProviderProps) {
  
  const [level, setLevel] = useState(rest.level ?? 1);
  // aqui podemos setar o valor atual da barra de experiencia do usuario
  const [currentExperience,setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted,setChallengesCompleted] = useState(rest.challengeCompleted ?? 0);
  
  const[activeChallenge,setActiveChallenge] = useState(null);
  const[isLevelUpModal,setisLevelUpModal] = useState(false);
  
  const experienceToNextLevel = Math.pow((level + 1) * 4,2)

  useEffect(() => {
    Notification.requestPermission();

  },[])

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    
    setActiveChallenge(challenge)
    new Audio('/notification.mp3').play();

    if(Notification.permission === `granted`){
      new Notification(`Novo desafio 🎉`, {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function completeChallenge(){
    if(!activeChallenge){
      return;
      // validação com void
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;
    
    if (finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelup();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }


  useEffect(() => {
    Cookies.set(`level`,level.toString());
    Cookies.set(`currentExperience`, String(currentExperience));
    Cookies.set(`challengeCompleted`, String(challengesCompleted));
  }, [level, currentExperience,challengesCompleted]);


  
  function resetChallenge(){
    setActiveChallenge(null)
  }


  function levelup() {
    setLevel(level + 1);
    setisLevelUpModal(true);

  }
  
  function closeSetLevelUpModal() {
    setisLevelUpModal(false);
    

  }

  return (

    <ChallengeContext.Provider 
    value={{ 
    level,
    currentExperience, 
    challengesCompleted, 
    levelup, 
    startNewChallenge, 
    activeChallenge,
    resetChallenge,
    experienceToNextLevel,
    completeChallenge,
    closeSetLevelUpModal
    
  }}>
    {/* && modo de fazer um if sem else */}
    { isLevelUpModal && <LevelUpModal/> }
      {children}
    </ChallengeContext.Provider>

  );
}
