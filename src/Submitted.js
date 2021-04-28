import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import "./AgencyRegistration.css";
function Submitted() {
    return (
        <div>

        <div className="registration-page">
         <div className="mt-5">
        <Jumbotron className="form-box">
             <Card style={{ width: '45rem', height: "" }}>
               <div className="ard">
              <Card.Img variant="bottom" src="https://lists.office.com/Images/9188040d-6c67-4c5b-b112-36a304b66dad/00000000-0000-0000-0003-7ffe1e6b4a66/T013PI7ZHDJ21S7A6AHM0W0RWH/28b58e5c-6c2a-4e33-8abc-26d4da53c61c" style={{ left: "-25px", top: "10px", height: "143px", width: "228px" }} />
             
              <Card.Title><h2 className="text-dark">Digitian Hub - Agency Registration</h2> </Card.Title>
              </div>
              <Card.Body >
              
              <Card.Text>

              <h2 className="text-dark">Thanks</h2>
</Card.Text>
              <Card.Text>

              Thank you for your responce. We will get in touch with you soon.
</Card.Text>
    <Card.Text>

    <Link to="/">Submit another response</Link>
</Card.Text>


              </Card.Body>
              {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>   */}
  </Card>

       
        </Jumbotron>
      </div>
      </div>
      </div>
    )
}

export default Submitted
