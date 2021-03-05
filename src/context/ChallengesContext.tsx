import { createContext, ReactNode, useState } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesContextData {
  level: number;
  levelup: void; 
  currentExperience: number; 
  challengesCompleted: number; 
  startNewChallenge:void; 

}
interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience,setCurrentExperience] = useState(0);
  const [challengesCompleted,setChallengesCompleted] = useState(0);

  function startNewChallenge(){
    return console.log('');
  }


  function levelup() {
    setLevel(level + 1)
  }
  return (

    <ChallengesContext.Provider value={{ 
    startNewChallenge, 
    levelup, 
    currentExperience, 
    challengesCompleted  }}>
      {children}
    </ChallengesContext.Provider>

  );
}
