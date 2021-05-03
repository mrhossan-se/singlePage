import React, { Component, Fragment } from 'react'
import ProjectDetails from '../component/ProjectDetails/ProjectDetails'
import Footer from '../component/Footer/Footer'
import PageTop from '../component/PageTop/PageTop'
import TopNavigation from '../component/TopNavigation/TopNavigation'

 class DetailsPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="SinglePage - Course Detailes"/>
                <PageTop pageTitle="Course Detials"/>
                <ProjectDetails/>
                <Footer/>

            </Fragment>
        )
    }
}
export default DetailsPage;
