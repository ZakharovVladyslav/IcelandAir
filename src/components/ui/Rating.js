import {useCallback} from "react";
import {motion} from "framer-motion";

export default function Rating({total = 5, rate, setRate}) {
    const handleClick = useCallback(
        (ind) => () => {
            setRate(total - ind);
        },
        [setRate, total],
    );

    return (
        <div
            style={{
                display: "flex",
                marginBottom: "3rem",
                flexDirection: "row-reverse",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {Array(total)
                .fill(null)
                .map((_, ind) => (
                    <motion.button
                        className={"star"}
                        key={ind}
                        onClick={handleClick(ind)}
                        whileTap={{
                            scale: 1.5,
                            transition: {duration: 0.1, ease: 'easeInOut'}
                        }}
                    >
                        <StarIcon
                            style={{height:"35px",color:total - ind <= rate?"#007bff":"lightgray"}}
                        />
                    </motion.button>
                ))}
        </div>
    );
}
export const StarIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 55.682 52.312"
            {...props}
        >
            <g transform="translate(0.355 0.366)" fill="none" strokeMiterlimit="10">
                <path
                    d="M37.392,31.734,53.42,20.216H33.608L27.486,1.6l-6.12,18.615H1.553L17.58,31.734,11.458,50.348,27.486,38.831,43.513,50.348Z"
                    stroke="none"
                />
                <path
                    d="M 43.5134391784668 50.34759521484375 L 37.39197158813477 31.73378372192383 L 53.41980361938477 20.21562767028809 L 33.60828018188477 20.21562767028809 L 27.48559379577637 1.600605487823486 L 21.36536026000977 20.21562767028809 L 1.552604198455811 20.21562767028809 L 17.58043670654297 31.73378372192383 L 11.45774841308594 50.34759521484375 L 27.48559379577637 38.83066177368164 L 43.5134391784668 50.34759521484375 M 7.639859676361084 55.55376052856445 L 15.22232246398926 32.50203323364258 L -4.657607078552246 18.21562767028809 L 19.9175968170166 18.21562767028809 L 27.48521614074707 -4.80168342590332 L 35.05585861206055 18.21562767028809 L 59.6300163269043 18.21562767028809 L 39.75001907348633 32.50208282470703 L 47.33082580566406 55.55339431762695 L 27.48559379577637 41.2934455871582 L 7.639859676361084 55.55376052856445 Z"
                    stroke="none"
                    className="fill-divider"
                />
            </g>
            <path
                d="M26.48,35.651l-12.7,9.129,4.852-14.751L5.954,20.92H21.62L26.48,6.138,31.342,20.92H47.008L34.334,30.028l4.851,14.751Z"
                transform="translate(1.36 1.402)"
                fill="currentColor"
            />
        </svg>
    );
}