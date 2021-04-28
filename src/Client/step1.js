import React from 'react'
import {
  Container,
  Card,
  Row,
  Col,
  Form,

  
} from "react-bootstrap";
import "./Step1.css"

function step1(props) {
  return (

<div className="">
        <div className="form-wrapper1">
        <h3 className="font-weight-bold">Digitain hub-Client Registration</h3>
         
        <Form >
            <div className="client__name">
            <Form.Group>
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"

                        value={props.formData.name}
                        onChange={props.setForm}
                        placeholder="Enter your Answer"
                        required
                      />
                      
              </Form.Group>
              
            </div>

            
                      
            <div className="client__email">
            <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email" 
                //        value={newUser.email}
                // onChange={handleOnChange}
                value={props.formData.email}
                        onChange={props.setForm}
                 />  
                
                     
                    </Form.Group>
            </div>
            <div className="client__phone">
            <Form.Group>
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        type="number"
                        name="phone"
                        value={props.formData.phone}
                        onChange={props.setForm}
                        placeholder="The value must be a number"
                        required
                      />
                    </Form.Group>
              
            </div>
            <div className="client__comp">
            <Form.Group>
                      <Form.Label>Company / Business Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="compname"

                        value={props.formData.compname}
                        onChange={props.setForm}
                        placeholder="Enter your Answer"
                        required
                      />
                      {console.log(props.formData)}
              </Form.Group>
              
            </div>

            <div className="radio">
            <Form.Group value={props.value} onChange={props.handleRadioChange} controlId="formBasicCheckbox">
            <Form.Label>Which of the following best defines your organization</Form.Label>
            <Form.Check type="radio" label="CEO/Director/COO" value="CEO/Director/COO" name="Creative" id="1" />
            <Form.Check type="radio" label="Upper Management" value="Upper Management" name="Creative" id="2" />
            <Form.Check type="radio" label="Manager" value="Manager" name="Creative" id="3" />
            <Form.Check type="radio" label="Executive" value="Executive" name="Creative" id="3" />
            <Form.Check type="radio" label="Other" value="Other" name="Creative" id="3" />
           </Form.Group>
           {console.log(props.value)}
           
            
            </div>

            <div className="client__button">
            <button type="submit" className="btn btn-custom btn-block"
            onClick={() => props.navigation.next() }>Next</button>
            </div>
</Form>


          </div>
        </div>
   




    

  )
}

export default step1


 // const error = [props.state.gilad, jason, antoine].filter((v) => v).length !== 2;
{/* <div className="registration-page">
      <div className="mt-5">
        <Jumbotron className="jumbotron">

          <Card style={{ width: '60rem', height: "" }}>
            <div className="ard">
              <Card.Img variant="bottom" src="https://lists.office.com/Images/9188040d-6c67-4c5b-b112-36a304b66dad/00000000-0000-0000-0003-7ffe1e6b4a66/T013PI7ZHDJ21S7A6AHM0W0RWH/28b58e5c-6c2a-4e33-8abc-26d4da53c61c" style={{ left: "-25px", top: "10px", height: "143px", width: "228px" }} />

              <Card.Title><h2 className="text-dark">Digitian Hub -  Asia's first outsourcing marketplace
</h2> </Card.Title>
            </div>
            <Card.Body >


              <Card.Text>

                We are Asia’s first fully managed marketplace for agencies, providing support and
                services at all fronts from onboarding to client interaction.
</Card.Text>

            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>   */}
          // </Card>


    //       <TextField
    //         label="First Name"
    //         name="name"

    //         margin="normal"
    //         variant="outlined"
    //         autoComplete="off"
    //         fullWidth
    //       />

    //       <br />
    //       <TextField
    //         label="Your Email ID *"
    //         name="email"
            
    //         margin="normal"
    //         variant="outlined"
    //         autoComplete="off"
    //         fullWidth
    //       />

    //       <TextField
    //         label="Your Phone Number"
    //         name="phone"

    //         margin="normal"
    //         variant="outlined"
    //         autoComplete="off"
    //         fullWidth
    //       />

    //       <TextField
    //         label="Company Name"
    //         name="compname"
             
    //         margin="normal"
    //         variant="outlined"
    //         autoComplete="off"
    //         fullWidth
    //       />

    //       <FormControl >

    //         <FormLabel >Your role *</FormLabel>

    //         <RadioGroup value={props.value} onChange={props.handleRadioChange}>
    //           <FormControlLabel value="CEO/Director/COO" control={<Radio />} label="CEO/Director/COO" />
    //           <FormControlLabel value="Upper Management" control={<Radio />} label="Upper Management" />
    //           <FormControlLabel value="Manager" control={<Radio />} label="Manager" />
    //           <FormControlLabel value="Executive" control={<Radio />} label="Executive" />
    //           <FormControlLabel value="other" control={<Radio />} label="Other" />
    //           {console.log(props.value)}
    //         </RadioGroup>
    //       </FormControl>
    //       <Button
    //         variant="contained"
    //         fullWidth
    //         color="primary"
    //         style={{ marginTop: "1rem" }}
    //         onClick={() => props.navigation.next()}
    //       >
    //         Next
    //   </Button>


    //     </Jumbotron>


    //   </div>

    // </div> */}

//     import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { Card } from "react-bootstrap";
// import { Jumbotron } from "react-bootstrap";

// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';