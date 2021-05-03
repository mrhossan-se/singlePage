import {Fragment, Component} from 'react';
import AboutDescription from '../component/AboutDescription/AboutDescription';
import Footer from '../component/Footer/Footer';
import PageTop from '../component/PageTop/PageTop';
import TopNavigation from '../component/TopNavigation/TopNavigation';

class AboutPage extends Component{
    componentDidMount(){
        window.scroll(0, 0)
    }
    render(){
        return(
            <Fragment>
                <TopNavigation title="SinglePage - About"/>
                <PageTop pageTitle="About Me"/>
                <AboutDescription/>
                <Footer/>
            </Fragment>

        )
    }
}

export default AboutPage;