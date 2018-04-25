import React from "react";
import SwitchCSSTransitionGroup from "switch-css-transition-group";
import { withRouter } from "react-router";

import Index from "../../pages/index/";
import About from "../../pages/about/";
import Partner from "../../pages/partner/";
import Contact from "../../pages/contact/";
import Projects from "../../pages/projects/";
import notFound from "../../pages/notFound/";
import RouteDefaultContainer from "../../containers/defaultContainer";
import RoutePageContainer from "../../containers/pageContainer";

const App = props => {
	const { location } = props;
	return (
		<div className="App">
			<SwitchCSSTransitionGroup
				location={location}
				transitionName="fade"
				transitionEnterTimeout={600}
				transitionLeaveTimeout={600}
			>
				<RouteDefaultContainer exact path="/" component={Index} />
				<RoutePageContainer exact path="/about" component={About} />
				<RoutePageContainer exact path="/partner" component={Partner} />
				<RoutePageContainer exact path="/contact" component={Contact} />
				<RoutePageContainer exact path="/projects" component={Projects} />
				<RouteDefaultContainer component={notFound} />
			</SwitchCSSTransitionGroup>
		</div>
	);
};

export default withRouter(App);
