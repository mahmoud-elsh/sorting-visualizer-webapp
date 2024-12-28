import React from "react";
import { useState } from 'react'
import "../styles/Controls.css"

function Controls({onGenerateArray, onHandleSort, onHandleAlgorithm, isSorting, isSorted}){
    const [size, setSize] = useState("");

    const changeSize = (e) => {
        setSize(e.target.value);
    }

    const handleClick = () => {
        onGenerateArray(size);
    }

    const changeAlgorithm = (algo) => {
        onHandleAlgorithm(algo.target.value);
    }

    return(
        <div>
            <button onClick={handleClick} disabled = {isSorting}>
                Generate Random Array
            </button>
            <label>Size: </label>
            <input type = "number" size="5" value = {size} onChange = {changeSize}></input>
            <div>
                <small>
                    *Choose a size less than or equal to 500
                </small>
            </div>
            <hr></hr>
            
            <button onClick={onHandleSort} disabled = {isSorting || isSorted}>
                Sort Array
            </button>
            <span class="dropdown">
                <button>
                    Algorithms
                </button>
                <div class="content">
                    <button onClick={changeAlgorithm} value="bubble_sort">
                        Bubble Sort
                    </button>
                    <button onClick={changeAlgorithm} value="quick_sort">
                        Quick Sort
                    </button>
                    <button onClick={changeAlgorithm} value="merge_sort">
                        Merge Sort
                    </button>
                </div>
            </span>
        </div>
    );
}

export default Controls