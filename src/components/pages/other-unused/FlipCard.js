import React, {useState} from 'react';
import PageScheme from "../../ui/pageScheme/pageScheme";
import IMG from "../assets/Icon feather-star.png"
import blue from "../assets/blue.jpg"
import ReactCardFlip from 'react-card-flip';
import Card from "../assets/Card.png"
function FlipCard(props) {
    const [isFlipped, setFlipped] = useState(false)
    function handleClick(e){    const styles = {
        width:"100%"
    }
        e.preventDefault();
        setFlipped(!isFlipped)
    }
    return (
        <PageScheme>
            <ReactCardFlip
                styles={{
                    width: "100%"
                }}
                isFlipped={isFlipped} flipDirection="horizontal">
                <img style={{width: "100%"}} src={Card} onClick={handleClick}/>
                <img style={{width: "100%", filter:"invert()"}} src={Card} onClick={handleClick}/>
            </ReactCardFlip>
        </PageScheme>
    );
}

export default FlipCard;