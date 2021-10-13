import lscache from "lscache";
import {PREFIX} from "@utils/constant";
import {CompareReducer} from "@global/CompareReducer";
import {createContext, useEffect, useReducer} from "react";

export const CompareContext = createContext();

const CompareContextProvider = ({children}) => {
    const [compareList, dispatch] = useReducer(CompareReducer, [], () => {
        const localState = lscache.get(PREFIX + "-compare");
        return localState ? localState : [];
    });

    const addToCompare = payload => {
        dispatch({
            type: "ADD_TO_COMPARE",
            payload
        })
    }

    const removeFromCompare = payload => {
        dispatch({
            type: "REMOVE_FROM_COMPARE",
            payload
        })
    }

    const contextValue = {
        compareList: compareList,
        addToCompare,
        removeFromCompare
    }

    useEffect(() => {
        lscache.set(PREFIX + "-compare", compareList);
    }, [compareList]);

    return (
        <CompareContext.Provider value={contextValue}>
            {children}
        </CompareContext.Provider>
    );
};

export default CompareContextProvider;
