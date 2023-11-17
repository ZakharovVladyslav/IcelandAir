import React, {useState, useEffect, useContext} from "react";
// import Confetti from "react-confetti";
import {useWindowSize} from "react-use";
import "./style.css";
import CustomButton from "../../ui/Button/Button";
import PageScheme from "../../ui/pageScheme/pageScheme";
import {AppContext} from "../../../contexts/AppContext";
import wheelImg from "../assets/Icelandair_STW_Wheel_V4_Icelandic.png"
import pointerImg from "../assets/Icelandair_STW_Pointer_V3.png"
import {pages} from "../../../App";
import Summary from "../Summary";
import ReactGA4 from "react-ga4";

const SpinningWheel = () => {
    const {setPage, getMember, setBarProp, clickTransaction} = useContext(AppContext)
    const [deg, setDeg] = useState(0);
    const [button, setButton] = useState()
    const [reward, setReward] = useState() //1 - 50k
    const [rewardString, setRewardString] = useState("") //1 - 50k

    const quantity = 12;

    const zoneSize = 360 / quantity;

    // console.log("deg:", deg);
    // console.log("result:", result);

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    useEffect(() => {
        setBarProp({
            firstIcon: "done",
            secondIcon: "done",
            thirdIcon: "done",
            step: 3
        })
        getMember().then(json => {
            let reawrd2 = 2
            if (!(json
                && json.data
                && json.data.engage1
                && json.data.engage1.spin
                && (typeof json.data.engage1.spin == "string")
            ))
                return setPage(pages.Error)
            switch (json.data.engage1.spin) {
                // switch ("6000") {
                case "50000":
                    reawrd2 = 1
                    break;
                case "20000":
                    reawrd2 = 4
                    break;
                case "10000":
                    reawrd2 = 10
                    break;
                case "5000":
                    reawrd2 = 7
                    break;
                case "600":
                    reawrd2 = 0
                    break;
                default:
                    reawrd2 = 2
                    break;
            }
            setRewardString(json.data.engage1.spin)
            setReward(reawrd2);
        }).catch(console.error)
        ReactGA4.event({
            category: "page",
            action: `SpinWheel`
        })
    }, []);
    const handleClick = () => {
        // postEvent(code,"partner_girar",()=>setPage("Error12"))
        // if(prize===undefined||prize.code===undefined)
        //     setPage("Error13")
        if (deg) return;
        clickTransaction("spin")

        ReactGA4.event({
            category: "page",
            action: `SpinWheelShowAnswer`
        })

        const calculatedDeg = Math.floor(50 * 360 - (reward - 1) * zoneSize);
        console.log(calculatedDeg)
        setDeg(calculatedDeg);
        setButton("stop")
    };

    const handleResult = () => {
        setTimeout(() => setPage(
            <Summary reward={rewardString}/>
        ), 3000)
    };
    return (
        <PageScheme>
            <div className="wheel-container">
                <img
                    className="wheel"
                    src={wheelImg}
                    alt="wheel"
                    style={{transform: `translateX(-50%) rotate(${deg}deg)`}}
                    onTransitionEnd={handleResult}
                ></img>
                <img
                    className="pointer"
                    src={pointerImg}
                    alt="pointer"
                />
            </div>

            <div
                className={"flex-center"}
                style={{
                    padding: "20px",
                    transition: "3s",
                    opacity: button === "stop" ? 0 : 1,
                    borderRadius: "20px",
                    backgroundColor: "white"
                }}>
                <CustomButton
                    disabled={reward === undefined}
                    style={reward === undefined ? {backgroundColor: "gray"} : {}}
                    onClick={handleClick} text={"Snúðu lukkuhjólinu"}/>
            </div>
        </PageScheme>
    );
};

export default SpinningWheel;
