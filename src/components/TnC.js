import React, {useContext} from 'react';
import CustomButton from "./ui/Button/Button";
import {AppContext} from "../contexts/AppContext";

function TnC(props) {
    const {setTerms} = useContext(AppContext)
    return (
        <div {...props} >
            <h1>Icelandair Sweepstake Game
                <br/>
                <br/>

                Terms and Conditions </h1>
            <ol style={{paddingLeft:"20px"}}>
                <li>The promoter of the Game is Icelandair (referred to herein as “Airline” and/or the “Promoter”).</li>
                <li>The Promotor has partnered with a third-party, Wayfarer Points Limited to provide the Airline
                    Sweepstake Game. All references to ‘Terms and Conditions’ herein means these Terms and Conditions.
                </li>
                <li>The Airline Sweepstake Game consists of a sweepstake (the “Game”). Participation in the Game is only
                    open to an “Eligible Participant” On successful completion of the Game, Eligible Participants will
                    have an opportunity to win a prize.
                </li>
                <li>By participating in the Game, You, the participant represent and warrant that you have read and
                    agree to be bound by these Terms and Conditions which are final in all matters relating to the Game,
                    that you are aged 18 years or older as at the date of entry, that you are an Airline member, and
                    that all of the information provided during your participation in the Game is accurate, does not
                    violate any third party’s legal rights or any applicable laws.
                </li>
                <li>Prizes are non-transferable and non-exchangeable and are subject to these Terms and Conditions;</li>
                <li>The prizes to be won and a full list of terms and conditions for the prize won will be sent to each
                    winner. The prizes are listed below:
                    <ol style={{paddingLeft:"20px"}} type={'a'}>
                        <li>50,000 points – The 50,000 points will be credited to the winner’s Saga Club account within
                            5 working days of being notified of their win. Points are issued by the airline, and
                            redeemed in accordance with Airline Terms and Conditions, for more information visit
                            www.icelandair.com.
                        </li>
                        <li>20,000 points - The 20,000 points will be credited to the winner’s Saga Club account within
                            5 working days of being notified of their win. Points are issued by the airline, and
                            redeemed in accordance with Airline Terms and Conditions, for more information visit
                            www.icelandair.com.
                        </li>
                        <li>10,000 points - The 10,000 points will be credited to the winner’s Saga Club account within
                            5 working days of being notified of their win. Points are issued by the airline, and
                            redeemed in accordance with Airline Terms and Conditions, for more information visit
                            www.icelandair.com.
                        </li>
                        <li>5000 points - The 5000 points will be credited to the winner’s Saga Club account within 5
                            working days of being notified of their win. Points are issued by the airline, and redeemed
                            in accordance with Airline Terms and Conditions, for more information visit
                            www.icelandair.com.
                        </li>
                        <li>Between 100 – 1000 points - Points will be credited to the winner’s Saga Club account within
                            5 working days of being notified of their win. Points are issued by the airline, and
                            redeemed in accordance with Airline Terms and Conditions, for more information visit
                            www.icelandair.com.
                        </li>
                    </ol>
                </li>
                <li>The Game will end on at 11:59pm GMT July 18th (the “Closing Date”). No entries will be accepted after
                    the Closing Date.
                </li>
                <li>Selected Airline members who are opted-in to receive marketing communications from Airline will
                    receive an email with a unique link inviting them to participate in the Game. To participate, you
                    must click on the link provided in the email headed “Airline Sweepstake” and follow the instructions
                    provided.
                </li>
                <li>You can only participate once. The link cannot be shared.</li>
                <li>Prizes will be awarded randomly between July 4th and July 18th.</li>
                <li>Prize winners will be notified of their prize on screen on completion of the Game and will receive
                    an email from Airline (to the email associated with their Airline account) with the prize details,
                    points will be added to their account within max. 5 working days. Winners of 1000 points or less
                    will not receive an email but points will be added to their account within 5 working days.
                </li>
                <li>There is no cash value or alternative to any of the prizes.</li>
                <li>Participants who do not comply with these Terms and Conditions will be disqualified. Details of how
                    to participate in Airline Sweepstake form part of these Terms and Conditions.
                </li>
                <li>Airline is entitled at its sole discretion to disqualify participants or withdraw any prize if they
                    become aware of any possible dishonesty or fraud or breach of these Terms and Conditions.
                </li>
                <li>Airline accepts no responsibility for any difficulties experienced in participating in the Game,
                    including, but not limited to, incomplete, corrupt or incorrect entries or for any malfunctions,
                    errors or viruses in the software that has been designed to maintain participant’ details, or for
                    any incompatibility with all, or any, hardware and/or software that participants may use.
                </li>
                <li>The decision of the Promoter shall be final and no correspondence shall be entered into in that
                    regard.
                </li>
                <li>Airline reserves the right at its sole discretion to modify, cancel, terminate or temporarily
                    suspend the Game. Prizes may change at any time without notification.
                </li>
                <li>Airline does not take responsibility for any delays or difficulties experienced in the supply or use
                    of any prize including those to be redeemed with a third party.
                </li>
                <li>The information provided by participants including personal data (as defined by the EU General Data
                    Protection Regulation), will be used by the Promoter in connection with the Game. Participant’s
                    personal data will be used by Airline in accordance with the Airline Privacy Statement available on
                    our website. Data relating to participants will be retained by Airline for a reasonable period after
                    the Competition closes to assist Airline to operate competitions in a consistent manner and to deal
                    with any queries.
                </li>
                <li>The full name of winners may be published on various sources at the discretion of Airline. Winners
                    may be required to take part in publicity accompanying or resulting from the Game as may reasonably
                    be requested by the Promoter. By entering, you agree to your information being used for this
                    purpose.
                </li>
                <li>To the extent permitted by law, the Promoter accepts no liability for any loss suffered by entrants
                    in relation to the Game. Nothing in these Terms and Conditions shall exclude the liability of the
                    Promoters for death, personal injury, fraud or fraudulent misrepresentation as a result of its
                    negligence.
                </li>
                <li>The Game and these Terms and Conditions are governed by US Law and subject to the exclusive
                    jurisdiction of the US Courts which shall have exclusive jurisdiction to settle any disputes which
                    may arise out of or in connection with the Competition. Any disclaimer of liability by Airline under
                    these Terms and Conditions is enforceable to the maximum extent permitted by applicable law.
                </li>
                <li>Each of the provisions of these Terms and Conditions is severable and if any such provision is held
                    by any court or other competent authority to be illegal, void or unenforceable in whole or in part,
                    the legality, validity and enforceability of the remaining provisions of these Terms and Conditions
                    shall not be affected or impaired.
                </li>
            </ol>
            {props.close&&<CustomButton text={"BACK"}
                          onClick={()=>setTerms(false)}
                          style={{margin:"40px auto", marginBottom:"100px"}}
            />}
        </div>
    );
}

export default TnC;



