import { Component,Fragment } from "react";
import {Container,Row,Col} from "react-bootstrap";
import {ResponsiveContainer, BarChart, Bar, XAxis, Tooltip} from "recharts"

class Technology extends Component{

    constructor(){
        super();
        this.state={

          data:[
              {Technology:"HTML", Projects:100},
              {Technology:"CSS", Projects:100},
              {Technology:"Bootstrap", Projects:50},
              {Technology:"JS", Projects:95},
              {Technology:"Jquery", Projects:40},
              {Technology:"React", Projects:80},
              {Technology:"WP", Projects:70},
              {Technology:"Elementor", Projects:80},
              {Technology:"SEO", Projects:90}, 
               ]

          }
      }




    render(){
        var blue="rgba(00, 115, 230, 0.8)"
        return(
            <Fragment>
              <Container className="text-center">
                 <h1 className="service"> Technology Used</h1>
                  <Row>
                      <Col lg={6} md={12} sm={12}>
                          
                        <ResponsiveContainer style={{ width:"100%", height:"100%"}}>
                            <BarChart width="100" height="100%" data={this.state.data}>
                                <XAxis dataKey="Technology"/>
                                  <Tooltip/>
                                  <Bar dataKey="Projects" fill={blue}/>
                            </BarChart>
                        </ResponsiveContainer>
                     
                      </Col>
                      <Col lg={6} md={12} sm={12}>
                      <div className="technologyContent">
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                          <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <p> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>

                      </Col>
                  </Row>

              </Container>
            </Fragment>
        )
    }

}

export default Technology;