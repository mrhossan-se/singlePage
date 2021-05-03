import React, { Component, Fragment } from 'react'
import ContractSection from '../component/ContractSection/ContractSection';
import Footer from '../component/Footer/Footer';
import PageTop from '../component/PageTop/PageTop';
import TopNavigation from '../component/TopNavigation/TopNavigation';

class ContractPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <Fragment>
                  <TopNavigation title="SinglePage - Contract"/>
                  <PageTop pageTitle="Contract"/>
                  <ContractSection/>
                  <Footer/>
                </Fragment>
            </div>
        )
    }
}
export default ContractPage;