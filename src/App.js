import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Page/Home';
import AboutMe from './components/Page/AboutMe';
import Resume from './components/Page/Resume';
import Projects from './components/Page/Projects';
import Contact from './components/Page/Contact';
import NotFound from './components/Page/NotFound';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path={'/'}>
						<Home />
					</Route>
					<Route path={'/about-me'}>
						<AboutMe />
					</Route>
					<Route path={'/resume'}>
						<Resume />
					</Route>
					<Route path={'/projects'}>
						<Projects />
					</Route>
					<Route path={'/contact'}>
						<Contact />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
