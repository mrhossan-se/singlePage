import {Component,Fragment} from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class Service extends Component{
 render(){
     return(
         <Fragment>
             <Container className="text-center">
                <div>
                    <h1 className='text-center service'>Our Services</h1>
                </div>
                  <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div  className="serviceComponent">
                        <img width='328px' height='250px'src="https://cdn.pixabay.com/photo/2016/04/21/13/27/computer-1343393_960_720.jpg"/>
                        <h2 className="serviceHeading">Web Development</h2>
                        <p className="serviceContent">This is our services, most of the claint our service is the best quality if your need services you can contract with us</p>
                         <Button variant="success"><Link to="/serviceDetials" className="linkStyle">Service</Link></Button>
                         </div>

                    </Col>
                    <Col lg={4} md={6} sm={12} >
                    <div  className="serviceComponent">
                    <img width='328px' height='250px' src="https://cdn.pixabay.com/photo/2016/04/21/13/27/computer-1343393_960_720.jpg"/>
                    <h2 className="serviceHeading">CMS</h2>
                    <p className="serviceContent">This is our services, most of the claint our service is the best quality if your need services you can contract with us</p>
                    <Button variant="success"><Link to="/serviceDetials" className="linkStyle">Service</Link></Button>
                    </div>
                    </Col>
                    
                    <Col lg={4} md={6} sm={12}>
                    <div  className="serviceComponent">
                    <img width='328' height='250'  src="https://cdn.pixabay.com/photo/2016/04/21/13/27/computer-1343393_960_720.jpg"/>
                    <h2 className="serviceHeading">SEO</h2>
                    <p className="serviceContent">This is our services, most of the claint our service is the best quality if your need services you can contract with us</p>
                    <Button variant="success"><Link to="/serviceDetials" className="linkStyle">Service</Link></Button>
                    </div>
                        </Col>
                </Row>
             </Container>

         </Fragment>
     );
 }
}

export default Service;