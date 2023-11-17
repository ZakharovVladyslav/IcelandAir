import React from 'react';
import plane from '../assets/plane-oneMission.png'
import lock from '../assets/padlock.png'

function OneMission(props) {
    const styles = {
        container: {
            position: "relative",
            boxShadow: "0px 2px 5px 2px rgba(66, 68, 90, 0.11)",
            margin: "10px",
            border: "2px solid var(--color-1"
        },
        topLayer:{
            position:"absolute",
            height:"100%",
            width:"100%",
            top:0,
            left:0,
            justifyContent:"center",
            color:"#FF47B3"
        },
        img:{
            position:"absolute",
            top:0,
            right:0,
            margin:"10px"
        }
    }
    return (
        <div style={styles.container}>
            <img src={plane}/>
            <div className={"flex"}
                 style={styles.topLayer}>
                <img src={lock} style={styles.img}/>
                <h2 >{props.text??""}</h2>
            </div>
        </div>
    );
}

export default OneMission;