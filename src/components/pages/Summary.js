import React, {useContext, useEffect, useState} from 'react';
import PageScheme from "../ui/pageScheme/pageScheme";
import Rating from "../ui/Rating";
import Gift from "./assets/Icon feather-gift.png"
import LargeButton from "../ui/Button/LargeButton";
import CustomButton from "../ui/Button/Button";
import {AppContext} from "../../contexts/AppContext";
import {pages} from "../../App";
import ReactGA4 from "react-ga4";

function Summary(props) {
    const {clickTransaction} = useContext(AppContext)
    const [rate, setRate] = useState(0)

    useEffect(() => {
        if(rate!==0)
            clickTransaction("rate", rate)
    }, [rate])

    const {setPage, setBarProp} = useContext(AppContext)
    useEffect(() => {
        setRate(props.rate || 0)
        setBarProp({
            firstIcon: "done",
            secondIcon: "done",
            thirdIcon: "done",
            step: 3
        })
        ReactGA4.event({
            category: "page",
            action: `Summary`
        })
    }, [])

    function next() {
        // setPage(pages.SpinWheel)
    }

    return (
        <PageScheme
            header={"Takk fyrir þátttökuna!"}>
            <h3>Til hamingju! Þú hefur unnið Vildarpunkta og verða þeir lagðir inn á Saga Club reikninginn þinn innan 72 tíma.</h3>
            <img onClick={next} src={Gift}/>
            <h1>{props.reward} Vildarpunktar</h1>
            <h4 style={{marginTop: "50px"}}>Gætir þú gefir leiknum einkunn?</h4>
            <Rating rate={rate} setRate={setRate}/>
            <LargeButton onClick={() => {
                window.location.href = "https://www.icelandair.com/is/flug/";
            }} text={"Skoðaðu næstu ferð með Icelandair"}/>
        </PageScheme>
    );
}

export default Summary;