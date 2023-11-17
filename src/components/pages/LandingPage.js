import React, {useContext, useEffect, useState} from 'react';
import planeImg from "./assets/landing_page_plane2.png"
import CustomButton from "../ui/Button/Button";
import {AppContext, email} from "../../contexts/AppContext";
import {pages} from "../../App";
import {CheckBox} from "../ui/Button/CheckBox";

import ReactGA4 from "react-ga4";
function LandingPage(props) {
    const {getMember, clickTransaction, setPage, setTerms} = useContext(AppContext)
    const [checked, setChecked] = useState(false)
    const [warning, setWarning] = useState(0)
    useEffect(() => {
        clickTransaction("home")
        // ReactGA4.send({hitType: "pageview", page: "/home", title: "Custom Title"})
        ReactGA4.event({
            category: "page",
            action: `LandingPage`
        })
    }, [])

    useEffect(()=>{
        if(checked) {
            ReactGA4.event({
                category: "userAction",
                action: "user accepted T&Cs"
            })
            console.log("event")
        }
    },[checked])

    const styles = {
        container: {
            border: "1px solid #B6D2FF",
            padding: "10px",
            width: "calc(100% - 4px)",
            boxSizing: "border-box"
        },
        button: {
            width: "80%",
            padding: "3px",
            margin: "20px",
            backgroundColor: "#001B71",
            color: "white"

        }
    }
    return (
        <div className={"flex f1"} style={{
            maxWidth: "550px"
        }}>
            <img
                style={{
                    width: "100%",
                    maxWidth: "550px"
                }}
                src={planeImg} alt={"Photo of the IcelandAir plane"}/>
            <p style={{textAlign: "center", margin: "1rem 0 2rem "}}>
                <h3>
                    Viltu eiga möguleika á því að vinna 50.000 Vildarpunkta?
                </h3>
                Það eina sem þú þarft að gera er að svara nokkrum spurningum um Icelandair Saga Club í skemmtilegum leik í boði Icelandair.
                Í leiknum getur þú lært um Saga Club og unnið til fjölda Vildarpunkta.
                Það tekur aðeins nokkrar mínútur að taka þátt!
                <br />
                Smelltu á hnappinn hér að neðan til þess að hefja leikana og þú gætir unnið allt að 50.000 Vildarpunkta!
            </p>
            <div className={"flex"} style={{textAlign: "center"}}>
                <CheckBox onChange={setChecked}
                          warning={warning}
                          style={{
                              height: "40px",
                              width: "40px",
                              cursor: "pointer"
                          }}/>
                <label
                    style={{margin: "10px"}}
                >Vinsamlega samþykktu <a href={"/tnc"}
                                         target={"_blank"}>skilmálana</a> til að taka þátt í leiknum</label>
            </div>
            <CustomButton
                text={"Taka þátt"}
                onClick={() => {
                    if (!checked)
                        setWarning(warning + 1)
                    else
                        setPage(pages.Ch1)
                }}
            />
        </div>
    );
}

export default LandingPage;