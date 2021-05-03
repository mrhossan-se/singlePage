import React, { Component, Fragment } from 'react'
import Footer from '../component/Footer/Footer';
import PageTop from '../component/PageTop/PageTop';
import PrivacySection from '../component/PrivacySection/PrivacySection';
import TopNavigation from '../component/TopNavigation/TopNavigation';

class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="SinglePage - Privacy Policy"/>
                <PageTop pageTitle="Privacy Policy"/>
                <PrivacySection/>
                <Footer/>

            </Fragment>
        )
    }
}
export default PrivacyPage;