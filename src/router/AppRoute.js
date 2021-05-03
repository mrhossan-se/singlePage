import React, { Component,Fragment } from 'react'
import AboutPage from '../Pages/AboutPage';
import ContractPage from '../Pages/ContractPage';
import CoursesPage from '../Pages/CoursesPage';
import HomePages from '../Pages/HomePages';
import PortFolioPage from '../Pages/PortFolioPage';
import ServicePage from '../Pages/ServicePage';
import RefundPage from '../Pages/RefundPage';
import TermsPage from '../Pages/TermsPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivacyPage from '../Pages/PrivacyPage';
import DetailsPage from '../Pages/DetailsPage';
import DetailsServics from '../Pages/DetailsServics';
import DetailsCourse from '../Pages/DetailsCourse';

 class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" component={HomePages}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portFolio" component={PortFolioPage}/>
                    <Route exact path="/contract" component={ContractPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                    <Route exact path="/privacy" component={PrivacyPage}/>
                    <Route exact path="/projectDetials" component={DetailsPage}/>
                    <Route exact path="/serviceDetials" component={DetailsServics}/>
                    <Route exact path="/courseDetials" component={DetailsCourse}/>

                </Switch>
                
            </Fragment>
        )
    }
}
export default AppRoute;
