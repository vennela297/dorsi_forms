// import React,{useState} from 'react';
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,

  
// } from "react-bootstrap";


// import "./Client/style.css";


// const initialState = {
//   name: "",
//   org: "",
//   role: "",
//   email: "",
//   phone: "",
//   address: "",
//   gst:"",
//   bankdetails:""
//     };

    
   
// function AgencyRegistration() {

//   const [newUser, setNewUser] = useState(initialState);


//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setNewUser({ ...newUser, [name]: value });
//   }

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     console.log(newUser);
  
//   }

   //check box state

  //  const [state, setState] = React.useState({
  //    Digital : false ,
  //    Creative : false ,
  //     Media: false ,
  //   Print : false ,
  //   PR: false ,
  //   HR : false ,
  // Other  : false ,
    

  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });


  // return (
    // <div className="registration-page bg-account-pages">     
  
  
    //   <div className="mt-5">
    
    // <section className="bg-account-pages height-100vh" id="login">
    // <div className="display-table">
    // <div className="display-table-cell">
    // <div className="container">
    // <div className="row justify-content-center">
    // <div className="col-lg-5">
    // <div className="card account-card">                                 
    // <div className="card-body">
          
            
    // <div className="wrapper">
    // <div className="form-wrapper">
             
                







    //               <Form onSubmit={handleOnSubmit}>

          



    //                 <Form.Group>
    //                   <Form.Label>Your Name</Form.Label>
    //                   <Form.Control
    //                     type="text"
    //                     name="name"

    //                     value={newUser.name}
    //                     onChange={handleOnChange}
    //                     placeholder="Enter your Answer"
    //                     required
    //                   />
    //                 </Form.Group>
    //                 <br />
    //                 <Form.Group>
    //                   <Form.Label>Name of Organization</Form.Label>
    //                   <Form.Control
    //                     type="text"
    //                     name="org"
    //                     value={newUser.org}
    //             onChange={handleOnChange}
                        
    //                     placeholder="Enter your Answer"
    //                     required
    //                   />
    //                 </Form.Group>
    //                 <br />
    //                 <Form.Group>
    //                   <Form.Label>Your role in the organization</Form.Label>
    //                   <Form.Control
    //                     type="text"
    //                     name="role"
    //                     value={newUser.role}
    //             onChange={handleOnChange}
                        
    //                     placeholder="Enter your Answer"
    //                     required
    //                   />
    //                 </Form.Group>

                   
    //                 <br />
    //                 <Form.Group controlId="formBasicEmail">
    //                   <Form.Label>Email address</Form.Label>
    //                   <Form.Control type="email" name="email" placeholder="Enter email" 
    //                    value={newUser.email}
    //             onChange={handleOnChange} />
    //                   <Form.Text className="text-muted">
    //                     We'll never share your email with anyone else.
    // </Form.Text>
    //                 </Form.Group>

    //                 <br />
    //                 <Form.Group>
    //                   <Form.Label>Contact Number</Form.Label>
    //                   <Form.Control
    //                     type="number"
    //                     name="phone"
    //                     value={newUser.phone}
    //                     onChange={handleOnChange}
    //                     placeholder="The value must be a number"
    //                     required
    //                   />
    //                 </Form.Group>
                  
    //                 <br />
    //                 <Form.Label>Which of the following best defines your organization</Form.Label>
    //                 <br />
    //                 <br />
    //                 <Form.Group controlId="formBasicCheckbox">

    //                   <Form.Check type="checkbox" 
    //                    label="Digitial Marketing Agency" />
    //                   <Form.Check type="checkbox" label="Creative Agency" />
    //                   <Form.Check type="checkbox" label="Media Buying Agency" />
    //                   <Form.Check type="checkbox" label="Print Media Agency" />
    //                   <Form.Check type="checkbox" label="PR agency" />
    //                   <Form.Check type="checkbox" label="HR consultants" />
    //                   <Form.Check type="checkbox" label="Other Services like CA, Management, Law, Manpower, etc" />
    //                 </Form.Group>
    //                 <br />
    //                 <Form.Group>
    //                   <Form.Label>Your Address (you may also share the link to business listing)</Form.Label>
    //                   <br />
    //                   <Form.Control
    //                     type="text"
    //                     name="address"
    //                     value={newUser.address}
    //                      onChange={handleOnChange}
                        
    //                     placeholder="Enter your Answer"
    //                     required
    //                   />
    //                 </Form.Group>
    //                 <br />
    //                 <br />
    //                 <Form.Group>
    //                   <Form.Label>GST Number</Form.Label>
    //                   <Form.Control
    //                     type="text"
    //                     name="gst"
    //                      value={newUser.gst}
    //                    onChange={handleOnChange}
    //                     placeholder="Enter your Answer"
    //                     required
    //                   />
    //                 </Form.Group>
    //                 <br />
    //                 <Form.Group controlId="exampleForm.ControlTextarea1">
    //                   <Form.Label>Bank Detials (Only share your current account detials)</Form.Label>

    //                   <Form.Control as="textarea" rows={3} name="bankdetails" value={newUser.bankdetails}
    //                    onChange={handleOnChange} />
    //                 </Form.Group>

    //                 <br />
    //                 <button type="submit" className="btn btn-custom btn-block">Submit</button>
    //               </Form>

               
         
    //       </div>
    //       </div>
        //   </div>
        //   </div>
        //  </div>
        //   </div>
        // </div>
        //   </section>
         


      // </div>
      // </div>


