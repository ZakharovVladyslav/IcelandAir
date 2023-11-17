import React, {useContext, useMemo, useRef, useState} from 'react';
import TinderCard from "react-tinder-card";
import PHOTO_icelandair from "../../pages/assets/swiper_photos/icelandair-mastercard.png"
import PHOTO_GetYourGuide_company_logo from "../../pages/assets/swiper_photos/GetYourGuide_company_logo.png"
import PHOTO_booking from "../../pages/assets/swiper_photos/booking.png"
import PHOTO_JetBlue from "../../pages/assets/swiper_photos/JetBlue-Logo.wine.png"
import {motion} from "framer-motion";
import {pages} from "../../../App";
import CustomButton from "../Button/Button";
import {AppContext} from "../../../contexts/AppContext";
import {YNButtons} from "./OneSwipe";

function NewSwiper(props) {
    const {setPage} = useContext(AppContext)
    const characters = [
        "Can Saga Points be used to purchase flights, in full and in part?",
        "Can onboard purchases be made with Saga Points?",
        "Can Saga Points be used to purchase flight upgrades like extra legroom and WiFi?",
        "Can Saga Points be donated to charity?",
        "Can Saga Points be shared/gifted to friends/family?"
    ]


    const [currentIndex, setCurrentIndex] = useState(characters.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(characters.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < characters.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, character, index) => {
        if(direction === "left"){
            childRefs[index].current.restoreCard()
        }else {
            setLastDirection(direction)
            updateCurrentIndex(index - 1)
        }
        if(index - 1 === 0)
            setPage(pages.Summary)
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
        if (canSwipe && currentIndex < characters.length) {
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
        <div style={{overflow:"hidden"}}>
            {/*<h3 style={{textAlign:"center"}}>{characters.length-currentIndex} of {characters.length}</h3>*/}
            <div className='cardContainer flex' style={{overflow:"hidden", marginTop:"20px",marginBottom:'20px',
                justifyContent: "space-around",}}>
                <YNButtons
                    left={() => {
                        swipe('left')
                    }}
                    right={() => {
                        swipe('right')
                    }}/>
                {characters.map((character,index) =>
                    <TinderCard className='swipe'
                                swipeThreshold={0.3}
                                ref={childRefs[index]}
                                key={character}
                                onSwipe={(dir) => swiped(dir, character, index)}
                                onCardLeftScreen={() => outOfFrame(character, index)}
                                preventSwipe={['left', 'up','down']}
                    >
                        <div style={{color: "black", justifyContent:"space-around"}}
                             className='card flex f1'>
                            <p style={{margin:"10px", fontSize:"2em"}}>{character}</p>
                        </div>
                    </TinderCard>
                )}
            </div>
            {/*<div style={{flexDirection:"row", justifyContent:"space-around"}} className='flex '>*/}
            {/*    <CustomButton text ="No" onClick={() => {*/}
            {/*        swipe('left')*/}
            {/*    }}/>*/}
            {/*    <CustomButton text ="Yes" onClick={() => swipe('right')}/>*/}
            {/*</div>*/}

        </div>
    )
}

export default NewSwiper;