import { Component, Fragment } from 'react';
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';
import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from 'video-react';

class Video extends Component{
    
  constructor(){
    super();
    this.state={
      show:false
    }
  }

  modalClose=()=>this.setState({show:false})
  modalOpen=()=>this.setState({show:true})
  

    render(){
        return(
          <Fragment>
              <Container className="text-center">
                  <Row>
                      <Col lg={12} md={12} em={12} className="videoCart">
                        <div>
                          <h3 className="videoTitle">HOW I DO</h3>
                          <p className="videoDescription">this is our play button here you can alick her for watch video this is our play button here you can alick her for watch videothis is our play button here you can alick her for watch videovthis is our play button here you can alick her for watch videovthis is our play button here you can alick her for watch videothis is our play button here you can alick her for watch video</p>
                          <p onClick={this.modalOpen} className="videoButton fas fa-play-circle summaryCardeBullet"> </p>
                          <hr className="w-25"/>
                        </div>
                      </Col>

                  </Row>
              </Container>



              <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
              <Modal.Body>
                 <Player>
                   <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                   <BigPlayButton position="center" />
                 </Player>
              </Modal.Body>
              <Modal.Footer>
          <Button variant="primary" onClick={this.modalClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
          </Fragment>
        )
    }
} 

export default Video;