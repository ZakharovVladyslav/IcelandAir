import React, {useContext, useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {pages} from "../../../App";
import FreeSingleAnswer from "./FreeSingleAnswer";
import PageScheme from "../pageScheme/pageScheme";
import {AppContext} from "../../../contexts/AppContext";
import PHOTO_icelandair from "../../pages/assets/swiper_photos/icelandair-mastercard.png";
import PHOTO_GetYourGuide_company_logo from "../../pages/assets/swiper_photos/GetYourGuide_company_logo.png";
import PHOTO_booking from "../../pages/assets/swiper_photos/booking.png";
import PHOTO_JetBlue from "../../pages/assets/swiper_photos/JetBlue-Logo.wine.png";
import PHOTO_Hertz from "../../pages/assets/swiper_photos/Hertz_Car_Rental_logo.svg.png"
import OneSwipe from "./OneSwipe";
import NewSwiper from "./NewSwiper";
import ReactGA4 from "react-ga4";
function SwipeChallenge2({headerQuestion,questions,next, handleAnswer, startIndex, ch}) {


    const [questionIndex, setQuestionIndex]  = useState(startIndex||0)

    useEffect(() => {
        ReactGA4.event({
            category: "page",
            action: `CH${ch}Q${questionIndex}`
        })},[questionIndex])
    function handleAnswerInter(answer){
        console.log(answer)
        handleAnswer(answer, questionIndex)
        if(questionIndex+1 >= questions.length){
            next()
        }else
        setQuestionIndex(questionIndex+1)
    }
    return (
        <PageScheme>
            <motion.div
                key={questionIndex}
                className={"flex f1"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {/*<h3>{questionIndex+1} of {questions.length}</h3>*/}
                <OneSwipe
                    headerQuestion={headerQuestion}
                    question={questions[questionIndex]}
                    handleAnswer={handleAnswerInter}
                />

            </motion.div>

        </PageScheme>
    );
}

export default SwipeChallenge2;