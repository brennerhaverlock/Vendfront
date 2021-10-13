import PropTypes from "prop-types";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const markerIcon = '/assets/images/no-placeholder/marker.png'

const GoogleMap = ({latitude, longitude, height, ...props}) => {
    const mapStyles = {};

    return (
        <div className="position-relative" style={{height: height ? height : 500}}>
            <Map
                google={props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={{lat: latitude, lng: longitude}}
            >
                <Marker
                    position={{
                        lat: latitude,
                        lng: longitude
                    }}
                    icon={{
                        url: markerIcon,
                    }}
                    animation={props.google.maps.Animation.BOUNCE}
                />
            </Map>
        </div>
    );
};

GoogleMap.propTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    height: PropTypes.number
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC6iKLVzr34W23jAZDT3HlrElOHfK6IH_w')
})(GoogleMap);