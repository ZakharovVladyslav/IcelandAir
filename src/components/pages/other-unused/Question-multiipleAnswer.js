import React, {useContext} from 'react';
import PageScheme from "../../ui/pageScheme/pageScheme";
import SingleAnswer from "../../ui/Quiz/SingleAnswer";
import {AppContext} from "../../../contexts/AppContext";
import {pages} from "../../../App";
import MultipleAnswer from "../../ui/Quiz/MultipleAnswer";

function QuestionMA(props) {
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
            <MultipleAnswer
                items={
                    [
                        {text: "Op1"},
                        {text: "Op2 [correct]", isCorrect: true},
                        {text: "Op3"},
                        {text: "Op2 [correct]", isCorrect: true},
                    ]
                }
                success={() => {
                    setPage(pages.SpinWheel)
                }}
            />
        </PageScheme>
    );
}

export default QuestionMA;