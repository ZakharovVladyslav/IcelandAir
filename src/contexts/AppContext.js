import React, {Component} from 'react'
import LandingPage from "../components/pages/LandingPage";
import {pages} from "../App";
import DefaultError, {CampaignIsOver} from "../components/pages/DefaultError";
import Ch2 from "../components/pages/ch2";
import Summary from "../components/pages/Summary";
import Loader from "../components/pages/Loader";

export const AppContext = React.createContext()

export const email = (new URLSearchParams(window.location.search)).get('email')
const isClosed = Date.now() > Date.parse('18 July 2023 23:59:59 GMT')

class AppContextProvider extends Component {

    headers

    constructor() {
        super();
        const urlParams = new URLSearchParams(window.location.search);
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json")
        this.headers.append("Authorization", "c3a9a7a0-de5b-405c-9e24-662c26629a24")
        this.headers.append("X-RE-MV", urlParams.get('email'))
    }

    state = {
        // page: isClosed?<CampaignIsOver/>:<Loader/>,
        page:<CampaignIsOver/>,
        terms: false,
        faq: false,
        barProps: {
            firstIcon: null,
            secondIcon: null,
            thirdIcon: null,
            firstCustomIcon: null,
            secondCustomIcon: null,
            thirdCustomIcon: null,
            initialStep: 1,
            step: 1,
            color: "#B6D2FF",
            altColor: "#001B71",
            firstColor: "#001B71",
            secondColor: "#B6D2FF",
            thirdColor: "#B6D2FF",
            name: ""
        }
    }
    setName = (name) => {
        this.setState({name: "Hi\u00A0" + name})
    }
    setBarProp = (newProp) => {
        if (newProp.step) {
            newProp.firstColor = newProp.step >= 1 ? this.state.barProps.altColor : this.state.barProps.color
            newProp.secondColor = newProp.step >= 2 ? this.state.barProps.altColor : this.state.barProps.color
            newProp.thirdColor = newProp.step >= 3 ? this.state.barProps.altColor : this.state.barProps.color
            newProp.initialStep = newProp.step
            newProp.step = false
        }
        this.setState({barProps: Object.assign(this.state.barProps, newProp)})
    }
    setPage = (page) => {
        this.setState({page: page})
    }
    setTerms = (bool) => {
        this.setState({terms: bool, faq: false})
    }
    setFaq = (bool) => {
        this.setState({faq: bool, terms: false})
    }

    getMember = (name, value) => new Promise((resolve, reject) => {
        fetch('https://api.wayfarerpoints.com/public/rule-engine/members',
            {method: "GET", headers: this.headers}
        ).then(async r => {
            switch (r.status) {
                case 200:
                case 425:
                    const json = await r.json()
                    return resolve(json)
                case 403:
                    this.setPage(pages.UnsignedError)
                    return reject(r.status)
                default:
                    this.setPage(pages.Error)
                    return reject(r.status)
            }
        })
            .catch(error => {
                reject(error)
            })
    })

    clickTransaction = (name, value) => {
        fetch('https://api.wayfarerpoints.com/public/rule-engine/events',
            // fetch('https://30fc5417-8368-40f4-b63a-3f2756b72052.mock.pstmn.io/events/clickOk',
            {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(
                    {
                        type: "click",
                        data: value === undefined ? {
                            place: name
                        } : {
                            place: name,
                            value: "" + value
                        }
                    }
                )
            }).then(async r => {
            switch (r.status) {
                case 200:
                case 425:
                    const json = await r.json()
                    break
                case 403:
                    this.setPage(pages.UnsignedError)
                    break
                default:
                    this.setPage(pages.Error)
                    break
            }
        })
            .catch(console.error)
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                setPage: this.setPage,
                setBarProp: this.setBarProp,
                setTerms: this.setTerms,
                setFAQ: this.setFaq,
                setFaq: this.setFaq,
                clickTransaction: this.clickTransaction,
                getMember: this.getMember,
                setName: this.setName
            }}
            >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider