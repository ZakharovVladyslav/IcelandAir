import React, {useContext} from 'react';
import PageScheme from "../../ui/pageScheme/pageScheme";
import OneMission from "./OneMission";
import CustomButton from "../../ui/Button/Button";
import {AppContext} from "../../../contexts/AppContext";
import {pages} from "../../../App";

function Missions(props) {
    const {setPage} = useContext(AppContext)
    return (
        <PageScheme
            header={"Complete All Missions"}
        >
            <OneMission text={"Mission 1"} id={0}/>
            <OneMission text={"Mission 2"} id={1}/>
            <OneMission text={"Mission 3"} id={2}/>
            <CustomButton text={"Submit"}
                onClick={()=>{setPage(pages.QuestionSA)}}
            />
        </PageScheme>
    );
}

export default Missions;