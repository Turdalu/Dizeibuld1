import React, { useEffect, useReducer } from 'react'
import { styled } from 'styled-components';

const inputReducer =(state,action)=>{
    console.log(action);

    if(action.type === "EMAIL"){
        return{
            ...state,
            email:action.value,
            isValidEmail:action.value.includes("@")
        }
    }
    if(action.type ==="NAME"){
        return{
            ...state,
            name:action.value,
            isValidName:action.value.length > 5,

        }
    }
    if(action.type === "BUTTON"){
        console.log(234567890);
        return{
            ...state,
            dtnDis:false
        }
    }
    if(action.type === "BUTTON2"){
        console.log(234567890);
        return{
            ...state,
            dtnDis:true
        }
    }

    return state


}

const Form = () => {
    const [input,dispatchInput] = useReducer(inputReducer,{
        email: "",
        name: "",
        isValidEmail: null,
        isValidName: null,
        dtnDis: true

    })
    console.log(input);

    const blurHandler = (e) =>{
        dispatchInput({type: "EMAIL", value: e.target.value})
    }

    const blurHandler2 = (e) =>{
        // e.prevenentDefault()
        dispatchInput({type: "NAME", value: e.target.value})
    }

    useEffect (()=>{
        // console.log(USE);
        console.log(input.isValidEmail && input.isValidName);

        if(input.isValidEmail && input.isValidName){
            dispatchInput({type: "BUTTON"})
        }else{
            dispatchInput({type: "BUTTOM2"})
        }
    },[input.email,input.name])


  return (
    <FormStyle>
        <InputStyle style={{border: input.isValidEmail === false ? "3px solid red" : "2px solid black"}} 
        type="text" placeholder='email' onChange={blurHandler} />

        <InputStyle style={{border: input.isValidName===false ? "3px solid red" : "2px solid black"}}
         type="text" placeholder='name' onChange={blurHandler2} />

        <ButStyle disabled={input.dtnDis}>ADD</ButStyle>

    </FormStyle>
  )
}

export default Form

const InputStyle = styled.input`
    width: 240px;
    height: 40px;
    font-size: 23px;
    border-radius:8px;
`

const ButStyle = styled.button`
    width: 100px;
    height: 40px;
    border-radius:8px;
    font-size:20px;
    border:2px solid red;

`
const FormStyle = styled.div`
    border: 2px solid red;
    width: 400px;
    height: 200px;
    display:flex;
    align-items: center;
    flex-direction:column;
    justify-content:space-around;
    background-color:blue;
    margin:auto;
    border-radius:8px;

`