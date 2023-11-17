import React, {useContext} from 'react';
// import "rc-collapse/assets/index.css";
import Collapse from "rc-collapse";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomButton from "./ui/Button/Button";
import {AppContext} from "../contexts/AppContext";

function Faq(props) {
    const {setFaq,setTerms} = useContext(AppContext)
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : -1);
    };
    const ColAcc = ({header, content, index}) => (
        <Accordion
            // expanded={expanded===index}
            // onChange={handleChange(index)}
            // style={{
            //     backgroundColor: "#f2f7ff"
            // }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{fontWeight: "bold"}}>{header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion>)

    const faqTexts = [
        {
            header: "Geta allir tekið þátt í gjafaleiknum?",
            content: (<>Allir Saga Club félagar, sem eiga kost á að taka þátt í gjafaleiknum, ættu að hafa fengið tölvupóst frá Icelandair þann 4. júlí 2023, sem býður þeim að taka þátt í gjafaleiknum.
                <br/><br/>Vinsamlega{' '}
                <a href={"/tnc"}
                   target={"_blank"}
                    //                                     onClick={(e) => {
                    //     e.preventDefault()
                    //     setTerms(true)
                    // }}
                >{"smelltu\u00A0hér"}</a>{' '}
                til að sjá heildarskilmála og skilyrði gjafaleiksins.</>)
        }, {
            header: "Hvernig tek ég þátt í gjafaleiknum?",
            content: "Í tölvupóstinum er hlekkur sem færir þig yfir á leikjasíðu. Þar þarftu að lesa leiðbeiningar um hvernig leikurinn virkar. Ef þér tekst að klára leikinn fer nafnið þitt í lukkupott og þú gætir átt möguleika á að vinna til verðlauna. Ef þú vinnur, færðu senda staðfestingu í pósti á netfangið sem er skráð fyrir Saga Club aðildinni þinni, eða punktar verða færðir á reikninginn þinn innan 5 virkra daga."
        }, {
            header: "Þarf ég að klára leikinn til að vinna verðlaun?",
            content: "Já, aðeins þátttakendur sem klára leikinn geta unnið til verðlauna."
        }, {
            header: "Hvenær lýkur leiknum?",
            content: "Leiknum lýkur þann 18. júlí kl. 23:59 að íslenskum tíma."
        }, {
            header: "Hversu oft get ég tekið þátt í leiknum?",
            content: "Þátttakendur fá aðeins eitt (1) tækifæri til að spila leikinn."
        }, {
            header: "Þarf ég að vera félagi í Saga Club til að taka þátt í leiknum?",
            content: "Já, þú getur aðeins tekið þátt í leiknum ef þú ert félagi í Saga Club, átt virkan Saga Club reikning og fékkst sendan tölvupóst frá Icelandair þann 4. júlí sem bauð þér að taka þátt í gjafaleiknum."

        }, {
            header: "Hvaða verðlaun eru í boði í gjafaleiknum",
            content: (
                <>
                    {"\u00A0\u00A0\u00A0\u00A0"}1. verðlaun: 50.000 Vildarpunktar<br/>
                    {"\u00A0\u00A0\u00A0\u00A0"}2. verðlaun: 20.000 Vildarpunktar<br/>
                    {"\u00A0\u00A0\u00A0\u00A0"}3. verðlaun: 10.000 Vildarpunktar<br/>
                    {"\u00A0\u00A0\u00A0\u00A0"}4-10. verðlaun: 5.000 Vildarpunktar
                    <br/>
                    <br/>
                    Önnur verðlaun eru í boði með 1.000 punktum eða færri.
                    <br/>
                    <br/>
                    Hægt er að vinna til verðlauna á tímabilinu 4 júlí til 18. júlí 2023, og hverjum verðlaunum fylgja
                    sérstakir skilmálar og skilyrði.
                </>
            )

        }, {
            header: "Ef ég vinn, hvenær fæ ég verðlaunin afhent?",

            content: "Ef þú vinnur 5.000 punkta eða fleiri, færðu sendan póst frá Icelandair sem staðfestir vinninginn þinn þegar þú hefur klárað leikinn. Þú færð upplýsingar um hvernig þú getur nálgast vinninginn og hvaða skilmálar eiga við hann. Það gætu liðið allt að 5 virkir dagar frá því að þú spilaðir leikinn þar til þú færð póst sem staðfestir vinninginn þinn. Ef þú vannst minna en 5.000 punkta, verður ekki sendur tölvupóstur til þín og punktarnir verða færðir á reikninginn þinn innan 5 virkra daga frá því þú laukst leiknum."


        }, {
            header: "Get ég boðið vinum og fjölskyldu að taka þátt í gjafaleiknum?",

            content: "Því miður geta aðeins Saga Club félagar sem fá leikinn sendan í tölvupósti tekið þátt í gjafaleiknum, þar sem það er ekki hægt að deila hlekknum fyrir leikinn."


        }, {
            header: "Hvað geri ég ef ég fæ ekki staðfestingarpóst frá Icelandair með upplýsingum um verðlaunin mín?",
            content: (<>Staðfestingarpósturinn ætti að berast til þín innan fimm daga frá þátttöku í leiknum. Gakktu úr skugga um að pósturinn hafi ekki lent í ruslmöppunni. Ef þú hefur enn ekki fengið staðfestingarpóstinn skaltu <a href={"mailto:events@icelandair.is"}>senda okkur tölvupóst</a>. Það er nauðsynlegt að pósturinn þar sem við buðum þér að taka þátt í leiknum sé í viðhengi fyrirspurnarinnar.</>)
        }, {
            header: "Ég fékk tilkynningu um að hafa unnið verðlaun í Icelandair gjafaleiknum en ég fékk ekki verðlaunin afhent í samræmi við þar sem fram kom í staðfestingarpóstinum. Hvað get ég gert?",
            content: (<>Þú getur haft samband við okkur með <a href={"mailto:events@icelandair.is"}>tölvupósti</a> og sett í viðhengi afrit af póstinum sem tilkynnir um vinninginn.</>)
        }, {
            header: "Ég er félagi í Saga Club, en ég fékk aldrei tölvupóst frá Icelandair um þátttökuna í gjafaleiknum. Hvað get ég gert?",
            content: "Því miður geturðu ekki tekið þátt í leiknum ef þú fékkst ekki tölvupóst."
        },
        {
            header: "Það kom upp villa meðan ég var í leiknum. Hvað get ég gert?",
            content: (<>Ef eitthvað fer úrskeiðis meðan þú spilar leikinn geturðu reynt aftur síðar eða prófað að spila hann á öðru tæki. Við getum því miður ekki verið ábyrg fyrir villum sem koma upp við þátttöku, samkvæmt skilmálum og skilyrðum leiksins Vinsamlega <a href={"/tnc"} target={"_blank"}>{"smelltu\u00A0hér"}</a>.</>)
        }
    ]
    return (
        <div {...props}>
            {faqTexts.map((e, i) => (<ColAcc {...e} index={i} key={i}/>))}
            {props.close&&<CustomButton text={"BACK"}
                           onClick={() => setFaq(false)}
                           style={{margin: "40px auto", marginBottom: "100px"}}
            />}
        </div>
    );

}


export default Faq;
