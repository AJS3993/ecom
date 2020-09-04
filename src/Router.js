import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Router extends React.Component {
  
      render() {
          return (
              <div className='w-100'>
            
            <Switch>
<Route path='/' component={App} />
<Route path='/store' component={StorePage} />
               
 </Switch>
              </div>
          )
  
      }
  
  }
  
  export default Router



