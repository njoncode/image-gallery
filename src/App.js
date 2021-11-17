import React from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';

import {ImageContextProvider} from './contexts/ImageContext';
import ImageThumbnailsList from './components/ImageThumbnailsList';
import NotFoundPage from './components/NotFoundPage';

function App() {

  return (
    <div className="App">
       <ImageContextProvider> 
        <Router>
            <Switch>
                <Route exact path='/' component={ImageThumbnailsList} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </ImageContextProvider>
    </div>
  );
}

export default App;
