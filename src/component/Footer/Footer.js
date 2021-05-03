import{Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link, NavLink} from "react-router-dom";

class Footer extends Component{
    render(){
        return(
         <Fragment>
             <Container fluid={true} className="footerSecktion text-center ">
            
                 <Row>
                    
                     <Col lg={3} md={6} sm={12} className="p-5 text-justify" >
                         <h3 className="footerHedar">Flow Me</h3>
                         <a href="#" class="socialLink"><i class="fab fa-linkedin"></i> Linkedid</a><br/>
                         <a href="#" class="socialLink"><i class="fab fa-github-square"></i> github</a> 
                         {/* <a href="#"><FontAwesomeIcon icon={faFacebook}/>Facebook</a> */}
                     </Col>
           
                     
                     <Col lg={3} md={6} sm={12} className="p-5  text-justify">
                         <h3 className="footerHedar"> Address</h3>
                         <address class="footerInfo"><i class="fas fa-map-marker-alt"></i> Stockholm  Sweden</address>
                         <p className="footerInfo"><i class="fas fa-envelope "></i> mrhossan1988@yahoo.com</p>
                         <p className="footerInfo"> <i class="fas fa-phone-square "></i> +46 (0)769726457</p>  
                         
                     </Col>
                     
                     <Col lg={3} md={6} sm={12} className="p-5  text-justify">
                         <h3 className="footerHedar">Information</h3>
                         <Link className="socialLink" to="/about">Abou Me</Link> <br/>
                         <Link className="socialLink" to="#">My Resume</Link> <br/>
                         <Link className="socialLink" to="/contract">Contract Me</Link>
                     
                     </Col>
                     <Col lg={3} md={6} sm={12} className="p-5  text-justify">
                         <h3 className="footerHedar"> Ligal</h3>
                         <Link  className="socialLink" to="/refund">Refund Pilicy</Link><br/>
                         <Link  className="socialLink" to="/terms">Terms Condition</Link> <br/>
                         <Link  className="socialLink" to="/privacy" >Privacy Pilicy</Link>
                     </Col>
                
                 </Row>
             </Container>
             <Container fluid={true} className="text-center copyWreie">
             <a href="#" className="copyWriteLink"> @ M.R.Hossan & 2021</a>
             </Container>
         </Fragment>
        )
    }
}

export default Footer;