import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../contexts/AppContext";
import PageScheme from "../ui/pageScheme/pageScheme";
import SingleAnswer from "../ui/Quiz/SingleAnswer";
import {pages} from "../../App";
import Swiper from "../ui/Quiz/swiper/Swiper";
import NewSwiper from "../ui/Quiz/NewSwiper";
import SwipeChallenge2 from "../ui/Quiz/SwipeChallenge2";
import PHOTO_booking from "./assets/swiper_photos/booking.png";
import PHOTO_JetBlue from "./assets/swiper_photos/JetBlue-Logo.wine.png";
import PHOTO_Hertz from "./assets/swiper_photos/Hertz_Car_Rental_logo.svg.png";
import PHOTO_GetYourGuide_company_logo from "./assets/swiper_photos/GetYourGuide_company_logo.png";
import PHOTO_Olis from "./assets/swiper_photos/olis.png";
import PHOTO_Heimkaup from "./assets/swiper_photos/heimkaup.png";
import PHOTO_onBoard from "./assets/swiper_photos/onBoard.png";

function Ch2(props) {
    const {setPage, clickTransaction} = useContext(AppContext)
    const q1 = [
        {photo: PHOTO_booking, name: "Booking.com", info: "You are right. You can earn 2 points for every €1 spent"},
        {
            photo: PHOTO_JetBlue,
            name: "JetBlue Airways",
            info: "Correct. You can earn up to 1750 points per segment flown"
        },
        {photo: PHOTO_Hertz, name: "Hertz", info: "Yes, you can earn up to 2000 points per car hire"},
        {
            photo: PHOTO_GetYourGuide_company_logo,
            name: "Getyourguide.com",
            info: "2 points for every €1 spent to be exact !!"
        },
    ]
    const q2 = [
        {
            photo: PHOTO_Heimkaup,
            name: "Heimkaup",
            yes: "Já! Mikið rétt. Ef þú verslar fyrir meira en 12.900 krónur, færðu 10 Vildarpunkta fyrir hverjar 1.000 krónur.",
            no: "Nei, það er ekki rétt. Þú færð nefnilega 10 Vildarpunkta fyrir hverjar 1.000 krónur ef heildarupphæðin nær að lágmarki 12.900 krónum.",
        },
        {
            photo: PHOTO_Olis,
            name: "Olís",
            yes: "Já! Hárrétt. Saga Club félagar geta safnað 15 Vildarpunktum fyrir hverjar 1.000 krónur á öllum bensínstöðvum Olís og flestum* ÓB bensínstöðvum.",
            no: "Nei, það er ekki rétt. Þú getur nefnilega safnað 15 Vildarpunktum fyrir hverjar 1.000 krónur á öllum bensínstöðvum Olís og flestum* ÓB bensínstöðvum.",
        },
        {
            fillNask: true,
            photo: PHOTO_onBoard,
            name: "Um borð í vélum Icelandair",
            yes: "Já! Mikið rétt. Saga Club félagar geta safnað Vildarpunktum og Fríðindastigum fyrir allar máltíðir keyptar um borð. ",
            no: "Nei, það er ekki alveg rétt. Saga Club félagar geta nefnilega safnað bæði Vildarpunktum og Fríðindastigum fyrir allar máltíðir keyptar um borð en framvísa þarf þó Saga Club korti.",
        },
        {
            textQuestion: "Vissir þú að í boði eru kreditkort sem hægt er að tengja við Saga Club reikninginn þinn, þannig er hægt að safna Vildarpunktum á hverjum degi?",
            yes: "Já, akkúrat. Það eru margir bankar sem bjóða upp á þessa þjónustu. Nánari upplýsingar má finna á vefnum okkar.",
            no: "Jú það er hægt! Margir bankar bjóða upp á þessa þjónustu."
        },

    ]
    const events = [
        "heimkaup",
        "olis",
        "onboard",
        "redemption_cobrand",
    ]

    function onload() {
        if (props.load) {
            const nI = events.indexOf(props.load)+1
            if (nI && nI < events.length)
                return nI
        }
    }
    const questionIndex = onload()


    function handleAnswer(answer, index) {
        console.log(answer,index)

        clickTransaction(events[index], answer)
    }

    return (
        <SwipeChallenge2
            handleAnswer={handleAnswer}
            headerQuestion={"Get ég safnað Vildarpunktum hjá eftirfarandi aðilum?"}
            next={() => setPage(pages.Ch3)}
            questions={q2}
            startIndex={questionIndex}
            ch={2}
        />
    );
}

export default Ch2;
// export default SwipeChallenge2