import React, {useContext, useEffect} from 'react';
import PageScheme from "../ui/pageScheme/pageScheme";
import CustomButton from "../ui/Button/Button";
import {AppContext} from "../../contexts/AppContext";
import Ch1 from "./Ch1";
import Ch3 from "./Ch3";
import ReactGA4 from "react-ga4";

function PreCh3(props) {
    const {setPage, setBarProp} = useContext(AppContext)
    useEffect(() => {
        setBarProp({
            firstIcon: "done",
            secondIcon: "done",
            thirdIcon: "unlock",
            step: 3
        })
        ReactGA4.event({
            category: "page",
            action: `PreCh3`
        })
    }, [])

    function handleNext() {
        setPage(<Ch3/>)
    }

    return (
        <PageScheme>
            <div className={""} style={{fontSize: "2em", margin: "3em 1em"}}>
                Næstu spurningar snúa að því hvernig má nota Vildarpunkta. Strjúktu/ýttu til vinstri fyrir NEI og til hægri
                fyrir JÁ.
            </div>
            <CustomButton text={"Byrja"} onClick={handleNext}/>
        </PageScheme>
    );
}

export default PreCh3;