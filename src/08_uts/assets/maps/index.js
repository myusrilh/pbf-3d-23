import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    height: '333px',
    width: '90%',
};

export class Maps extends React.Component {
    render() {
        return (
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={
              {
                lat: 13.758468,
                lng: 100.567481
              }
            }
            scrollwheel={false}
          />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize'
})(Maps);

