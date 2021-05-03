import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CourseImg from "../../asset/images/lorem gold.jpg";


 class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                          <img src="https://cdn.pixabay.com/photo/2017/03/07/20/45/cog-wheels-2125169_960_720.jpg"width="100%x" height="400px" className="courseImg"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h3>this is our course details</h3>
                            <ul>
                                <li>this is our course details</li>
                                <li>this is our course details</li>
                                <li>this is our course details</li>
                                <li>this is our course details</li>
                                <li>this is our course details</li>
                                <li>this is our course details</li>
                                <li>this is our course details</li>
                                <li>this is our course details</li>                      
                            </ul>
                      
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}
export default ProjectDetails;