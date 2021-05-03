import React, { Component, Fragment } from 'react'
import PageTop from '../component/PageTop/PageTop';
import RefundSection from '../component/RefundSection/RefundSection';
import TopNavigation from '../component/TopNavigation/TopNavigation';
import Footer from '../component/Footer/Footer';

class RefundPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="SinglePage - Refund Policy"/>
                <PageTop pageTitle="Refund Policy"/>
                <RefundSection/>
                <Footer/>
            </Fragment>
        )
    }
}
export default RefundPage;