//     );
// }

//  export default AgencyRegistration



// import React from 'react';
// import { Link } from 'react-router-dom';



// class Login extends React.Component {

//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         email: "",
//     //         password: "",
            
//     //     }
    
//     // }
//     // handleUsernameChange = (event) =>{
//     //     this.setState({email: event.target.value});
        
//     // }
    
//     // handlePasswordChange = (event) =>{
//     //     this.setState({password: event.target.value});
    
        
//     // }
//     // handleFormSubmit = (event) =>{
//     //     event.preventDefault();
//     //     console.log(this.state);
            
        
           
        
//     //      axios.post('https://clientdev.digitianhub.online/api/v1/user/login', this.state)
//     //     .then(res =>{
//     //         console.log(res);
//     //         console.log(res.data);
//     //         alert("Sucessfully logged in")
//     //     }).catch((err) =>{
//     //         this.handleErrorResponse(err);
//     //         alert("Failed")
//     //     })

        
//     // }

//     // handleErrorResponse = (err)=>{
//     //     if(err.response && err.response.data){
//     //         console.log(err.response.data);
//     //     }else if(err.request){
//     //         console.log(err.request.message || err.request.statusText);
//     //     }else{
//     //         console.log(err.message);
//     //     }
//     // }

      

//     render() {

//   	return (
     
//           <div>
//          <div className="account-home-btn d-none d-sm-block">
//              <Link to="home-one" className="text-white"><i className="mdi mdi-home h1"></i></Link>
//          </div>
        
//          <section className="bg-account-pages height-100vh" id="login">
//             <div className="display-table">
//                 <div className="display-table-cell">
//                     <div className="container">
//                         <div className="row justify-content-center">
//                             <div className="col-lg-5">
//                                 <div className="card account-card">
//                                     <div className="card-body">
//                                         <div className="text-center mt-3">
//                                             <h3 className="font-weight-bold"><Link to="home-one"  className="text-dark text-uppercase account-pages-logo">Dorsin</Link></h3>
//                                             <p className="text-muted">Sign in to continue to Dorsin.</p>
//                                         </div>
//                                         <div className="p-3">
//                                             <form method="post" onSubmit = {this.handleFormSubmit} action="home-one" name="Login form">
//                                                 <div className="form-group">
//                                                     <label for="username">Username</label>
//                                                     <input type="text" className="form-control" id="email" placeholder="Enter username" onChange = {this.handleUsernameChange} />
//                                                 </div>

//                                                 <div className="form-group">
//                                                     <label for="userpassword">Password</label>
//                                                     <input type="password" className="form-control" id="password" placeholder="Enter password" onChange = {this.handlePasswordChange} />
//                                                 </div>

//                                                 <div className="custom-control custom-checkbox">
//                                                     <input type="checkbox" className="custom-control-input" id="customControlInline" />
//                                                     <label className="custom-control-label" for="customControlInline">Remember me</label>
//                                                 </div>

//                                                 <div className="mt-3">
//                                                     <button type="submit" className="btn btn-custom btn-block">Log In</button>
//                                                 </div>

//                                                 <div className="mt-4 mb-0 text-center">
//                                                 <Link to="password-forget"  className="text-dark"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
       
    
//         </div>
     
//   	);
//   }
// }


// export default Login;





// import React,{useState} from 'react';
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Form,
//   Button,
  
// } from "react-bootstrap";

// import { Jumbotron } from "react-bootstrap";
// import "./AgencyRegistration.css";
// import "./Client/style.css";


// const initialState = {
//   name: "",
//   org: "",
//   role: "",
//   email: "",
//   phone: "",
//   address: "",
//   gst:"",
//   bankdetails:""
//     };

    
   
// function AgencyRegistration() {

//   const [newUser, setNewUser] = useState(initialState);


//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setNewUser({ ...newUser, [name]: value });
//   }

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     console.log(newUser);
  
