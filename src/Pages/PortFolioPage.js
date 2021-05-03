import React, { Component, Fragment } from 'react'
import TopNavigation from '../component/TopNavigation/TopNavigation';
import PageTop from '../component/PageTop/PageTop';
import AllProjects from '../component/AllProjects/AllProjects';
import Footer from '../component/Footer/Footer';

class PortFolioPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="SinglePage - PortFolio"/>
                <PageTop pageTitle="Portfolio"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        )
    }
}
export default PortFolioPage;