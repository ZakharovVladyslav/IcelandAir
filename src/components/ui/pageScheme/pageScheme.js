import React, {useContext, useEffect, useRef} from 'react';
import CustomButton from "../Button/Button";
import {AppContext} from "../../../contexts/AppContext";
import Component from "../ProgressBar/Component";

function PageScheme(props) {
    const ref = useRef()
    const {barProps} = useContext(AppContext)
    return (
        <div className={"flex f1"} style={
            {
                padding:"20px",
                boxSizing:"border-box",
                alignContent:"center",
                textAlign: "center",
            }
        }>
            <Component {...barProps}/>
            {props.header&&<h1>{props.header}</h1>}
            {props.info&&<h3>{props.info}</h3>}
            <div className={"flex f1"}>
                {props.children}
            </div>
            {/*<CustomButton {...props.button}/>*/}
        </div>
    );
}

export default PageScheme;