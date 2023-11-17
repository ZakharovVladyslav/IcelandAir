import React, {useEffect, useState} from 'react';
import LargeButton from "../Button/LargeButton";
import CustomButton from "../Button/Button";

function FreeSingleAnswer(props) {
    const [selected, setSelected] = useState(-1)

    return (
        <div className={"flex f1"}>
            <h1>{props.question.question}</h1>
            {props.question.answers.map((item, index) =>
                <LargeButton
                    key={index}
                    text={item}
                    onClick={() => setSelected(index)}
                    style={selected === index ?
                            {backgroundColor: "var(--color-1)", color:"white"}
                            : {}
                    }
                />
            )}
            <CustomButton text={"Senda svar"} onClick={()=> {
                if(selected!==-1)
                    props.handleAnswer(selected)
            }}/>
        </div>
    );
}

export default FreeSingleAnswer;