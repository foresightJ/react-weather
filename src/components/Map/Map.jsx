import React, { Component } from 'react';
import styles from './Map.module.css';
import mapStyle from './map-style';

class Map extends Component {
	mapDiv = React.createRef();
	// mapEl = document.getElementById('mapDiv');

	setMap() {
		if (this.props.lat && this.props.lng) {
			const location = { lat: this.props.lat, lng: this.props.lng };
			const map = new window.google.maps.Map(this.mapDiv.current, {
				zoom: this.props.zoom || 12,
				center: location,
				disableDefaultUI: true,
				styles: mapStyle,
			});
			new window.google.maps.Marker({ position: location, map: map });
		}
	}

	componentDidMount() {
		this.setMap();
	}
	componentDidUpdate() {
		this.setMap();
	}

	render() {
		return <div ref={this.mapDiv} className={styles.Map}></div>;
	}
}

export default Map;
