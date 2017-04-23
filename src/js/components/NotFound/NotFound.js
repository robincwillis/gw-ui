import React, { Component } from 'react';
import { Link } from 'react-router';
//import './NotFound.css'

import Footer from 'components/AppFooter/AppFooter'

export default class NotFound extends Component {
  render () {
    return (
      <div className="main-content-area">
				<div className="page-content">
					<div className="flex-center-container">
						<div className="content-area-notification rich-text">
							<h1>Page Not Found</h1>
							<p className="lg light-text-color">This probably isnt what you are looking for.</p>
							<Link to="/" className="button">Take me home</Link>
							<a href="mailto:robincwillis.com" className="button secondary">Contact Us</a>
						</div>
					</div>
				</div>
			</div>
    )
  }
}
