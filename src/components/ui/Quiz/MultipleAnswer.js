import React, {useEffect, useState} from 'react';
import LargeButton from "../Button/LargeButton";
import CustomButton from "../Button/Button";

function MultipleAnswer(props) {
    const [disabledAnswers, setDisabledAnswers] = useState([])
    const [selected, setSelected] = useState([])

    function processAnswer() {
        console.log(1)
        if (!selected.some(e => !e.isCorrect)) {
            if (props.items.filter(e => e.isCorrect).length === selected.length)
                return props.success();
        } else {
            const newErrors = selected.filter(e => !e.isCorrect).map(e => e.index)

            console.log(newErrors)
            setDisabledAnswers([...disabledAnswers, ...newErrors])
            setSelected(selected.filter(e => !newErrors.includes(e.index)))
        }
    }

    return (
        <div className={"flex f1"}>
            {props.items.map((item, index) =>
                <LargeButton
                    key={index}
                    text={item.text}
                    onClick={() => {
                        if (selected.some(e => e.index === index))
                            setSelected(selected.filter(e => e.index !== index))
                        else
                            setSelected([...selected, {
                                index: index,
                                isCorrect: item.isCorrect
                            }])
                    }}
                    disabled={!!disabledAnswers.includes(index)}
                    style={
                        selected.some(e => e.index === index) ?
                            {backgroundColor: "var(--color-1)", color: "white"}
                            : {}
                    }
                />
            )}
            <CustomButton text={"Submit"} onClick={() => processAnswer()}/>
        </div>
    );
}

export default MultipleAnswer;