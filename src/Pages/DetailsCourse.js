import React, { Component, Fragment } from 'react'
import CourseDetials from '../component/CourseDetials/CourseDetials';
import Footer from '../component/Footer/Footer';
import TopNavigation from '../component/TopNavigation/TopNavigation';

 class DetailsCourse extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="SinglePage - Course Detials"/>
                <CourseDetials pageTitle="Course Detials"/>
                <Footer/>
            </Fragment>
        )
    }
}
export default DetailsCourse;