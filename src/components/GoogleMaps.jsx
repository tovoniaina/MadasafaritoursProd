import { React, Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'
var ReactDOM = require('react-dom'); 

class MapContainer extends Component {
    render() {
        return(
            <Map 
            google={this.props.google}
            style = {{width: "100%" , height: "100%"}}
            zoom = {10}
            initialCenter = {
                {
                    lat: -18.913440700529915,
                    long: 47.52502586971359
                }
            }
            
            />
        );
    }
}


export default GoogleApiWrapper ({
    apikey: "AIzaSyBCD6p9T3VXmd63fgBW7PWJKtSgfMrAoh0"
}) (MapContainer)

// const element = GoogleApiWrapper;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )
