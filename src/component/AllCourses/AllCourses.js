import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import CourseImg from "../../asset/images/lorem gold.jpg";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
               <Container>
               <h1 className='text-center service'>All Courses</h1>
                  <Row>
                      <Col  sm={12} md={12} lg={12}>
                         <Row>

                             <Col  sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2018/05/19/01/23/online-3412498_960_720.jpg" width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                       <Button className="crouseButton">Details</Button>
                                   </Col>
                               </Row>
                             
                             </Col>

                             {/* {2nd part} */}
                             
                             <Col  sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2018/05/19/01/23/online-3412498_960_720.jpg"  width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                        <Button className="crouseButton">Details</Button>
                                   </Col>
                               </Row>
                             
                             </Col>

                             {/* 3 */}
                             <Col  sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2018/05/19/01/23/online-3412498_960_720.jpg"  width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                        <Button className="crouseButton">Details</Button>
                                   </Col>
                               </Row>
                             
                             </Col>

                             {/* 4 */}
                             <Col sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2018/05/19/01/23/online-3412498_960_720.jpg"  width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                        <Button className="crouseButton">Details</Button>
                                   </Col>
                               </Row>
                             
                             </Col>

                             <Col sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2018/05/19/01/23/online-3412498_960_720.jpg"  width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                        <Button className="crouseButton">Details</Button>
                                   </Col>
                               </Row>
                             
                             </Col>

                             <Col sm={12} md={12} lg={6}>
                               <Row>
                                   <Col  sm={12} md={6} lg={6}>
                                        <img src="https://cdn.pixabay.com/photo/2018/05/19/01/23/online-3412498_960_720.jpg"  width="250px" height="250px" className="courseImg"/>
                                   </Col>
                                     
                                   <Col  sm={12} md={6} lg={6}>
                                       <h3 className="courseTitle">Our New Course</h3>
                                       <p className="courseContent">this is our new course this is our new course  this is our new course this is our new course 
                                       <br/>this is our new course this is our new course  this is our new course this is our new course </p>
                                        <Button className="crouseButton">Details</Button>
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

export default AllCourses