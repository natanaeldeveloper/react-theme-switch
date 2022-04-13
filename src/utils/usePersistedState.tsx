import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

function usePersistedState<T>(key: string, initState: T): Response<T> {
    const [ state, setState ] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if(persistedState){
            return JSON.parse(persistedState);
        } else {
            return persistedState;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    });

    return [ state, setState ]
}

export default usePersistedState;

