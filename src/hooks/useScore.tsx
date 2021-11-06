import { createContext, ReactNode, useContext, useState } from "react";

type ScoreContextData = {
  scoreValue: number;
  reset: () => void;
  incrementScoreValue: () => void;
  decrementScoreValue: () => void;
}

interface ScoreProviderProps {
  children: ReactNode;
}

export const ScoreContext = createContext({} as ScoreContextData);

export const ScoreProvider = ({ children }: ScoreProviderProps) => {

  const [ scoreValue , setScoreValue ] = useState(0);

  const reset = () => {
    setScoreValue(0)
  }
  
  const incrementScoreValue = () => {
    setScoreValue((oldValue) => oldValue + 1)
  }
  
  const decrementScoreValue = () => {
    if (scoreValue > 0)
      setScoreValue((oldValue) => oldValue - 1)
  }

  return (
    <ScoreContext.Provider value={{ scoreValue , incrementScoreValue, decrementScoreValue, reset }}>
      { children }
    </ScoreContext.Provider>
  )
  
}

export function useScore() {

  const context = useContext(ScoreContext);

  return context

}

