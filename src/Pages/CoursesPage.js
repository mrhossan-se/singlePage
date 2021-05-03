import React, { PureComponent, Fragment } from 'react';
import AllCourses from '../component/AllCourses/AllCourses';
import PageTop from '../component/PageTop/PageTop';
import TopNavigation from '../component/TopNavigation/TopNavigation';
import Footer from '../component/Footer/Footer';

class CoursesPage extends PureComponent {
    componentDidMount(){
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="SinglePage - Course"/>
                <PageTop pageTitle="All Courses"/>
                <AllCourses/>
                <Footer/>

            </Fragment>
        )
    }
}

export default CoursesPage