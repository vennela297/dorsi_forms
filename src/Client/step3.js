import React from 'react'
import {
    Container,
    Card,
    Row,
    Col,
    Form,
  
    
  } from "react-bootstrap";

function step3(props) {
    return (
        <div className="wrapper1">
        <div className="form-wrapper1">
        <h3 className="font-weight-bold">Digitain hub-Client Registration</h3>

        
        <div className="radio">
            <Form.Group value={props.value2} onChange={props.handleRadio2Change} controlId="formBasicCheckbox">
            <Form.Label>Your Monthly Budget *</Form.Label>
            <Form.Check type="radio" label="₹5000 - ₹15,000" value="₹5000 - ₹15,000" name="Creative" id="1" />
            <Form.Check type="radio" label="₹15,000 - ₹25,000" value="₹15,000 - ₹25,000" name="Creative" id="2" />
            <Form.Check type="radio" label="₹25,000 - ₹50,000" value="₹25,000 - ₹50,000" name="Creative" id="3" />
            <Form.Check type="radio" label="50,000 to 100,000" value="50,000 to 100,000" name="Creative" id="3" />
            <Form.Check type="radio" label="100,000 and above" value="100,000 and above" name="Creative" id="3" />
           </Form.Group>
           {console.log(props.value2)}
            </div>

            <div className="client__name">
            <Form.Group>
                      <Form.Label>Name of Agency you are currently working with or worked in the past. *</Form.Label>
                      <Form.Control
                        type="text"
                        name="agencyname"

                        value={props.formData.agencyname}
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
 label="Lead Generation" checked={props.state2.Lead} onChange={props.handle2Change} name="Lead" />
 <Form.Check type="checkbox" 
 label="Pay Per Click (Google Ads)" checked={props.state2.Pay} onChange={props.handle2Change} name="Pay" />
  <Form.Check type="checkbox" 
 label="Reviews and Ratings" checked={props.state2.Reviews} onChange={props.handle2Change} name="Reviews" />
  <Form.Check type="checkbox" 
 label="Outdoor Advertisisng" checked={props.state2.Outdoor} onChange={props.handle2Change} name="Outdoor" />
   <Form.Check type="checkbox" 
 label="Website / Product development" checked={props.state2.Website} onChange={props.handle2Change} name="Website" />
 <Form.Check type="checkbox" 
 label="Social Media Management" checked={props.state2.Social} onChange={props.handle2Change} name="Social" />
 
 <Form.Check type="checkbox" 
 label="Content and Graphics" checked={props.state2.Content} onChange={props.handle2Change} name="Content" />
   </Form.Group>
   {console.log(props.state2)}

    </div>

    <div className="step3__button">
            <button type="submit" className="btn btn-custom btn-block"
            onClick={() => props.navigation.previous() }>Back</button>
            </div>
            <br />
            <div className="step3__button2">
            <button type="submit" className="btn btn-custom btn-block"
            onClick={() => props.navigation.next() }>Submit</button>
            </div>
  </div>
  </div>
    )
}

export default step3
