import './App.css';
import Footer from "./components/Header-Footer/Footer";
import {useContext, useEffect} from "react";
import {AppContext} from "./contexts/AppContext";
import Header from "./components/Header-Footer/Header";
import DefaultError, {UnsignedError} from "./components/pages/DefaultError";
import LandingPage from "./components/pages/LandingPage";
import Missions from "./components/pages/other-unused/Missions";
import QuestionMA from "./components/pages/other-unused/Question-multiipleAnswer";
import QuestionSA from "./components/pages/other-unused/Question-singleAnswer";
import SpinWheel from "./components/pages/spinWheel/SpinWheel";
import Scratch3Cards from "./components/pages/other-unused/Scratch3Cards";
import FlipCard from "./components/pages/other-unused/FlipCard";
import {motion, AnimatePresence} from "framer-motion";
import PreCh2 from "./components/pages/PreCh2";
import PreCh3 from "./components/pages/PreCh3";
import TnC, {closeIcon} from "./components/TnC";
import FAQ from "./components/FAQ";
import Ch1 from "./components/pages/Ch1";
import ReactGA4 from "react-ga4";

const TRACKING_ID = "G-7SNG9REQC2"
ReactGA4.initialize(TRACKING_ID)


export const pages = {
    Error: <DefaultError/>,
    UnsignedError: <UnsignedError/>,
    LandingPage: <LandingPage/>,
    QuestionSA: <QuestionSA/>,
    QuestionMA: <QuestionMA/>,
    Ch2: <PreCh2/>,
    SpinWheel: <SpinWheel/>,
    Scratch3Cards: <Scratch3Cards/>,
    FlipCard: <FlipCard/>,
    Ch1: <Ch1/>,
    Summary: <SpinWheel/>,
    Ch3: <PreCh3/>
}

function App() {

    const {page, terms, faq} = useContext(AppContext)

    function getPage() {
        return page || <DefaultError/>
    }


    if (window.location.pathname === "/tnc")
        return (
            <div className="App">
                <Header/>

                <main className={"main"}>
                    <TnC noClose style={{padding: "20px", maxWidth: "1000px", margin: "auto"}}/>
                </main>
                <Footer/>
            </div>
        )

    if (window.location.pathname === "/faq")
        return (
            <div className="App">
                <Header/>

                <main className={"main"}>
                    <FAQ noClose style={{padding: "20px", maxWidth: "1000px", margin: "auto"}}/>
                </main>
                <Footer/>
            </div>
        )

    return (
        <div className="App">
            <Header/>
            <main className={"main"}>
                <AnimatePresence mode={"wait"}>
                    <motion.div
                        style={{maxWidth: "800px", display: terms || faq ? "none" : ""}}
                        key={page.type.name}
                        className={"flex f1"}
                        initial={{y: 10, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: -10, opacity: 0}}
                        transition={{duration: 0.2}}
                    >
                        {getPage()}
                    </motion.div>
                </AnimatePresence>
                {terms || faq ?
                    <>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            backgroundColor: "white",
                            overflowY: "auto",
                            width: "100%",
                            zIndex: 100,
                        }}>
                            {terms &&
                                <TnC style={{height: "85vh", padding: "20px", maxWidth: "1000px", margin: "auto"}}/>}
                            {faq &&
                                <FAQ style={{height: "85vh", padding: "20px", maxWidth: "1000px", margin: "auto"}}/>}
                        </div>
                        x
                    </> : null}
            </main>
            <Footer/>
        </div>
    );
}

export default App;
