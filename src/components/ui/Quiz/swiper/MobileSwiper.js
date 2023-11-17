import React, { useState } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";

function MobileSwiper({
  db,
  setColumns,
  clear,
  questions,
  setAnswered,
  columns,
}) {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();
  const swiped = (direction, nameToDelete) => {
    if (direction === "up" || direction === "down") {
      return;
    }
    const char = characters.find((el) => el.content === nameToDelete);
    if (direction === "left") {
      if (char.dest === 0) {
        setLastDirection("Correct!");
        setColumns((prev) => {
          return {
            ...prev,
            [0]: {
              ...prev[0],
              items: [...prev[0].items, char],
            },
            [1]: {
              ...prev[1],
              items: [...prev[1].items.filter((item) => item.id !== char.id)],
            },
          };
        });
        //setAnswered(columns[0].items.length + columns[2].items.length);
      } else {
        setLastDirection("Wrong!");
        setColumns((prev) => {
          return {
            ...prev,
            [1]: {
              ...prev[1],
              items: [...prev[1].items.filter((item) => item.id !== char.id)],
            },
          };
        });
        //setAnswered(columns[0].items.length + columns[2].items.length);
      }
    } else {
      if (char.dest === 2) {
        setLastDirection("Correct!");

        setColumns((prev) => {
          return {
            ...prev,
            [1]: {
              ...prev[1],
              items: [...prev[1].items.filter((item) => item.id !== char.id)],
            },
            [2]: {
              ...prev[2],
              items: [...prev[2].items, char],
            },
          };
        });
        //setAnswered(columns[0].items.length + columns[2].items.length);
      } else {
        setColumns((prev) => {
          return {
            ...prev,
            [1]: {
              ...prev[1],
              items: [...prev[1].items.filter((item) => item.id !== char.id)],
            },
          };
        });
        setLastDirection("Wrong!");
        //setAnswered(columns[0].items.length + columns[2].items.length);
      }
    }
  };

  const outOfFrame = (id) => {
    if (id === "1") {
      clear(true);
    }
  };

  return (
    <div className="mobile-con">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h3>Swipe left for Actors, right for Musicians!</h3>

      <div className="cardContainer">
        {characters
          ? characters.map((character, index) => {
              return (
                <TinderCard
                  swipeThreshold={10}
                  className="swipe"
                  key={character.id}
                  onSwipe={(dir) => {
                    setTimeout(
                      () => swiped(dir, character.content, index),
                      500
                    );
                  }}
                  preventSwipe={["up", "down"]}
                  onCardLeftScreen={() => outOfFrame(character.id)}
                >
                  <div className="card">
                    <h3>{character.content}</h3>
                  </div>
                </TinderCard>
              );
            })
          : null}
      </div>
      {lastDirection ? (
        <h2 className="infoText">{lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default MobileSwiper;
