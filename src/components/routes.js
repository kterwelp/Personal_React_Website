import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import AboutMe from './aboutme';
import ContactMe from './contactme';
import Projects from './projects';
import Resume from './resume';
import ClickItFixIt from './clickItFixIt';
import ProjectClassApp from './projectClassApp';
import UHReactApp from './uhReactApp'; 
import LaunchScreen from './launchScreen';
import LoginScreen from './loginScreen';
import TouchID from './touchID';
import MainMenu from './mainMenu';
import JobEntry from './jobEntry';
import AdminLogin from './adminLogin';
import AdminWelcome from './adminWelcome';
import AdminTimeCard from './adminTimeCard';
import MainMenuRN from './mainMenuRN';
import LogActivityRN from './logActivityRN';
import InputOptionsRN from './inputOptionsRN';
import InputSelectionRN from './inputSelectionRN';
import LogFormRN from './logFormRN';
import UserInputRN from './userInputRN';
import TimeEntryRN from './timeEntryRN';
import ManualTimeEntryRN from './manualTimeEntryRN';
import CurrentTimeEntryRN from './currentTimeEntryRN';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contactme" component={ContactMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/clickItFixIt" component={ClickItFixIt} />
        <Route path="/projectClassApp" component={ProjectClassApp} />
        <Route path="/uhReactApp" component={UHReactApp} />
        <Route path="/launchScreen" component={LaunchScreen} />
        <Route path="/loginScreen" component={LoginScreen} />
        <Route path="/touchID" component={TouchID} />
        <Route path="/mainMenu" component={MainMenu} />
        <Route path="/jobEntry" component={JobEntry} />
        <Route path="/adminLogin" component={AdminLogin} />
        <Route path="/adminWelcome" component={AdminWelcome} />
        <Route path="/adminTimeCard" component={AdminTimeCard} />
        <Route path="/mainMenuRN" component={MainMenuRN} />
        <Route path="/logActivityRN" component={LogActivityRN} />
        <Route path="/inputOptionsRN" component={InputOptionsRN} />
        <Route path="/inputSelectionRN" component={InputSelectionRN} />
        <Route path="/logFormRN" component={LogFormRN} />
        <Route path="/userInputRN" component={UserInputRN} />
        <Route path="/timeEntryRN" component={TimeEntryRN} />
        <Route path="/manualTimeEntryRN" component={ManualTimeEntryRN} />
        <Route path="/currentTimeEntryRN" component={CurrentTimeEntryRN} />
    </Switch>
)

export default Routes;