import { useState } from 'react'
import './App.css'
import Controls from './Components/Controls'
import { sortArray } from "./api";
import Visualizer from './Components/Visualizer'
import Title from './Components/title'
import Footer from "./Components/Footer"
import { synth } from "./synth"

function App() {
  const [array, setArray] = useState([]);
  const [isSorting, setSorting] = useState(false);
  const [isSorted, setSorted] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubble_sort");

  const playSound = (value) => {
    if (value == null) {
      return;
    }

    const frequency = value + 1000;
    synth.triggerAttackRelease(frequency, "8n");
};

  const generateRandomArray = (size) => {
    if (size > 500 || size < 1){
      alert("Choose a valid size");
      return;
    }

    setSorted(false);
    const randomArray = Array.from({ length: size }, () => Math.floor(Math.random() * 450 + 5));
    setArray(randomArray);
  }

  const handleAlgorithm = (alg) => {
    setAlgorithm(alg);
  }

  const handleSort = async () => {
    setSorting(true);
    setSorted(false);

    const data = await sortArray(algorithm, array);

    let i = 0;
    const interval = setInterval(() => {
    if (i < data.steps.length){
      const step = data.steps[i];

      if (step["type"] == "compare"){
        i++;
      } else if (step["type"] == "swap"){
        setArray(step["new_array"]);

        const indicies = step["indicies"];
        playSound(array[indicies[0]]);
        playSound(array[indicies[1]]);

        i++;
      }
    } else {
      setSorted(true);
      setSorting(false);
      clearInterval(interval);
    }
  }, 5);
  }

  return (
    <>
      <div>
        <Title></Title>
        <Controls onGenerateArray={generateRandomArray} onHandleSort={handleSort} onHandleAlgorithm={handleAlgorithm} isSorting={isSorting} isSorted={isSorted}></Controls>
        <Visualizer array={array} sorted={isSorted}></Visualizer>
        <br></br>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
