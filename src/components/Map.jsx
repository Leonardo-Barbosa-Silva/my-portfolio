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
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [70, -10, 0],
        center: [0, -15],
        scale: 300
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
        dx={-150}
        dy={-20}
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
  );
};

export default MapChart;
