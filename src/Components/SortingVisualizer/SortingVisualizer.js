import React, { useState, useEffect } from "react";
import Bar from "./../Bar/Bar";

import "./SortingVisualizer.css";
import { generateElementsArr } from "./../../utils";
import { bubbleSort } from "./../../Algorithms/BubbleSort/BubbleSort";
import { insertionSort } from "./../../Algorithms/InsertionSort/InsertionSort";
import { selectionSort } from "./../../Algorithms/SelectionSort/SelectionSort";
import { mergeSort } from "./../../Algorithms/MergeSort/MergeSort";
//@ts-ignore
import { quickSort } from "./../../Algorithms/QuickSort/QuickSort";

const SortingVisualizer = () => {
  const [elements, setElements] = useState([]);
  const [numberOfElements, setNumberOfElements] = useState(120);
  const [speed, setSpeed] = useState(3);

  useEffect(() => {
    setElements(generateElementsArr(numberOfElements));
  }, []);

  const handleRangeSliderChange = (eventName) => (event) => {
    if (eventName === "speed") {
      setSpeed(event.target.value);
    } else {
    }
  };

  const visualiseBubbleSort = () => {
    const animations = bubbleSort(elements);
    for (let i = 0; i < animations.length; i++) {
      const barsArray = document.getElementsByClassName("bar");
      const [b1, b2, isSwapped, b1newHeight, b2newHeight] = animations[i];
      const b1Style = barsArray[b1].style;
      const b2Style = barsArray[b2].style;
      if (isSwapped) {
        setTimeout(() => {
          b1Style.height = `${b1newHeight}%`;
          b2Style.height = `${b2newHeight}%`;
        }, i * (5 - speed));
      } else {
        setTimeout(() => {
          //
        }, i * (5 - speed));
      }
    }
  };

  const visualiseInsertionSort = () => {
    const animations = insertionSort(elements);
    for (let i = 0; i < animations.length; i++) {
      const barsArray = document.getElementsByClassName("bar");
      const [b1, b2, b1newHeight, b2newHeight] = animations[i];
      const b1Style = barsArray[b1].style;
      const b2Style = barsArray[b2].style;
      setTimeout(() => {
        b1Style.height = `${b1newHeight}%`;
        b2Style.height = `${b2newHeight}%`;
      }, i * (5 - speed));
    }
  };

  const visualiseSelectionSort = () => {
    const animations = selectionSort(elements);
    for (let i = 0; i < animations.length; i++) {
      const barsArray = document.getElementsByClassName("bar");
      const [b1, b2, isSwapped, b1newHeight, b2newHeight] = animations[i];
      const b1Style = barsArray[b1].style;
      const b2Style = barsArray[b2].style;
      if (isSwapped) {
        setTimeout(() => {
          b1Style.height = `${b1newHeight}%`;
          b2Style.height = `${b2newHeight}%`;
        }, i * (5 - speed));
      } else {
        setTimeout(() => {
          //
        }, i * (5 - speed));
      }
    }
  };

  const visualiseMergeSort = () => {
    const animations = mergeSort(elements); // Use the mergeSort function
    for (let i = 0; i < animations.length; i++) {
      const barsArray = document.getElementsByClassName("bar");
      const [b1, newHeight] = animations[i];
      const b1Style = barsArray[b1].style;
      setTimeout(() => {
        b1Style.height = `${newHeight}%`;
      }, i * (5 - speed));
    }
  };

  const visualiseQuickSort = () => {
    const animations = quickSort(elements); // Use the quickSort function
    for (let i = 0; i < animations.length; i++) {
      const barsArray = document.getElementsByClassName("bar");
      const [b1, b2, b1newHeight, b2newHeight] = animations[i];
      const b1Style = barsArray[b1].style;
      const b2Style = barsArray[b2].style;
      setTimeout(() => {
        b1Style.height = `${b1newHeight}%`;
        b2Style.height = `${b2newHeight}%`;
      }, i * (5 - speed));
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="title-and-input">
          <h1 className="nav-title">Sorting Algorithms Visualizer</h1>
          <div className="marginleft" />
          <label className="input-label">Number of Elements</label>
          <input
            className="input-slider"
            onChange={(event) => {
              setNumberOfElements(event.target.value);
              setElements(generateElementsArr(numberOfElements));
            }}
            type="range"
            min="20"
            max="150"
            value={numberOfElements}
          />
          <label className="input-label">Speed</label>
          <input
            className="input-slider"
            onChange={(event) => setSpeed(event.target.value)}
            type="range"
            min="1"
            max="5"
            value={speed}
          />
          <button
            className="nav-button"
            onClick={() => setElements(generateElementsArr(numberOfElements))}
          >
            Generate New Array
          </button>
        </div>
        <div className="button-group">
          <button className="btn" onClick={() => visualiseBubbleSort()}>
            Bubble Sort
          </button>
          <button className="btn" onClick={() => visualiseInsertionSort()}>
            Insertion Sort
          </button>

          <button className="btn" onClick={() => visualiseSelectionSort()}>
            Selection Sort
          </button>

          <button className="btn" onClick={() => visualiseMergeSort()}>
            Merge Sort
          </button>

          <button className="btn" onClick={() => visualiseQuickSort()}>
            Quick Sort
          </button>
        </div>
      </nav>
      <div className="wrapper">
        {elements.map((element, idx) => (
          <Bar numberOfElements={numberOfElements} size={element} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
