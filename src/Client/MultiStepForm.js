import React,{useState} from "react";
import { useForm, useStep } from "react-hooks-helper";
import Step1  from "./step1";
import Step2  from "./step2";
import Step3  from "./step3";

import  Submit  from "./Submit";


const defaultData = {
  name: "",
  email: "",
  phone: "",
  compname: "",
  radio: "",
  checkbox: "",
  rad: "",
  sitename: "",
  brief: "",
  doc:"",
  yorn:"",
  agencyname:"",
  check:""
};

const steps = [
  { id: "step1" },
  { id: "step2" },
  { id: "step3" },
 
  { id: "submit" },
];




const MultiStepForm = () => {


  // check box (state)

  const [state, setState] = React.useState({
    Digital  : false ,
    Social  : false ,
     Website : false ,
     App : false ,
    Reviews: false ,
     Outdoor: false ,
      Content : false ,
      Other: false ,

  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });

    
  };

  //check box (state) step3
  const [state2, setState2] = React.useState({
    Lead  : false ,
    Pay  : false ,
    Reviews  : false ,
    Outdoor : false ,
    Website: false ,
    
     Social : false ,
     Content: false ,

  });

  const handle2Change = (event) => {
    setState2({ ...state2, [event.target.name]: event.target.checked });

    
  };


  // Radio buttons (State) step1

  const [value, setValue] = React.useState('female');
    
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  
  };

  // Radio buttons (State) step2

  const [value2, setValue2] = React.useState('');
    
  const handleRadio2Change = (event) => {
    setValue2(event.target.value);
  };

  // Radio buttons (State) step2

  const [value3, setValue3] = React.useState('Yes');
    
  const handleRadio3Change = (event) => {
    setValue3(event.target.value);
  };


  //Normal form
    const [formData, setForm] = useForm(defaultData);

      
    //State for multi step form navigation
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation,state,handleChange,state2,handle2Change,value,handleRadioChange,value2,handleRadio2Change,value3,handleRadio3Change};

  switch (step.id) {
    case "step1":
      return <Step1 {...props} />;
    case "step2":
      return <Step2 {...props} />;
    case "step3":
      return <Step3 {...props} />;
    
    case "submit":
      return <Submit {...props} />;
      default:
        (console.log('This is a multi-step form built with React.'))
  }
  
  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};

export default MultiStepForm;