import React, {useEffect, useState} from 'react';
import LargeButton from "../Button/LargeButton";
import CustomButton from "../Button/Button";

function SingleAnswer(props) {
    const [disabledAnswers, setDisabledAnswers] = useState([])
    const [selected, setSelected] = useState({index: -1, isCorrect: false})

    useEffect(()=>{
        console.log(disabledAnswers)
    },[])
    function processAnswer() {
        if(selected.isCorrect)
            return props.success();
        else {
            setDisabledAnswers([...disabledAnswers,selected.index])
            setSelected({index: -1, isCorrect: false})
        }
    }

    return (
        <div className={"flex f1"}>
            {props.items.map((item, index) =>
                <LargeButton
                    key={index}
                    text={item.text}
                    onClick={() => setSelected({
                        index: index,
                        isCorrect: item.isCorrect
                    })}
                    disabled={!!disabledAnswers.includes(index)}
                    style={
                        selected.index === index ?
                            {backgroundColor: "var(--color-1)", color:"white"}
                            : {}
                    }
                />
            )}
            <CustomButton text={"Submit"} onClick={()=>processAnswer()}/>
        </div>
    );
}

export default SingleAnswer;