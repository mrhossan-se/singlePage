import React, { Component, Fragment } from 'react'
import ContractSection from '../component/ContractSection/ContractSection';
import Footer from '../component/Footer/Footer';
import PageTop from '../component/PageTop/PageTop';
import Service from '../component/Service/Service';
import TopNavigation from '../component/TopNavigation/TopNavigation';


class ServicePage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="SinglePage - Service"/>
                <PageTop pageTitle="My Service"/>
                <Service/>
                <ContractSection/>
                 <Footer/>
            </Fragment>
        )
    }
}
export default ServicePage;