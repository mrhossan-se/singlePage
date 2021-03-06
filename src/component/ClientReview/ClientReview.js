import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import clientImg from "../../asset/images/lorem gold.jpg";



    class ClientReview  extends Component{
    render(){

        var settings = {
            autoplaySpeed: 3000,
            autoplay: true,
            dots: true,
            infinite: false,
            speed: 2000,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
    
        return(
            <Fragment>
               <Container className="text-center">
               <h1 className='text-center service'>Client Says</h1>
                <Slider {...settings}>
                 <div>
                 <Row className="justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                       <img src={clientImg} className="circleImage"/>
                       <h3 className="serviceHeading">Our Client</h3>
                       <p className="serviceContent">here is our client comments you can coments to us</p>
                    </Col>
                  </Row>
                </div>

                <div>
                 <Row className="justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                       <img src={clientImg} className="circleImage"/>
                       <h3 className="serviceHeading">Our Client</h3>
                       <p className="serviceContent">here is our client comments you can coments to us</p>
                    </Col>
                  </Row>
                </div>

                <div>
                 <Row className="justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                       <img src={clientImg} className="circleImage"/>
                       <h3 className="serviceHeading">Our Client</h3>
                       <p className="serviceContent">here is our client comments you can coments to us</p>
                    </Col>
                  </Row>
                </div>
                </Slider>
               </Container>
            </Fragment>
        );
    }
}

export default ClientReview;