import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./ctx/autenticacao";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

export default function App() {
	return (
		<Router>
			<AuthProvider>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">
					<Dashboard/>
				</Route>
			</Switch>
			</AuthProvider>
		</Router>
	);
}