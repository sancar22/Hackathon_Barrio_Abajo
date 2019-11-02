import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeButton } from "../../actions";
import Aduana from "../aduana/Aduana";
import Mural from "../mural/Mural";
import Museo from "../museo/Museo";
import Carnaval from "../carnaval/Carnaval";
import "../museo/Museo.css";
import "../aduana/Aduana.css";
import "../mural/Mural.css";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer, Polygon, Popup, Marker } from "react-leaflet";
import L from "leaflet";

import "./HomePage.css";

function HomePage(props) {
  const dispatch = useDispatch();

  const baPolygon = [
    [10.992702, -74.78925],
    [10.991511, -74.789181],
    [10.991158, -74.789149],
    [10.990768, -74.789179],
    [10.990105, -74.789245],
    [10.988715, -74.789493],
    [10.988176, -74.787686],
    [10.987384, -74.785031],
    [10.986713, -74.782541],
    [10.986291, -74.780885],
    [10.986145, -74.779631],
    [10.98593, -74.777677],
    [10.985508, -74.776099],
    [10.987436, -74.777221],
    [10.987788, -74.777168],
    [10.988003, -74.777563],
    [10.990731, -74.77978],
    [10.992598, -74.780026],
    [10.994775, -74.781314],
    [10.995369, -74.781717],
    [10.992704, -74.789235]
  ];

  let myIcon = L.icon({
    iconUrl: "tren.png",
    iconSize: [40, 60]
  });

  let myIcon1 = L.icon({
    iconUrl: "mariposa.png",
    iconSize: [40, 40]
  });

  let myIcon2 = L.icon({
    iconUrl: "marimon.png",
    iconSize: [40, 40]
  });

  let myIcon3 = L.icon({
    iconUrl: "mural.jpg",
    iconSize: [35, 40]
  });

  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const executeScroll1 = () => {
    scrollToRef(myRef1);
  };
  const executeScroll2 = () => {
    scrollToRef(myRef2);
  };
  const executeScroll3 = () => {
    scrollToRef(myRef3);
  };
  const executeScroll4 = () => {
    scrollToRef(myRef4);
  };
  const scrollToRef = ref => {
    window.scrollTo(0, ref.current.offsetTop - 75);
    //ref.current.focus()
  };

  useEffect(() => {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode === 27) {
        dispatch(closeButton());
      }
    };
  });

  return (
    <div>
      <div>
        <Map
          scrollWheelZoom={false}
          className="map"
          center={[10.989941, -74.783702]}
          zoom={16}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polygon positions={baPolygon} />
          <a href="#prueba">
            <Marker
              position={[10.988517, -74.778619]}
              icon={myIcon}
              onClick={executeScroll1}
            >
              <Popup>Aduana</Popup>
            </Marker>
          </a>
          <Marker
            position={[10.986303, -74.778472]}
            icon={myIcon1}
            onClick={executeScroll3}
          >
            <Popup>Museo del Caribe</Popup>
          </Marker>
          <Marker
            position={[10.992788, -74.787784]}
            icon={myIcon2}
            onClick={executeScroll4}
          >
            <Popup>La Casa del Carnaval</Popup>
          </Marker>
          <Marker
            position={[10.9893528, -74.7827108]}
            icon={myIcon3}
            onClick={executeScroll2}
          >
            <Popup>Los Murales</Popup>
          </Marker>
        </Map>
      </div>
      <div ref={myRef1}>
        <Aduana />
      </div>
      <div ref={myRef2}>
        <Mural />
      </div>
      <div ref={myRef3}>
        <Museo />
      </div>
      <div ref={myRef4}>
        <Carnaval />
      </div>
    </div>
  );
}

export default withRouter(HomePage);
