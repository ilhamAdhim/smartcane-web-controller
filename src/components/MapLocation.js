import React, { useEffect } from 'react';

const MapLocation = ({ latitude, longitude }) => {
    const mapStyle = {
        overflow: 'hidden',
        background: 'none !important',
        height: '500px',
        width: '600px',
    }

    const mapOuterStyle = {
        position: 'relative',
        textAlign: 'right',
        height: '500px',
        width: '600px',
    }


    return (
        <div style={mapOuterStyle}>
            <div style={mapStyle}>
                <iframe width="100%" height="100%" id="gmap_canvas" title={latitude}
                    src={`https://maps.google.com/maps?q=${latitude}%20${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" alt="loading.." loading="lazy">
                </iframe>
                <a href="https://www.whatismyip-address.com"></a>
                <br />
            </div>
        </div>
    );
};

export default MapLocation;