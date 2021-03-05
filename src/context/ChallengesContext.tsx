import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';


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
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  
  const [level, setLevel] = useState(1);
  const [currentExperience,setCurrentExperience] = useState(0);
  const [challengesCompleted,setChallengesCompleted] = useState(0);
  
  const[activeChallenge,setActiveChallenge] = useState(null);
  
  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    
    setActiveChallenge(challenge)
    
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
  }}>
      {children}
    </ChallengeContext.Provider>

  );
}
