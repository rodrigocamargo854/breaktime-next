import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';
import Cookies from'js-cookie';



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
  levelup:() => void;
  startNewChallenge:() => void;
  resetChallenge:() => void;
  completeChallenge:() => void;
  experienceToNextLevel:number; 
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  
  const [level, setLevel] = useState(1);
  // aqui podemos setar o valor atual da barra de experiencia do usuario
  const [currentExperience,setCurrentExperience] = useState(0);
  const [challengesCompleted,setChallengesCompleted] = useState(0);
  
  const[activeChallenge,setActiveChallenge] = useState(null);
  
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
    setLevel(level + 1)
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
  }}>
      {children}
    </ChallengeContext.Provider>

  );
}
