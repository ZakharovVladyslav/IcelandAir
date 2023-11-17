import React, {useContext, useEffect} from 'react';
import Ch1 from "./Ch1";
import PreCh2 from "./PreCh2";
import Ch2 from "./ch2";
import PreCh3 from "./PreCh3";
import Ch3 from "./Ch3";
import {pages} from "../../App";
import Summary from "./Summary";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {AppContext} from "../../contexts/AppContext";
import LandingPage from "./LandingPage";
function Loader(props) {
    const {getMember, setPage,setName} = useContext(AppContext)
    useEffect(() => {

        setTimeout(
            function () {
                window.scrollTo(0, 1);
            },
            0)
        getMember().then(json => {
            let place = ""
            if (!(json
                && json.data
                && json.data.engage1
                && json.data.engage1.place
                && (typeof json.data.engage1.place == "string")
            ))
                return setPage(<LandingPage/>)
            setName(json.data.firstName)
            place = json.data.engage1.place
            switch (place) {
                case "home":
                    return setPage(<LandingPage/>)
                case "last_flight_time":
                    return setPage(<Ch1 load={"last_flight_time"}/>)
                case "last_flight_reason":
                    return setPage(<Ch1 load={"last_flight_reason"}/>)
                case "last_flight_airline":
                    return setPage(<Ch1 load={"last_flight_airline"}/>)
                case "next_flight_time":
                    return setPage(<Ch1 load={"next_flight_time"}/>)
                case "next_time_place":
                    return setPage(<Ch1 load={"next_time_place"}/>)
                case "saga_club_ffp":
                    return setPage(<PreCh2/>)
                case "heimkaup":
                    return setPage(<Ch2 load={"heimkaup"}/>)
                case "olis":
                    return setPage(<Ch2 load={"olis"}/>)
                case "onboard":
                    return setPage(<Ch2 load={"onboard"}/>)
                case "redemption_cobrand":
                    return setPage(<PreCh3/>)
                case "redemption_flight":
                    return setPage(<Ch3 load={"redemption_flight"}/>)
                case "redemption_upgrades":
                    return setPage(<Ch3 load={"redemption_upgrades"}/>)
                case "redemption_giftcard":
                    return setPage(<Ch3 load={"redemption_giftcard"}/>)
                case "redemption_charity":
                    return setPage(<Ch3 load={"redemption_charity"}/>)
                case "redemption_transfer":
                    return setPage(pages.SpinWheel)
                case "rate":
                case "spin":
                    return setPage(<Summary reward={json.data.engage1.spin||""} rate={json.data.engage1.rate}/>)
            }
        }).catch(console.error)
    }, [])
    return (
        <Box className={"f1"}
             sx={{ display: 'flex',
                justifyContent:"center",
                 alignItems:"center"
             }}
        >
            <CircularProgress
                size={"10vw"}
            />
        </Box>
    );
}

export default Loader;