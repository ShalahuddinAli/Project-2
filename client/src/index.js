import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Header />
		<App />
		<Footer />
	</Router>
);
