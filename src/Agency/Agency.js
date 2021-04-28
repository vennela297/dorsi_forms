import React, {useState} from 'react'
import "./Agency.css"
import {
  Container,
  Card,
  Row,
  Col,
  Form,

  
} from "react-bootstrap";






const initialState = {
  name: "",
  org: "",
  role: "",
  email: "",
  phone: "",
  address: "",
  gst:"",
  bankdetails:""
    };

    
    


function Agency() {

  const [newUser, setNewUser] = useState(initialState);

  //check box state

   const [state, setState] = React.useState({
     Digital : false ,
     Creative : false ,
      Media: false ,
    Print : false ,
    PR: false ,
    HR : false ,
  Other  : false ,
    
   })

  

 


   const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
      
      
  };

   
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
  
  }


    return (
        
           <div className="wrapper">
        <div className="form-wrapper">
        <h3 className="font-weight-bold">Digitain hub-Agency Registration</h3>
          <Container>
          <Form onSubmit={handleOnSubmit}>
            <div className="firstName">
            <Form.Group>
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"

                        value={newUser.name}
                        onChange={handleOnChange}
                        placeholder="Enter your Answer"
                        required
                      />
              </Form.Group>
              
            </div>
            <div className="lastName">
            <Form.Group>
                      <Form.Label>Name of Organization</Form.Label>
                      <Form.Control
                        type="text"
                        name="org"
                        value={newUser.org}
                onChange={handleOnChange}
                        
                        placeholder="Enter your Answer"
                        required
                      />
                    </Form.Group>

            </div>
            <div className="email">
            <Form.Group>
                      <Form.Label>Your role in the organization</Form.Label>
                      <Form.Control
                        type="text"
                        name="role"
                        value={newUser.role}
                onChange={handleOnChange}
                        
                        placeholder="Enter your Answer"
                        required
                      />
                    </Form.Group>

              
            </div>
            <div className="password">
            <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email" 
                       value={newUser.email}
                onChange={handleOnChange} />  
                
                     
                    </Form.Group>

              
            </div>


            <div className="firstName">
            <Form.Group>
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        type="number"
                        name="phone"
                        value={newUser.phone}
                        onChange={handleOnChange}
                        placeholder="The value must be a number"
                        required
                      />
                    </Form.Group>
              
            </div>
            <div className="lastName">
            <Form.Group>
                      <Form.Label>GST Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="gst"
                         value={newUser.gst}
                       onChange={handleOnChange}
                        placeholder="Enter your Answer"
                        required
                      />
                    </Form.Group>

            </div>
            <div className="firstName">
            <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Which of the following best defines your organization</Form.Label>
<Form.Check type="checkbox" 
 label="Digitial Marketing Agency" checked={state.Digital} onChange={handleChange} name="Digital" />
<Form.Check type="checkbox" label="Creative Agency" checked={state.Creative} onChange={handleChange} name="Creative"  />
<Form.Check type="checkbox" label="Media Buying Agency" checked={state.Media} onChange={handleChange} name="Media"  />
<Form.Check type="checkbox" label="Print Media Agency" checked={state.Print} onChange={handleChange} name="Print"  />
<Form.Check type="checkbox" label="PR agency" checked={state.PR} onChange={handleChange} name="PR"  />
<Form.Check type="checkbox" label="HR consultants" checked={state.HR} onChange={handleChange} name="HR"  />
<Form.Check type="checkbox" label="Other Services like CA, Management, Law, Manpower, etc" checked={state.Other} onChange={handleChange} name="Other" />
</Form.Group>
{console.log(state)}


</div>


<div className="lastName">
            <Form.Group>
                      <Form.Label>Name of Organization</Form.Label>
                      <Form.Control
                        type="text"
                        name="org"
                        value={newUser.org}
                onChange={handleOnChange}
                        
                        placeholder="Enter your Answer"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Bank Detials (Only share your current account detials)</Form.Label>

                      <Form.Control as="textarea" rows={3} name="bankdetails"  />
                    </Form.Group>
                   

                    
                    </div>
          
                     
                    <div className="submit">
                    <button type="submit" className="btn btn-custom btn-block">Submit</button>
                    </div>
            
            
            
          </Form>
          </Container>
        </div>
        
      </div>  
      
    )
}

export default Agency
