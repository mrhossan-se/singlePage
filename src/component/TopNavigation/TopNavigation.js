import {Component,Fragment} from "react";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {NavLink, Link} from "react-router-dom";
import whiteLogo from "../../asset/images/navlogo.svg";
import blueLogo from "../../asset/images/navlogoScroll.svg";
import '../../asset/css/custom.css';

class TopNavigation extends Component{

constructor(props){
  super();
  this.state={
    navBarTitle: "navTitle",
    navBarLogo: [whiteLogo],
    navVariant: "dark",
    navBarBackground: "navBackground",
    navBarItem :"navItem",
    pageTitle:props.title
  }
}





onScroll=()=>{
if(window.scrollY>100){
  this.setState({navVariant:"light", navBarTitle:"navTitleScroll", navBarLogo: [blueLogo], navBarBackground:"navBackgroundScroll", navBarItem:"navItemScroll"})
}
else if(window.scrollY<100){
 this.setState({navVariant:"dark", navBarTitle:"navTitle", navBarLogo: [whiteLogo], navBarBackground: "navBackground", navBarItem :"navItem"})
}
}
componentDidMount(){
window.addEventListener("scroll",this.onScroll)
}


  
    render() {
        return(
             <Fragment>
               <title>{this.state.pageTitle}</title>
                 <Navbar variant={this.state.navVariant}className={this.state.navBarBackground} fixed="top" collapseOnSelect expand="lg">
  <Navbar.Brand ><Link to="/"className={this.state.navBarTitle}><img src={this.state.navBarLogo}/>  SinglePage</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>

    <Nav>
      {/* NavLink (for use with out loding page)& to use for NavlINK */}
       <Nav.Link><NavLink exact activeStyle={{color: "#00a8ee"}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
       <Nav.Link><NavLink exact activeStyle={{color: "#00a8ee"}}  className={this.state.navBarItem} to="/service">Services</NavLink></Nav.Link>
       <Nav.Link><NavLink exact activeStyle={{color: "#00a8ee"}}  className={this.state.navBarItem} to="/course">Courses</NavLink></Nav.Link>
       <Nav.Link><NavLink exact activeStyle={{color: "#00a8ee"}}  className={this.state.navBarItem} to="/portFolio">Portfolio</NavLink></Nav.Link>
       <Nav.Link><NavLink exact activeStyle={{color: "#00a8ee"}}  className={this.state.navBarItem} to="/contract">Contract</NavLink></Nav.Link>
       <Nav.Link><NavLink exact activeStyle={{color: "#00a8ee"}}  className={this.state.navBarItem} to="/about">About</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
 </Navbar>
 </Fragment>
        );
    }
}

export default TopNavigation;