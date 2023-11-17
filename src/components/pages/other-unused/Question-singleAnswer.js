import React, {useContext} from 'react';
import PageScheme from "../../ui/pageScheme/pageScheme";
import SingleAnswer from "../../ui/Quiz/SingleAnswer";
import {AppContext} from "../../../contexts/AppContext";
import {pages} from "../../../App";

function QuestionSA(props) {
    const {setPage} = useContext(AppContext)
    return (
        <PageScheme
            header={"Header"}
            info={"info"}
            button={{
                style: {},
                onClick: () => {
                },
                text: "Submit",
            }}
        >
            <SingleAnswer
                items={
                    [
                        {text: "Op1"},
                        {text: "Op2 [correct]", isCorrect: true},
                        {text: "Op3"}
                    ]
                }
                success={() => {
                    setPage(pages.QuestionMA)
                }}
            />
        </PageScheme>
    );
}

export default QuestionSA;