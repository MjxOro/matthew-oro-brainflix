import './App.scss';
import LandingPage from './pages/LandingPage/LandingPage';
import UploadPage from './pages/UploadPage/UploadPage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<BrowserRouter key='AppKey'>
			<Switch>
				<Route key='Appkey' exact path='/upload' component={UploadPage} />
				<Route key='AppKey' path='/:id' exact component={LandingPage} />
				<Route key='AppKey' path='/'  component={LandingPage} />
			</Switch>
		</BrowserRouter>
    </div>
  );
}

export default App;
