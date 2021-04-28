import React from 'react'
import { Form } from 'react-bootstrap'




function step2(props) {
    return (
      <div className="wrapper1">
      <div className="form-wrapper1">
      <h3 className="font-weight-bold">Digitain hub-Client Registration</h3>

      <div className="client__name">
            <Form.Group>
                      <Form.Label>Your Website if any</Form.Label>
                      <Form.Control
                        type="text"
                        name="sitename"

                        value={props.formData.sitename}
                        onChange={props.setForm}
                        placeholder="Enter your Answer"
                        required
                      />
              </Form.Group>
     </div>

     <div className="client__name">
            <Form.Group>
                      <Form.Label>Please brief us on your requirements. This will help us to connect you with the right person and answer all your question in one go</Form.Label>
                      <Form.Control
                        type="text"
                        name="brief"

                        value={props.formData.brief}
                        onChange={props.setForm}
                        placeholder="Enter your Answer"
                        required
                      />
              </Form.Group>
     </div>
      <div className="">
            <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Which services do you require</Form.Label>
<Form.Check type="checkbox" 
 label="Digitial Marketing Agency" checked={props.state.Digital} onChange={props.handleChange} name="Digital" />
 <Form.Check type="checkbox" 
 label="Social Media Management" checked={props.state.Social} onChange={props.handleChange} name="Social" />
  <Form.Check type="checkbox" 
 label="Website / Product Development" checked={props.state.Website} onChange={props.handleChange} name="Website" />
  <Form.Check type="checkbox" 
 label="App Development" checked={props.state.App} onChange={props.handleChange} name="App" />
   <Form.Check type="checkbox" 
 label="Reviews and ratings (Google, App, Business, Food, Amazon)" checked={props.state.Reviews} onChange={props.handleChange} name="Reviews" />
 <Form.Check type="checkbox" 
 label="Outdoor Advertising (banners, billboards, OOH, Railway and Airports, Malls etc.)" checked={props.state.Outdoor} onChange={props.handleChange} name="Outdoor" />
 <Form.Check type="checkbox" 
 label="Content and Graphics" checked={props.state.Content} onChange={props.handleChange} name="Content" />
 <Form.Check type="checkbox" 
 label="Other:" checked={props.state.Other} onChange={props.handleChange} name="Other" />
   </Form.Group>
   {console.log(props.state)}

    </div>

    <Form.File 
    id="custom-file-translate-html"
    label="Share any document if you would like us to go through."
    data-browse="Add file"
    custom
  />
   

       <div className="radio">
            <Form.Group value={props.value3} onChange={props.handleRadio3Change} controlId="formBasicCheckbox">
            <Form.Label>Have you utilized the services from any other agency? *</Form.Label>
            <Form.Check type="radio" label="Yes" value="Yes" name="Creative" id="1" />
            <Form.Check type="radio" label="No" value="No" name="Creative" id="2" />
           
           </Form.Group>
           {console.log(props.value3)}
            </div>
      
            <div className="step2__button">
            <button type="submit" className="btn btn-custom btn-block"
            onClick={() => props.navigation.previous() }>Back</button>
            </div>
            <br />
            <div className="step2__button2">
            <button type="submit" className="btn btn-custom btn-block"
            onClick={() => props.navigation.next() }>Next</button>
            </div>
            
      </div>
        </div>
    )
}

export default step2


// import { makeStyles } from '@material-ui/core/styles';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Checkbox from '@material-ui/core/Checkbox';
// import { Jumbotron } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';







// {/* <div className="registration-page">
//         <div className="mt-5">
//           <Jumbotron className="jumbotron">

//           <Card style={{ width: '60rem', height: "" }}>
//             <div className="ard">
//               <Card.Img variant="bottom" src="https://lists.office.com/Images/9188040d-6c67-4c5b-b112-36a304b66dad/00000000-0000-0000-0003-7ffe1e6b4a66/T013PI7ZHDJ21S7A6AHM0W0RWH/28b58e5c-6c2a-4e33-8abc-26d4da53c61c" style={{ left: "-25px", top: "10px", height: "143px", width: "228px" }} />

//               <Card.Title><h2 className="text-dark">Digitian Hub -  Asia's first outsourcing marketplace
// </h2> </Card.Title>
//             </div>
//             <Card.Body >


//               <Card.Text>

//                 We are Asia’s first fully managed marketplace for agencies, providing support and
//                 services at all fronts from onboarding to client interaction.
// </Card.Text>

//             </Card.Body>
//             {/* <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>   */}
//           </Card>

//           <br />
//           <br />
//         <div className={useStyles.root}>


//       <FormControl component="fieldset" className={useStyles.formControl}>
//         <FormLabel component="legend">Which of the following best defines your role *</FormLabel>
//         <br />
//         <FormGroup>
//           <FormControlLabel
//             control={<Checkbox checked={props.state.Digital} onChange={props.handleChange} name="Digital" />}
//             label="Digital Advertising (FB Ads, Google Ads, LinkedIn Ads)"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={props.state.Social} onChange={props.handleChange} name="Social" />}
//             label="Social Media Management"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={props.state.Website} onChange={props.handleChange} name="Website" />}
//             label="Website / Product Development"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={props.state.App} onChange={props.handleChange} name="App" />}
//             label="App Development"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={props.state.Reviews} onChange={props.handleChange} name="Reviews" />}
//             label="Reviews and ratings (Google, App, Business, Food, Amazon)"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={props.state.Outdoor} onChange={props.handleChange} name="Outdoor" />}
//             label="Outdoor Advertising (banners, billboards, OOH, Railway and Airports, Malls etc.)"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={props.state.Content} onChange={props.handleChange} name="Content" />}
//             label="Content and Graphics"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={props.state.Other} onChange={props.handleChange} name="Other" />}
//             label="Other:"
//           />
//         {console.log(props.state)}
// </FormGroup>
        
//       </FormControl>
// </div>
// <br />
// <br />

// <div className={useStyles.root}>
//       <FormControl >
      
// <FormLabel >Your Monthly Budget *</FormLabel>
// <br />
// <RadioGroup value={props.value2} onChange={props.handleRadio2Change}>
//   <FormControlLabel value="₹5000 - ₹15,000" control={<Radio />} label="₹5000 - ₹15,000" />
//   <FormControlLabel value="₹15,000 - ₹25,000" control={<Radio />} label="₹15,000 - ₹25,000" />
//   <FormControlLabel value="₹25,000 - ₹50,000" control={<Radio />} label="₹25,000 - ₹50,000" />
//   <FormControlLabel value="50,000 to 100,000" control={<Radio />} label="50,000 to 100,000" />
//   <FormControlLabel value="100,000 and above" control={<Radio />} label="100,000 and above" />
//   {console.log(props.value2)}
// </RadioGroup>
// </FormControl>

// </div>

// <br />
// <br />

// <FormControl >
      
// <FormLabel >Have you utilized the services from any other agency? *</FormLabel>
// <br />
// <RadioGroup value={props.value3} onChange={props.handleRadio3Change}>
//   <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
//   <FormControlLabel value="No" control={<Radio />} label="No" />
  
//   {console.log(props.value3)}
// </RadioGroup>
// </FormControl>



  

//     </Jumbotron>

 
// </div> */}
