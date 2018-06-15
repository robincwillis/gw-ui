import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';

import './Countdown.scss';

export class Countdown extends Component {

	state = {
		secondsRemaining : this.props.seconds
	}

	tick = () => {
		this.setState({secondsRemaining: this.state.secondsRemaining - 1});
		if (this.state.secondsRemaining <= 0) {
      this.props.clearInterval(this.interval);
      this.props.onComplete();
    }
	}

	componentDidMount() {
		this.interval = this.props.setInterval(this.tick, 1000);
	}

	render() {
		const minutes = Math.floor(this.state.secondsRemaining / 60);
		const minutesFormated = ("0" + minutes).slice(-2);
		const seconds = this.state.secondsRemaining - minutes * 60;
		const secondsFormated = ("0" + seconds).slice(-2);

		return (
			<div className="countdown">{ minutes > 0 ? `${minutesFormated}:${secondsFormated}` : `${minutesFormated}:${secondsFormated}` }</div>
		);
	}
}

Countdown.defaultProps = {
	seconds : 0,
	onComplete: () => {}
};

export default ReactTimeout(Countdown);
