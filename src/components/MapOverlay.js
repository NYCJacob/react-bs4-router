import React from 'react';


class MapOverlay extends React.Component {


    render() {

        const { features } = this.props;

        return (
            <div id="overlay">
                <div className='map-overlay' id='features'>
                    <div id='pd'><p>Hover over a parcel for details!</p></div>
                </div>
            </div>
        )
    }
}