import {Component, Fragment} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

class ContractSection extends Component{
    render(){
        return(
            <Fragment>
                <Container clasName="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="contractHed"> Quick Contract</h2>
                        <Form>
                           <Form.Group>
                            <Form.Label class="contractInfo">Name</Form.Label>
                             <Form.Control type="Text"/>
                           </Form.Group>

                           <Form.Group>
                            <Form.Label class="contractInfo">Email</Form.Label>
                             <Form.Control type="Emai"/>
                           </Form.Group>

                           <Form.Group>
                            <Form.Label class="contractInfo">Your Message</Form.Label>
                             <Form.Control as="textarea" rows={4} />
                           </Form.Group>

                           <Button variant="primary" type="submit">
                            Submit
                           </Button>
                         </Form>
                      
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="contractHed disCusNow">Discus Now</h2>
                            <address class=" disCus"><i class="fas fa-map-marker-alt"></i> Stockholm  Sweden</address>
                            <p className=" disCus"><i class="fas fa-envelope "></i> mrhossan1988@yahoo.com</p>
                            <p className=" disCus"> <i class="fas fa-phone-square "></i> +46 (0)769726457</p>  
                         

                        </Col>
                    </Row>
                </Container>
            </Fragment>
          )
    }
}

export default ContractSection;