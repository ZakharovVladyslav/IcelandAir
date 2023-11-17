import React, {useContext, useEffect} from 'react';
import PageScheme from "../ui/pageScheme/pageScheme";
import CustomButton from "../ui/Button/Button";
import {AppContext} from "../../contexts/AppContext";
import Ch1 from "./Ch1";

function PreCh1(props) {
    const {setPage, setBarProp} = useContext(AppContext)
    useEffect(() => {
        setBarProp({firstIcon: "unlock"})
    }, [])

    function handleNext() {
        setPage(<Ch1/>)
    }

    return (
        <PageScheme header={"Safnaðu með okkur"}>
            <div className={""} style={{fontSize: "2em", margin: "3em 1em"}}>
                Svaraðu nokkrum spurningum til að taka taka þátt í gjafaleiknum okkar
            </div>
            <CustomButton text={"Byrja"} onClick={handleNext}/>
        </PageScheme>
    );
}
