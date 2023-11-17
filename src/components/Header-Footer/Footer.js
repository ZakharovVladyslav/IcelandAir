import React, {useContext} from 'react';
import styles from './F-H-style.module.css'
import WSFLogo from './WFS-footerLogo.png'
import {AppContext} from "../../contexts/AppContext";

function Footer() {
    const {setTerms, setFAQ} = useContext(AppContext)
    return (
        <footer className={styles.footer}>
            <div className={styles.footerButtons}>
                <button><a href={"/faq"} target={"_blank"}>FAQ</a></button>
                <button><a href={"/tnc"} target={"_blank"}>Terms & Conditions</a></button>
                <button><a href={"https://www.icelandair.com/is/adstod/skilmalar-og-skilyrdi/privacy-policy/"} target={"_blank"}>Privacy</a></button>
            </div>
            <a href={"https://wayfarersolutions.com/"}>
                <img src={WSFLogo}
                     alt="Powered by WAYFARER"
                />
            </a>
        </footer>
    );
}

export default Footer;