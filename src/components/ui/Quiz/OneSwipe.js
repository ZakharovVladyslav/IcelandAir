import React, {useMemo, useRef, useState} from 'react';
import TinderCard from "react-tinder-card";
import PHOTO_icelandair from "../../pages/assets/swiper_photos/icelandair-mastercard.png"
import PHOTO_GetYourGuide_company_logo from "../../pages/assets/swiper_photos/GetYourGuide_company_logo.png"
import PHOTO_booking from "../../pages/assets/swiper_photos/booking.png"
import PHOTO_JetBlue from "../../pages/assets/swiper_photos/JetBlue-Logo.wine.png"
import {motion} from "framer-motion";
import {pages} from "../../../App";
import CustomButton from "../Button/Button";

export function YNButtons({right, left}) {
    const styles = {
        btLeft: {
            backgroundColor: "#ED1515",
            color: "var(--color1)"
        },
        btRight: {
            backgroundColor: "#50E68C",
            color: "var(--color1)"
        }
    }
    return <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2, duration: 0.2}}
        style={{flexDirection: "row", justifyContent: "space-around"}} className='flex btnsYNC'>
        <CustomButton className="YNBTN NBTN" text="Nei" delayLoad style={styles.btLeft} onClick={() => left()}/>
        <CustomButton className="YNBTN YBTN" text="Já" delayLoad style={styles.btRight}
                      onClick={() => right()}/>
    </motion.div>
}

function OneSwipe(props) {

    const questions = [props.question]
    const [lastInfo, setLastInfo] = useState()
    const [currentIndex, setCurrentIndex] = useState(questions.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
    const delay = useRef(false)

    const childRefs = useMemo(
        () =>
            Array(questions.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < questions.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, character, index) => {
        if (direction === "left")
            setLastInfo(character.no)
        else
            setLastInfo(character.yes)
        setTimeout(() => {
            setLastDirection(direction)
            updateCurrentIndex(index - 1)
        }, 350)

    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < questions.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }

    return (
        <div className={"flex f1"} style={{overflow: "hidden"}}>
            <h1>{props.headerQuestion}</h1>
            <motion.div
                key={currentIndex}
                className={"flex f1"}
                initial={{x: -10, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                exit={{x: 10, opacity: 0}}
                transition={{duration: 0.2}}
            >
                <div className={"flex f1"}>
                    <div className='cardContainer flex' style={{
                        overflow: "hidden",
                        justifyContent: "space-around",
                        marginTop: "20px",
                        marginBottom: '20px'
                    }}>
                        {currentIndex === 0 && <YNButtons
                            left={() => {
                                swipe('left')
                            }}
                            right={() => {
                                delay.current = true
                                swipe('right')
                            }}/>}
                        {currentIndex === 0 ?
                            questions.map((quest, index) =>
                                <TinderCard className='swipe PCtextSize'
                                            swipeRequirementType={"position"}
                                            swipeThreshold={window.innerWidth > 500 ? 100 : 30}
                                    // swipeThreshold={0.3}
                                            ref={childRefs[index]}
                                            key={quest.name}
                                            onSwipe={(dir) => swiped(dir, quest, index)}
                                    // onCardLeftScreen={() => outOfFrame(quest.name, index)}
                                            preventSwipe={['up', 'down']}
                                >
                                    {quest.fillNask ?
                                        <div style={{
                                            color: "white",
                                            fontSize: "20px",
                                            backgroundImage: `url(${quest.photo})`
                                        }}
                                             className='card flex f1'>
                                            <p style={{padding: "10px", fontWeight: "bold"}}>{quest.name}</p>
                                        </div>
                                        :
                                        <div style={{color: "black", justifyContent: "space-around"}}
                                             className='card flex f1'>
                                            {quest.textQuestion ?
                                                <p style={{
                                                    margin: "20px",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4em"
                                                }}>{quest.textQuestion}</p>
                                                :
                                                <img
                                                    draggable={"false"}
                                                    style={{maxWidth: "100%"}} src={quest.photo}
                                                    alt={quest.name}
                                                />}
                                        </div>}
                                </TinderCard>
                            ) :

                            <div style={{flexDirection: "column", justifyContent: "space-around"}} className='flex f1'>
                                <h2 className={"PCtextSize"} style={{color: "black"}}>{lastInfo}</h2>
                                <CustomButton text={"Áfram"} onClick={()=>props.handleAnswer(lastDirection==="right"?"yes":'no')}/>
                            </div>}

                    </div>

                </div>

            </motion.div>
        </div>
    )
}

export default OneSwipe;