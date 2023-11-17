import React, {useEffect} from 'react';
import cog from "./assets/cog.png"
import error from "./assets/error.png"
import ReactGA4 from "react-ga4";

function DefaultError(props) {
    useEffect(() => {
        ReactGA4.event({
            category: "error",
            action: "ErrorSthWentWrong"
        })},[])
        return (
            <div className={"flex f1"} style={{textAlign: "center", justifyContent: "center", padding: "40px 20px"}}>
                {/*<h2>Oops! Something went wrong. Please try again later.</h2>*/}
                <h1>Eitthvað fór úrskeiðis.</h1>
                <h2>Vinsamlegast prófaðu aftur síðar.</h2>
                <img src={error} style={{marginTop: "40px"}}/>
            </div>
        );
    }

    export function UnsignedError(props) {
        useEffect(() => {
            ReactGA4.event({
                category: "error",
                action: "ErrorUnsigned"
            })
        }, [])
        return (
            <div className={"flex f1"} style={{textAlign: "center", justifyContent: "center", padding: "40px 20px"}}>
                <h2>Því miður geta aðeins Saga Club félagar sem fengu leikinn sendan í tölvupósti frá Icelandair tekið
                    þátt í gjafaleiknum.</h2>
            </div>
        );
    }

    export function CampaignIsOver(props) {
        useEffect(() => {
            ReactGA4.event({
                category: "error",
                action: "CampaignIsOver"
            })},[])
        return (
            <div className={"flex f1"} style={{textAlign: "center", justifyContent: "center", padding: "40px 20px"}}>
                <h2>Vinsamlegast athugaðu að gjafaleik er{'\u00A0'}lokið.</h2>
                <br/>
                <br/>
                <img src={cog}/>
            </div>
        );
    }


    export default DefaultError;