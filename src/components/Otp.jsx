import React, { useEffect, useState } from "react";
import "./otp.css";
const Otp = ({ size = 6 }) => {
  const [inputValues, setInputValues] = useState(() => {
    return new Array(size).fill("");
  });

  const focusNext = (currentInput) => {
    console.log("Current", currentInput);
    currentInput?.nextElementSibling?.focus();
  };

  const focusNextToNext  = (currentInput) => {
    if(currentInput?.nextElementSibling?.nextElementSibling){
        currentInput.nextElementSibling.nextElementSibling.focus()
    }else{
        focusNext(currentInput)
    }
  }
  const focusPrevious = (currentInput) => {
    if(currentInput?.previousElementSibling){
        currentInput.previousElementSibling.focus()
    }
  }

  const handleArrows = (event)=> {
    if(event.key==="ArrowRight"){
        focusNext(event.target)
    }else if(event.key==="ArrowLeft"){
        focusPrevious(event.target)
    }
  }

  const handleBackSpace = (event) => {
    if(event.key ==="Backspace"){
        const inputIndex  = Number(event.target.id)
        setInputValues(prev=>{
            const newValues = [...prev]
            newValues[inputIndex] = ""
            return newValues
        })
        focusPrevious(event.target)
    }

  }

  const handleNumericInput = (event) => {
    const inputValue = Number(event.key);
    const inputIndex = Number(event.target.id);
    console.log(inputValue, inputIndex);
    if (isNaN(inputValue)) return;
    if (inputValues[inputIndex].length === 0) {
      setInputValues((prev) => {
        const newValues = [...prev];
        newValues[inputIndex] = inputValue;
        return newValues;
      });
      focusNext(event.target);
    } else {
        const cursorIndex = event.target.selectionStart;
        console.log("cursor",cursorIndex)
        if(cursorIndex===0 && inputIndex+1<size){
            setInputValues((prev)=>{
                const newValues = [...prev]
                if(inputIndex <size-1){
                    const temp = newValues[inputIndex]
                    newValues[inputIndex] = inputValue
                    newValues[inputIndex+1]=temp
                    return newValues
                }
            })
        }else if(cursorIndex ===1 && inputIndex+1<size){
            setInputValues((prev)=>{
                const newValues = [...prev]
                if(inputIndex<size-1){
                    newValues[inputIndex+1] = inputValue
                    newValues[inputIndex] = prev[inputIndex]
                    return newValues
                }
            })
        }
        focusNextToNext(event.target)

    }
  };
  const onKeyUp = (event) => {
    handleNumericInput(event);
    handleBackSpace(event)
    handleArrows(event)
  };

  useEffect(()=>{
    let isValid = true;
    inputValues.forEach((inputval)=>{
        if(inputval.length==0){
            isValid=false
        }
    })
    isValid && console.log("otp submitted")
  },[inputValues])
  return (
    <div className="container">
      <div className="otp-block">
        {inputValues.map((box, index) => {
          return (
            <input
              onKeyUp={onKeyUp}
              id={index.toString()}
              key={index.toString()}
              value={box}
              maxLength={1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Otp;
