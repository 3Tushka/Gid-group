import React from 'react'
import './_map.scss';

import GoogleMapReact from 'google-map-react';

import MapPoint from './MapPoint';

function ContactMap() {

    const defaultPropsForMap = {
        center: {
            lat: 50.459459,
            lng: 30.406034
        },
        zoom: 16
    };

    return (
        <div className="map">
            <div className="map__wrapper">
                <div className="map__content">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBjd-GJzN_AVPm1ASLG0p9xPKZrJkGRTXo" }}
                        defaultCenter={defaultPropsForMap.center}
                        defaultZoom={defaultPropsForMap.zoom}
                        yesIWantToUseGoogleMapApiInternals
                    >
                        <MapPoint
                            position={{
                                lat: 50.459459,
                                lng: 30.406034
                            }}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}

export default ContactMap