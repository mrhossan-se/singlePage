import {Component, Fragment} from "react";
import TopBanner from '../component/TopBanner/TopBanner';
import Service from '../component/Service/Service';
import TopNavigation from '../component/TopNavigation/TopNavigation';
import Technology from '../component/Technology/Technology';
import Summary from '../component/Summary/Summary';
import RecentProject from '../component/RecentProject/RecentProjects';
import Courses from '../component/Courses/Courses';
import Video from '../component/Video/Video';
import ClientReview from '../component/ClientReview/ClientReview';
import Footer from '../component/Footer/Footer';

class HomePages extends Component{
    componentDidMount(){
        window.scroll(0, 0)
    }
    render(){
        return(
             <Fragment>
                <TopNavigation title="SinglePage - Home"/>
                <TopBanner/>
                <Service/>
                <Technology/>
                <Summary/>
                <RecentProject/>
                <Courses/>
                <Video/>
                <ClientReview/>
                <Footer/>    
             </Fragment>
        );
    }
}

export default HomePages;