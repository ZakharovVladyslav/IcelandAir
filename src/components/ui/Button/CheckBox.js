import * as React from "react";
import {useEffect, useState} from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const tickVariants = {
    pressed: (isChecked) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
    checked: { pathLength: 1},
    unchecked: { pathLength: 0 }
};

const boxVariants = {
    hover: { scale: 1.05, strokeWidth: 40 },
    pressed: { scale: 0.95, strokeWidth: 20 },
    checked: { stroke: "#B6D2FF" },
    unchecked: { stroke:"#ddd", strokeWidth: 30 },
    warning: {stroke: "#ff0000"}
};
const tickColor = "#001B71"

export const CheckBox = ({onChange,style,warning}) => {
    const [isChecked, setIsChecked] = useState(false);
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
    const [red,setRed] = useState(false)

    useEffect(()=> {
        if(warning!==0){
            setRed(true)
            setTimeout(()=>setRed(false),250)
            setTimeout(()=>setRed(true),500)
            setTimeout(()=>setRed(false),750)
        }
    },[warning])
    useEffect(()=>onChange(isChecked),[isChecked])

    return (
        <motion.svg
            initial={false}
            animate={isChecked ? "checked" : "unchecked"}
            whileHover="hover"
            whileTap="pressed"
            style={style}
            viewBox={`0 0 440 440`}
            onClick={() => setIsChecked(!isChecked)}
        >
            <motion.path
                d="M 72 136 C 72 100.654 100.654 72 136 72 L 304 72 C 339.346 72 368 100.654 368 136 L 368 304 C 368 339.346 339.346 368 304 368 L 136 368 C 100.654 368 72 339.346 72 304 Z"
                fill="transparent"
                strokeWidth="50"
                animate={isChecked ? "checked" : (red?"warning":"unchecked")}
                variants={boxVariants}
            />
            <motion.path
                d="M 0 128.666 L 128.658 257.373 L 341.808 0"
                transform="translate(54.917 88.332) rotate(-4 170.904 128.687)"
                fill="transparent"
                strokeWidth="65"
                stroke="hsl(0, 0%, 100%)"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={tickVariants}
                style={{ pathLength, opacity }}
                custom={isChecked}
            />
            <motion.path
                d="M 0 128.666 L 128.658 257.373 L 341.808 0"
                transform="translate(54.917 68.947) rotate(-4 170.904 128.687)"
                fill="transparent"
                strokeWidth="65"
                stroke={tickColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={tickVariants}
                style={{ pathLength, opacity }}
                custom={isChecked}
            />
        </motion.svg>
    );
};
