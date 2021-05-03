import React, { Component, Fragment } from 'react'
import Footer from '../component/Footer/Footer';
import PageTop from '../component/PageTop/PageTop';
import ServiceDetails from '../component/ServiceDetails/ServiceDetails';
import TopNavigation from '../component/TopNavigation/TopNavigation';

class DetailsServics extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="SinglePage - Service Detials"/>
                <PageTop pageTitle="Service Detials"/>
                <ServiceDetails/>
                <Footer/>
            </Fragment>
        )
    }
}
export default DetailsServics;