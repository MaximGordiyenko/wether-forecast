"use context";
import { IChild, IState } from "@/types";
import { createContext, useContext, useReducer, Dispatch, FC } from "react";
import { appReducer } from "./reducer/app.reducer";
import { initialState } from "@/context/store";

const AppContextProvider = createContext<IState>(initialState)
const AppDispatchContext = createContext<Dispatch<any>>(() => null)

export const AppProvider: FC<IChild> = ({children}) => {
  const [ state, dispatch ] = useReducer(appReducer, initialState, undefined);
  
  return (
    <AppContextProvider.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {state ? children : <div>loading...................</div>}
      </AppDispatchContext.Provider>
    </AppContextProvider.Provider>
  );
};

export const useAppContext = () => useContext(AppContextProvider);
export const useAppDispatch = () => useContext(AppDispatchContext);
