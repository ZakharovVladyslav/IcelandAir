import React, {useContext, useEffect} from 'react';
import PageScheme from "../ui/pageScheme/pageScheme";
import CustomButton from "../ui/Button/Button";
import {AppContext} from "../../contexts/AppContext";
import Ch1 from "./Ch1";
import Ch2 from "./ch2";
import ReactGA4 from "react-ga4";

function PreCh1(props) {
    const {setPage, setBarProp} = useContext(AppContext)
    useEffect(() => {
        setBarProp({
            firstIcon: "done",
            secondIcon: "unlock",
            step: 2
        })
        ReactGA4.event({
            category: "page",
            action: "PreCh2"
        })
    }, [])

    function handleNext() {
        setPage(<Ch2/>)
    }

    return (
        <PageScheme>
            <div className={""} style={{fontSize: "2em", margin: "3em 1em"}}>
                Næstu spurningar eru um hvernig er hægt að safna Vildarpunktum.
                <br/>
                <br/>
                Strjúktu/ýttu til vinstri til að svara NEI en strjúktu/ýttu til hægri til að svara JÁ
            </div>
            <CustomButton text={"Byrja"} onClick={handleNext}/>
        </PageScheme>
    );
}

export default PreCh1;