//   }

//    //check box state

//   //  const [state, setState] = React.useState({
//   //    Digital : false ,
//   //    Creative : false ,
//   //     Media: false ,
//   //   Print : false ,
//   //   PR: false ,
//   //   HR : false ,
//   // Other  : false ,
    

//   // });

//   // const handleChange = (event) => {
//   //   setState({ ...state, [event.target.name]: event.target.checked });


//   return (
//     // <div className="registration-page bg-account-pages">     
  
  
//     //   <div className="mt-5">
    
//     <section className="bg-account-pages height-100vh" id="login">
//     <div className="display-table">
//     <div className="display-table-cell">
//     <div className="container">
//     <div className="row justify-content-center">
//     <div className="col-lg-5">
//     <div className="card account-card">                                 
//     <div className="card-body">
          
//             {/* <Row>
//         <Col> */}
            

//               {/* </Col>
//       </Row> */}


//               <Row>
//                 <Col>
//                   <br />

//                   <Form onSubmit={handleOnSubmit}>





//                     <Form.Group>
//                       <Form.Label>1.Your Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name"

//                         value={newUser.name}
//                         onChange={handleOnChange}
//                         placeholder="Enter your Answer"
//                         required
//                       />
//                     </Form.Group>
//                     <br />
//                     <Form.Group>
//                       <Form.Label>2.Name of Organization</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="org"
//                         value={newUser.org}
//                 onChange={handleOnChange}
                        
//                         placeholder="Enter your Answer"
//                         required
//                       />
//                     </Form.Group>
//                     <br />
//                     <Form.Group>
//                       <Form.Label>3.Your role in the organization</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="role"
//                         value={newUser.role}
//                 onChange={handleOnChange}
                        
//                         placeholder="Enter your Answer"
//                         required
//                       />
//                     </Form.Group>
//                     <br />
//                     <Form.Group controlId="formBasicEmail">
//                       <Form.Label>4.Email address</Form.Label>
//                       <Form.Control type="email" name="email" placeholder="Enter email" 
//                        value={newUser.email}
//                 onChange={handleOnChange} />
//                       <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//     </Form.Text>
//                     </Form.Group>

//                     <br />
//                     <Form.Group>
//                       <Form.Label>5.Contact Number</Form.Label>
//                       <Form.Control
//                         type="number"
//                         name="phone"
//                         value={newUser.phone}
//                         onChange={handleOnChange}
//                         placeholder="The value must be a number"
//                         required
//                       />
//                     </Form.Group>

//                     <br />
//                     <Form.Label>6.Which of the following best defines your organization</Form.Label>
//                     <br />
//                     <br />
//                     <Form.Group controlId="formBasicCheckbox">

//                       <Form.Check type="checkbox" 
//                        label="Digitial Marketing Agency" />
//                       <Form.Check type="checkbox" label="Creative Agency" />
//                       <Form.Check type="checkbox" label="Media Buying Agency" />
//                       <Form.Check type="checkbox" label="Print Media Agency" />
//                       <Form.Check type="checkbox" label="PR agency" />
//                       <Form.Check type="checkbox" label="HR consultants" />
//                       <Form.Check type="checkbox" label="Other Services like CA, Management, Law, Manpower, etc" />
//                     </Form.Group>
//                     <br />
//                     <Form.Group>
//                       <Form.Label>7.Your Address (you may also share the link to business listing)</Form.Label>
//                       <br />
//                       <Form.Control
//                         type="text"
//                         name="address"
//                         value={newUser.address}
//                          onChange={handleOnChange}
                        
//                         placeholder="Enter your Answer"
//                         required
//                       />
//                     </Form.Group>
//                     <br />
//                     <br />
//                     <Form.Group>
//                       <Form.Label>8.GST Number</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="gst"
//                          value={newUser.gst}
//                        onChange={handleOnChange}
//                         placeholder="Enter your Answer"
//                         required
//                       />
//                     </Form.Group>
//                     <br />
//                     <Form.Group controlId="exampleForm.ControlTextarea1">
//                       <Form.Label>9.Bank Detials (Only share your current account detials)</Form.Label>

//                       <Form.Control as="textarea" rows={3} name="bankdetails" value={newUser.bankdetails}
//                        onChange={handleOnChange} />
//                     </Form.Group>

//                     <br />
//                     <Button variant="primary" type="submit">
//                       Submit
//   </Button>
//                   </Form>

//                 </Col>
//               </Row>

         
//          </div>
//          </div>
//          </div>
//          </div>
//          </div>
//          </div>
//          </div>
//          </section>
         


//       // </div>
//       // </div>


//     );
// }

//  export default AgencyRegistration
