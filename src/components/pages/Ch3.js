import React, {useContext, useEffect, useState} from 'react';
import PageScheme from "../ui/pageScheme/pageScheme";
import NewSwiper from "../ui/Quiz/NewSwiper";
import SwipeChallenge2 from "../ui/Quiz/SwipeChallenge2";
import {pages} from "../../App";
import {AppContext} from "../../contexts/AppContext";

function Ch3(props) {

    const {setPage, clickTransaction} = useContext(AppContext)
    const questions = [
        {
            textQuestion: "Er hægt að greiða fyrir flug með Vildarpunktum?",
            yes: "Já! Félagar í Saga Club geta greitt fyrir flug með Vildarpunktum. Hægt er að nota hvaða punktaupphæð sem er upp í næsta flug, eða jafnvel að greiða fyrir allt flugið með punktum.",
            no: "Nei, félagar í Saga Club geta nefnilega greitt fyrir flug með Vildarpunktum. Hægt er að greiða fyrir flug alfarið með Vildarpunktum, eða með bæði punktum og peningum."
        },
        {
            textQuestion: "Er hægt að greiða fyrir aukaþjónustu um borð, til dæmis meira fótarými og þráðlaust net?",
            yes: "Já! Meira fótarými gerir gæfumun en það er nákvæmlega fyrir þær sakir að hægt er að greiða fyrir meira fótarými með Vildarpunktum þegar komið er um borð. Félagar í Saga Club geta einnig nýtt sína Vildarpunkta til að greiða fyrir þráðlaust net um borð.",
            no: "Nei það er sko hægt! Þú getur notað Vildarpunktana þína til að greiða fyrir meira fótarými um borð. Félagar í Saga Club geta einnig nýtt sína Vildarpunkta til að greiða fyrir þráðlaust net um borð."
        }, {
            textQuestion: "Er hægt að kaupa gjafakort með Vildarpunktum?",
            yes: "Já. Saga Club félagar geta keypt gjafakort frá hinum ýmsu fyrirtækjum víða um heim, eins og til dæmis Hotels.com, AirBnB, Global Hotel card, Amazon.com, Starbucks, til að nefna nokkur dæmi."
            // "Saga Club félagar geta einnig keypt Icelandair gjafabréf fyrir Vildarpunktana sína."
            ,//TODO figure out the second text
            no: "Það er sko hægt! Félagar geta keypt gjafakort frá hinum ýmsu fyrirtækjum víða um heim, eins og til dæmis Hotels.com, AirBnB, Global Hotel card, Amazon.com, Starbucks, tilað nefna nokkur dæmi."
        }, {
            textQuestion: "Er hægt að styrkja góðgerðarsamtök með Vildarpunktum?",
            yes: "Já! Félagar í Saga Club geta gefið eins marga punkta og þeir vilja í ferðasjóðinn okkar, Vildarbörn Icelandair."
                + "\n" + "Sjóðurinn styrkir langveik börn og börn sem búa við erfiðar aðstæður, og gefur þeim tækifæri til að fara í draumafríið sitt með fjölskyldum sínum.",
            no: "Það er hægt, Saga Club félagar geta styrkt ferðasjóðinn okkar, Vildarbörn Icelandair, með eins mörgum punktum og þeir vilja."
                + "\n" + "Sjóðurinn styrkir langveik börn og börn sem búa við erfiðar aðstæður, og gefur þeim tækifæri til að fara í draumafríið sitt með fjölskyldum sínum."
        }, {
            textQuestion: "Get ég millifært Vildarpunktana mína yfir á annan Saga Club reikning?",
            yes: "Alveg rétt! Saga Club félagar geta millifært punkta á aðra reikninga.",
            no: "Saga Club félagar geta millifært punkta á aðra reikninga.",
        }
    ]
    const events = [
        "redemption_flight",
        "redemption_upgrades",
        "redemption_giftcard",
        "redemption_charity",
        "redemption_transfer"
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
        clickTransaction(events[index], answer)
    }

    return (
        <SwipeChallenge2 headerQuestion
                         next={() => setPage(pages.Summary)}
                         handleAnswer={handleAnswer}
                         questions={questions}
                         startIndex={questionIndex}
                         ch={3}
        />
    );
}

export default Ch3;