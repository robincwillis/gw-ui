import React, { Component } from 'react';


//Video JS
//Doesn't play well with Webpack;
//import videojs from 'video.js/dist/video.js';
//import 'video.js/dist/video-js.css';

import './Video.scss';

export class Video extends Component {

	state = {}

	componentDidMount () {
		this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
			//console.log('onPlayerReady', this);
		});
	}

	setVideoSource () {
		//rtmp/mp4 or rtmp/flv

		this.player.src({type: "video/mp4", src: "http://www.example.com/path/to/video.mp4"});

		this.player.ready( () => {
			this.player.play();
		});
	}

	hideVideoControls () {

	}

	showVideoControls () {

	}

	setVideoPoster () {
		this.player.poster('.../myImage.jpg');
	}

	componentWillUnmount () {
		if (this.player) {
			this.player.dispose();
		}
	}

	videoStatus () {
		if(this.props.streamStatus.loading) {
			return false;
		}

		if (this.props.hideStatus !== "true") {
			let active =  this.props.streamStatus && this.props.streamStatus.data.length > 0 ? this.props.streamStatus.data[0].attributes.up : false;

			return (
				<div className={active ? 'video-status connected' : 'video-status'}>
					<span className="indicator"/>
					<span className="status-text">{active ? 'Live' : 'Not Connected'}</span>
				</div>
			);
		}
	}

	liveAd () {
		if (this.props[this.props.context].artwork) {
			console.log(this.props.liveAds.artwork.attributes.url);
			return (
				<div className="live-ad-overlay">
					<img src={this.props[this.props.context].artwork.attributes.url} />
				</div>
			);
		}
	}

	videoClassName () {
		let className = "vjs-transmit video-js vjs-big-play-centered";
		if (!this.props.active) {
			className += " vjs-inactive";
		}
		return className;
	}

	render() {
		return (
			<div data-vjs-player>
				{this.videoStatus()}
				{this.liveAd()}
				<video ref={ node => this.videoNode = node } className={this.videoClassName()}></video>
			</div>
		);
	}
}



export default Video;

