import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import  useStyles from '../layout/dashboard/GeneralJSXstyling'
import Sidebar from '../layout/dashboard/Sidebar'
import '../layout/dashboard/dashboard.css'
import {Switch,Route} from 'react-router-dom'
import ViewContact from '../components/dashboard/ViewContact'
import   AddContact from '../components/dashboard/AddContact'

const Dashboard = (props)=>{
     const classes = useStyles();
     const theme = useTheme();
  return (
      <div>
    
   <Sidebar props={props}/>
         <div className="main-content">
         <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Switch>
    <Route exact path={props.match.path} component={ViewContact} />
    <Route exact path={`${props.match.path}/view-contacts`}  component={ViewContact} />
    <Route exact path={`${props.match.path}/add-contacts`} component={AddContact} />
    </Switch>
        

      </main>
         </div>
      
      </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Dashboard;
