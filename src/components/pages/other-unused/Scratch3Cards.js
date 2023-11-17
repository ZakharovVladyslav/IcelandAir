import React, {useContext} from 'react';
import PageScheme from "../../ui/pageScheme/pageScheme";
// import ScratchCard from 'react-scratchcard-v2';
import IMG from "../assets/Icon feather-star.png"
import blue from "../assets/blue.jpg"
import ReactCardFlip from 'react-card-flip';
import {AppContext} from "../../../contexts/AppContext";
import {pages} from "../../../App";
function Scratch3Cards(props) {
    const {setPage} = useContext(AppContext)
    return (
        <PageScheme>
            {/*<ScratchCard*/}
            {/*    width={320}*/}
            {/*    height={226}*/}
            {/*    image={blue}*/}
            {/*    finishPercent={80}*/}
            {/*    // customBrush={{*/}
            {/*    //     image: require('./brush.img'),*/}
            {/*    //     width: 15,*/}
            {/*    //     height: 15*/}
            {/*    // }}*/}
            {/*    onComplete={() => setPage(pages.FlipCard)}*/}
            {/*>*/}
            {/*    <div style={{*/}
            {/*        display: 'flex',*/}
            {/*        width: '100%',*/}
            {/*        height: '100%',*/}
            {/*        alignItems: 'center',*/}
            {/*        justifyContent: 'center',*/}
            {/*        backgroundImage: `url(${IMG})`,*/}
            {/*    }}*/}
            {/*    >*/}
            {/*    </div>*/}
            {/*</ScratchCard>*/}
        </PageScheme>
    );
}

export default Scratch3Cards;