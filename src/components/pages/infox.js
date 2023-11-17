import React, {useContext} from 'react';
import CustomButton from "../ui/Button/Button";
import {pages} from "../../App";
import PageScheme from "../ui/pageScheme/pageScheme";
import {AppContext} from "../../contexts/AppContext";

function Infox({answer}) {

    const {setPage} = useContext(AppContext)
    return (
        <PageScheme>
            <p style={{fontSize:"2em", margin:"70px 20px"}}>
                {answer?
                "Frábært! Þegar þú flýgur með Icelandair þá skaltu muna eftir að skrá Saga Club númerið þitt í bókunina til að safna Vildarpunktum fyrir flugið þitt."
                :"Þegar þú flýgur með Icelandair þá skaltu muna eftir að skrá Saga Club númerið þitt í bókunina til að safna Vildarpunktum og Fríðindastigum fyrir flugið þitt."
                }
            </p>
            <CustomButton onClick={()=>setPage(pages.Ch2)}
                          text={"Áfram"}
            />
        </PageScheme>
    );
}

export default Infox;