import React from 'react';
import mapboxgl from 'mapbox-gl';
import { himitsu } from "../config/config";
import '../Styles/map.css';


mapboxgl.accessToken = himitsu.mapboxAPI;


class ZoningMap extends React.Component {
    map;

    componentDidUpdate() {
        // this.setFill();
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/nyjacob/cjkls0vmj0mz52rqey0snp39t',
            center: [-74.109661, 41.881201],
            zoom: 11.0
        });

        this.map.on('load', () => {
            this.map.addSource('tmarble_shp-09wfzs', {
                "type": "vector",
                "url": "mapbox://nycjacob.c2q8h92i"
            });
            this.map.addLayer({
                "id": "tmarble-parcels-shp",
                "type": "fill",
                "source": "tmarble_shp-09wfzs",
                "source-layer": "tmarble_shp-09wfzs",
                "paint": {
                    "fill-opacity": 0.1
                }
            });
            // this.setFill();
        });

        this.map.on('mousemove', (e) => {
           const features = this.map.queryRenderedFeatures(e.point);
           if (features && features[0]){
               console.log( features[0].properties );
           }
        });
    }

    render(){
        return (
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="container zone-legend">
                    <div className="row">
                        <div className="col-sm"><p><strong>Zone borders:</strong> Hover over zone labels for description</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="legend-key A2 col" data-toggle="popover" data-placement="bottom"
                             data-content="A-2 Residence District">A-2
                        </div>
                        <div className="legend-key A3 col" data-toggle="popover" data-placement="bottom"
                             data-content="A-3 Residence District">A-3
                        </div>
                        <div className="legend-key A4 col" data-toggle="popover" data-placement="bottom"
                             data-content="A-4 Residence District">A-4
                        </div>
                        <div className="legend-key B1 col" data-toggle="popover" data-placement="bottom" data-content="B-1 General Business District:
                                permit the use of existing structures for business uses appropriate to the predominantly small lots in the district; to preserve
                                the existing scale and character of the business area; and to reduce or prevent traffic congestion and safety hazards. New structures
                                intended for business use are subject to more stringent development standards necessary to maintain traffic safety and avoid conflicts between new and existing structures and uses.">B-1
                        </div>
                        <div className="legend-key B2 col" data-toggle="popover" data-placement="bottom" data-content="B-2 Highway Business District: provide opportunities for low-density business development,
                                particularly uses with a highway orientation, subject to development standards intended to promote traffic safety on a heavily traveled highway.">B-2
                        </div>
                        <div className="legend-key R1 col" data-toggle="popover" data-placement="bottom"
                             data-content="R-1 Residence District">R-1
                        </div>
                        <div className="legend-key R3 col" data-toggle="popover" data-placement="bottom"
                             data-content="R-3 Residence District">R-3
                        </div>
                        <div className="legend-key SR col" data-toggle="popover" data-placement="bottom" data-content="SR Special Residence District:  preserve the historic residential character of portions of Stone Ridge
                                while permitting certain limited nonresidential uses in existing buildings and on vacant land, subject to careful controls to preserve the scale and character of the area.">SR
                        </div>
                        <div className="legend-key I1 col" data-toggle="popover" data-placement="bottom"
                             data-content="Light Industrial District">I-1
                        </div>
                        <div className="legend-key IB col" data-toggle="popover" data-placement="bottom"
                             data-content="Industrial Business District">I-B
                        </div>
                    </div>
                </div>
                <div ref={el => this.mapContainer = el} id="mapGL"></div>
                {/*<div id="overlay">*/}
                    {/*<div className='map-overlay' id='features'>*/}
                        {/*<div id='pd'><p>Hover over a parcel for details!</p></div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div id="legend-overlay">
                    <div id="acres-legend">
                        <div className="under10">0 - 10 Acres</div>
                        <div className="over10">10 - 25 Acres</div>
                        <div className="over25">over 25 Acres</div>
                        <div className="over100">over 100 Acres</div>
                    </div>
                </div>

            </div>
        );
    }
}


export default ZoningMap;