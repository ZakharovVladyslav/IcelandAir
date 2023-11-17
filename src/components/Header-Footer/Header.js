import React, {useContext} from 'react';
import logo from "./IcelandAir-headerLogo.png"
import styles from "./F-H-style.module.css"
import {AppContext} from "../../contexts/AppContext";
import {motion} from "framer-motion";

function Header(props) {
    const {setTerms, setFaq, terms, faq, name} = useContext(AppContext)
    return (
        <header className={styles.header}>
            <a href={"https://www.icelandair.com/"}>
                <img src={logo}
                 alt={"IcelandAir"}
            /></a>
            <div
                className={`flex f1 ${styles.hi}`}
            >
            <h2 style={
                {
                    margin:0,
                }}>{name}</h2>
            </div>
            {(terms||faq)&&
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${styles.close}`}
                    style={{aspectRatio:1}}
                    onClick={()=>{
                        setFaq(false)
                        setTerms(false)
                    }}
                >
                    {closeIcon}
                </motion.button>
            }

        </header>
    );
}

export default Header;
export const closeIcon = (<svg style={{flex:1}} fill={"red"} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>)