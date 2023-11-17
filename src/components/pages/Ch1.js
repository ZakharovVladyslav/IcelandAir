import React, {useContext, useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {pages} from "../../App";
import FreeSingleAnswer from "../ui/Quiz/FreeSingleAnswer";
import PageScheme from "../ui/pageScheme/pageScheme";
import {AppContext} from "../../contexts/AppContext";
import CustomButton from "../ui/Button/Button";
import Infox from "./infox";
import ReactGA4 from "react-ga4";

function Ch1(props) {

    const {setPage, clickTransaction} = useContext(AppContext)
    const questions = [
        // {
        //     question: "When did you last fly from Iceland?"
        //     , answers: ["0-18 months ago",
        //         "19-36 months ago",
        //         "More than 36 months ago",
        //         "Don’t recall",]
        // },
        {
            question: "Hvenær fórstu síðast í utanlandsferð?",
            answers: [
                "Minna en eitt ár",
                "Eitt til tvö ár",
                "Fyrir meira en þremur árum",
                "Ég man það ekki / Vil ekki svara",

            ]
        },
        {
            question: "Fórstu síðast til útlanda vegna vinnu eða af persónulegum ástæðum?",
            answers: ["Ég fór af persónulegum ástæðum (frí, heimsækja vini/fjölskyldu, o.s.frv.)",
                "Ég fór í viðskiptaferð",]
        },
        {
            question: "Með hvaða flugfélagi flaugst þú?",
            answers: ["Delta",
                "Easy Jet",
                "Icelandair",
                "Play",
                "SAS",
                "Wizz Air",
                "Annað",]
        },
        {
            question: "Hvenær ætlar þú næst í utanlandsferð?",
            answers: ["Eftir 0-6 mánuði",
                "Eftir 7-12 mánuði",
                "Eftir meira en ár",]
        },
        {
            question: "Hvert ætlar þú að fara?",
            answers: ["Til Kanada",
                "Til Bandaríkjanna",
                "TIl Skandinavíu",
                "Til annarra áfangastaða innan Evrópu",
                "Annað/Ég hef ekki ákveðið mig",]
        },
        {
            question: "Þegar ég bóka flug með Icelandair þá skrái ég alltaf Saga Club númerið mitt í bókunina.",
            answers: ["JÁ", "NEI"]
        },

    ]
    const events = [
        "last_flight_time",
        "last_flight_reason",
        "last_flight_airline",
        "next_flight_time",
        "next_time_place",
        "saga_club_ffp"
    ]
    function onload() {
        if (props.load) {
            const nI = events.indexOf(props.load)+1
            if (nI && nI < events.length)
                return nI
        }
    }

    const [questionIndex, setQuestionIndex] = useState(onload()||0)

    useEffect(() => {
        ReactGA4.event({
            category: "page",
            action: "CH1Q"+questionIndex
        })},[questionIndex])

    function handleAnswer(answer) {

        const index = questionIndex
        clickTransaction(events[index], answer)

        if (questionIndex + 1 >= questions.length) {
            setPage(<Infox answer={answer==1?false:true}/>)
        } else
            setQuestionIndex(questionIndex + 1)
    }

    return (
        <PageScheme>
            <motion.div
                key={questionIndex}
                className={"flex f1"}
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -10, opacity: 0}}
                transition={{duration: 0.2}}
            >
                {/*<h3>{questionIndex+1} of {questions.length}</h3>*/}
                <FreeSingleAnswer
                    question={questions[questionIndex]}
                    handleAnswer={handleAnswer}
                    singleAnswer
                />

            </motion.div>

        </PageScheme>
    );
}

export default Ch1;