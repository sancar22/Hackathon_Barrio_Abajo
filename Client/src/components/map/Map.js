import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './Map.css'
import { Map, TileLayer, Polygon, Popup, Marker } from "react-leaflet";

function Maps(props) {
  const baPolygon = [
      [10.992702,-74.789250],
      [10.991511,-74.789181],
      [10.991158,-74.789149],
      [10.990768,-74.789179],
      [10.990105,-74.789245],
      [10.988715,-74.789493],
      [10.988176,-74.787686],
      [10.987384,-74.785031],
      [10.986713,-74.782541],
      [10.986291,-74.780885],
      [10.986145,-74.779631],
      [10.985930,-74.777677],
      [10.985508,-74.776099],
      [10.987436,-74.777221],
      [10.987788,-74.777168],
      [10.988003,-74.777563],
      [10.990731,-74.779780],
      [10.992598,-74.780026],
      [10.994775,-74.781314],
      [10.995369, -74.781717],
      [10.992704, -74.789235]
    ]


  return (
    
      <div>
         <Map className="map" center={[10.989941, -74.783702]} zoom={16}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polygon positions={baPolygon}/>
          <Marker position={[10.9899615,-74.7846386]}/>
        </Map>
        
      </div> 
      
  );
}

export default withRouter(Maps);
