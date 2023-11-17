import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ReactDOM from "react-dom";
import MobileSwiper from "./MobileSwiper";
import { useMediaQuery } from "react-responsive";
import "./swiper.css"
function Swiper() {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

  const txt =
    "Welcome to the Swipe Game, your job is to match the keywords into the correct categories, you need to collect at least 3 points! You have 10 seconds to match each set. good luck!";
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const arr1 = [
    { id: "1", content: "Clint Eastwood", dest: 0 },
    { id: "2", content: "Jimi Hendrix", dest: 2 },
    { id: "3", content: "Jim Morrison", dest: 2 },
    { id: "4", content: "Will Smith", dest: 0 },
    { id: "5", content: "Brad Pitt", dest: 0 },
  ];
  const arr2 = [
    { id: "1", content: "Jimi Hendrix", dest: 2 },
    { id: "2", content: "Edward Norton", dest: 0 },
    { id: "3", content: "Bob Marley", dest: 2 },
    { id: "4", content: "James Gandolfini", dest: 0 },
    { id: "5", content: "Eric Clapton", dest: 2 },
  ];
  const arr3 = [
    { id: "1", content: "Al Pacino", dest: 0 },
    { id: "2", content: "Johny Depp", dest: 0 },
    { id: "3", content: "Carlos Santana", dest: 2 },
    { id: "4", content: "Andrew Garfield", dest: 0 },
    { id: "5", content: "Leonardo Di Caprio", dest: 0 },
  ];

  const arr4 = [
    { id: "1", content: "Kevin Spacey", dest: 0 },
    { id: "2", content: "Michael Jackson", dest: 2 },
    { id: "3", content: "Elton John", dest: 2 },
    { id: "4", content: "Kanye West", dest: 2 },
    { id: "5", content: "Eric Clapton", dest: 2 },
  ];
  const [totalPts, setTotalPts] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [arrays, setArrays] = useState([arr1, arr2, arr3, arr4]);
  const [questions, setQuestions] = useState(
    arrays[Math.floor(Math.random() * arrays.length)]
  );
  const [draw, setDraw] = useState(false);
  const [acArr, setAcArr] = useState(questions);

  // const shuffled = array.sort(() => 0.5 - Math.random());

  const [showTimer, setShowTimer] = useState(false);

  const [answered, setAnswered] = useState(null);
  const [result, setResult] = useState();
  const [intervalID, setInterID] = useState();
  const [countdown, setCountdown] = useState(null);
  const [stage, setStage] = useState(0);
  const [text, setText] = useState("");
  const [shouldClearInterval, setShouldClearInterval] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [columns, setColumns] = useState({
    [0]: {
      name: "Actors",
      items: [],
    },
    [1]: {
      name: "Render",
      items: questions,
    },
    [2]: {
      name: "Musicians",
      items: [],
    },
  });
  let node;

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      if (removed.dest == destination.droppableId) {
        destItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        });
        if (destination.droppableId == 0) {
          node = ReactDOM.findDOMNode(firstRef.current);
        } else {
          node = ReactDOM.findDOMNode(secondRef.current);
        }
        node.classList.add("animation");

        // animation
      } else {
        if (destination.droppableId == 0) {
          node = ReactDOM.findDOMNode(firstRef.current);
        } else {
          node = ReactDOM.findDOMNode(secondRef.current);
        }
        node.classList.add("animation-false");
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        copiedItems.splice(0, 1);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: copiedItems,
          },
        });
      }
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  // useEffetcs

  useEffect(() => {
    setAnswered(columns[0].items.length + columns[2].items.length);
    if (answered > 2) {
      console.log("true");
      setResult(true);
      // clearInterval(intervalID);
    } else {
      if (result === "end") return;
      setResult(false);
    }
    if (countdown === 0) {
      clearInterval(intervalID);
      setShowModal(true);
    } else {
      let intervalId = setInterval(
        () => setCountdown(() => countdown - 1),
        1000
      );
      setInterID(intervalId);
      clearInterval(intervalID);
    }
  }, [countdown]);
  console.log(totalPts);

  useEffect(() => {
    setAnswered(columns[0].items.length + columns[2].items.length);

    if (columns[1].items === undefined) {
      setShowResults(true);
      setResult("end");
      return;
    }

    if (columns[1].items.length === 0) {
      setShowTimer(true);
      setShowModal(true);
    }

    let nodeOne = ReactDOM.findDOMNode(firstRef.current);
    let nodeSec = ReactDOM.findDOMNode(secondRef.current);
    setTimeout(() => {
      //TODO fallback
      try{
        nodeOne.classList.remove("animation");
        nodeSec.classList.remove("animation");
        nodeOne.classList.remove("animation-false");
        nodeSec.classList.remove("animation-false");
      }catch (e){
          console.error(e)}
    }, 800);
  }, [columns]);

  useEffect(() => {
    if (stage === 1) {
      setCountdown(10);
    }
  }, [stage]);

  useEffect(() => {
    if (result && result !== "end") {
      setTotalPts((prev) => prev + 1);
    }
  }, [result]);

  useEffect(() => {
    setAnswered(columns[0].items.length + columns[2].items.length);
    if (arrays.length === 0) return;
    if (draw) {
      const nextArrays = arrays.filter((el) => {
        return el[0].content !== acArr[0].content;
      });
      setArrays(nextArrays);
      const next = nextArrays[Math.floor(Math.random() * nextArrays.length)];

      setAcArr(next);
      setColumns({
        [0]: {
          name: "Actors",
          items: [],
        },
        [1]: {
          name: "Render",
          items: next,
        },
        [2]: {
          name: "Musicians",
          items: [],
        },
      });
      setDraw(false);
    }
  }, [draw]);

  useEffect(() => {
    // declare function
    let speed = 100;
    let i = 0;

    function typeWriter() {
      if (i < txt.length) {
        setText((prev) => {
          if (prev === "") {
            return "W";
          }
          return prev + txt.charAt(i);
        });

        i++;
        setTimeout(typeWriter, speed);
      } else {
        setStage(1);
        setCountdown(10);
      }
    }
    typeWriter();
  }, []);

  const resultFunction = (result) => {
    if (showModal) {
      switch (result) {
        case true:
          return "container container-animation";
        case false:
          return "container container-animation-false";
        case "end":
          return "container container-animation";
        default:
          return "container";
      }
    } else {
      return "container";
    }
  };

  return (
    <div className={"flex f1"} style={{overflowX:"hidden", width:"100vw"}}>
      <div className={resultFunction(result)}>
        {showResults ? (
          <div className="flex-end">
            <h1>Game Over!</h1>
            <h1>All stages won: {totalPts}</h1>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="modal-btn end-btn"
            >
              Restart
            </button>
          </div>
        ) : (
          <>
            {stage === 0 ? (
              <>
                <button
                  onClick={() => {
                    setStage(1);
                  }}
                  className="skip-btn"
                >
                  Skip
                </button>

                <span className="timer intro">{text}</span>
              </>
            ) : (
              <div className="mobile-con">
                {showModal ? (
                  <div className="modal">
                    <div className="modal-con">
                      {result ? <h1>You Won!</h1> : <h1>Lose!</h1>}
                      <h1>Score: {answered}</h1>
                      <button
                        onClick={() => {
                          setAnswered(0);
                          setCountdown(10);
                          setShowModal(false);
                          if (result === "end") return;
                          setResult(false);
                          return setDraw(true);
                        }}
                        className="modal-btn btn"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : null}
                <span className={showTimer ? "timer" : "display-none timer"}>
                  {/* <span className={"timer"}> */}
                  Time:<p>{countdown}</p>
                  <p>Score: {answered}</p>
                </span>
                {isMobile ? (
                  <MobileSwiper
                    db={columns[1].items}
                    setColumns={setColumns}
                    clear={setShouldClearInterval}
                    questions={columns[1]}
                    setAnswered={setAnswered}
                    columns={columns}
                  />
                ) : (
                  <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
                    <div className="flex-wrapper">
                      <div className="q-bubble q-first" ref={firstRef}>
                        <Droppable droppableId={"0"}>
                          {(provided, snapshot) => {
                            return (
                              <div
                                className="big-bubble"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                                {provided.placeholder}
                              </div>
                            );
                          }}
                        </Droppable>
                        <span className="draggable-text droppable-text">
                          Actors
                        </span>
                      </div>

                      <Droppable droppableId={"1"}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              className="answer-bubble"
                              style={{
                                // paddingTop: "100px",
                                height: "10vw",
                                width: "10vw",
                              }}
                            >
                              {columns[1].items === undefined
                                ? null
                                : columns[1].items.map((item, index) => {
                                    if (index == 0)
                                      return (
                                        <Draggable
                                          key={item.id}
                                          draggableId={item.id}
                                          index={index}
                                        >
                                          {(provided, snapshot) => {
                                            return (
                                              <div
                                                className="bubble-animation"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                  borderRadius: "100%",
                                                  textAlign: "center",
                                                  userSelect: "none",
                                                  margin: "0 auto",
                                                  minHeight: "50px",
                                                  height: "10vw",
                                                  width: "10vw",
                                                  backgroundColor:
                                                    snapshot.isDragging
                                                      ? "#263B4A"
                                                      : "#456C86",
                                                  color: "white",
                                                  ...provided.draggableProps
                                                    .style,
                                                  position: "absolute",
                                                }}
                                              >
                                                <span className="draggable-text">
                                                  {item.content}
                                                </span>
                                              </div>
                                            );
                                          }}
                                        </Draggable>
                                      );
                                  })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>

                      <div className="q-bubble q-sec" ref={secondRef}>
                        <Droppable droppableId={"2"}>
                          {(provided, snapshot) => {
                            return (
                              <div
                                className="big-bubble"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                                {provided.placeholder}
                              </div>
                            );
                          }}
                        </Droppable>
                        <span className="draggable-text droppable-text">
                          Musicians
                        </span>
                      </div>
                    </div>
                  </DragDropContext>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Swiper;
