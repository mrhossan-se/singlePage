import React, { Component, Fragment } from 'react'
import Footer from '../component/Footer/Footer';
import TermsSection from '../component/TermsSection/TermsSection';
import TopNavigation from '../component/TopNavigation/TopNavigation';
import PageTop from "../component/PageTop/PageTop";


 class TermsPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="SinglePage - Terms Condition"/>
                <PageTop pageTitle="Terms & Condition"/>
                <TermsSection />
                <Footer/>
            </Fragment>
        )
    }
}
export default TermsPage;