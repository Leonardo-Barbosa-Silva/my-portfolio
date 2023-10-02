import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";
import features from '../features.json';

const MapChart = () => {

  const isSmallScreen = window.matchMedia('(max-width: 800px)').matches

  return (
    <>
      {!isSmallScreen && (
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [70, -10, 0],
            center: [0, -15],
            scale: 400
          }}
        >
          <Geographies
            geography={features}
            fill="#001122"
            stroke="#FFFFFF"
            strokeWidth={0.4}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Annotation
            subject={[-48.633308, -21.550520]}
            dx={-90}
            dy={-30}
            connectorProps={{
              stroke: "#FFFFFF",
              strokeWidth: 2,
              strokeLinecap: "round"
            }}
          >
            <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
              {"Me"}
            </text>
          </Annotation>
        </ComposableMap>
      )}

      {isSmallScreen && (
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [100, 15, 5],
            center: [0, -5],
            scale: 420
          }}
        >
          <Geographies
            geography={features}
            fill="#001122"
            stroke="#FFFFFF"
            strokeWidth={0.4}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Annotation
            subject={[-48.633308, -21.550520]}
            dx={-20}
            dy={-70}
            connectorProps={{
              stroke: "#FFFFFF",
              strokeWidth: 2,
              strokeLinecap: "round"
            }}
          >
            <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
              {"Me"}
            </text>
          </Annotation>
        </ComposableMap>
      )}
    </>
  );
};

export default MapChart;
