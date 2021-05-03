import {Component, Fragment} from 'react';
import{Container, Row, Col, Button} from 'react-bootstrap';
import CourseImg from "../../asset/images/lorem gold.jpg";
import {Link} from "react-router-dom"

class Courses extends Component{
    render(){
        return(
           <Fragment>
               <Container>
               <h1 className='text-center service'>Recent Courses</h1>
                  <Row>
                      <Col  sm={12} md={12} lg={12}>
                         <Row>

                             <Col  sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                       <Button className="crouseButton "><Link to="/courseDetials" className="linkStyle">Details</Link></Button>
                                   </Col>
                               </Row>
                             
                             </Col>

                             {/* {2nd part} */}
                             
                             <Col  sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                        <Button><Link to="/courseDetials" className="linkStyle">Details</Link></Button>
                                   </Col>
                               </Row>
                             
                             </Col>

                             {/* 3 */}
                             <Col  sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                        <Button><Link to="/courseDetials" className="linkStyle">Details</Link></Button>
                                   </Col>
                               </Row>
                             
                             </Col>

                             {/* 4 */}
                             <Col sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                        <Button><Link to="/courseDetials" className="linkStyle">Details</Link></Button>
                                      
                                   </Col>
                               </Row>
                             
                             </Col>

                         </Row>
                      </Col>
                  </Row>
                  

               </Container>

           </Fragment>
        )
    }
}
 
export default Courses;


