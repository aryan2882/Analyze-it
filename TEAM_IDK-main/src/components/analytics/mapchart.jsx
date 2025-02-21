// import React from "react";
// import DatamapsIndia from "react-datamaps-india";
// import "./MapChart.css"; // Import the CSS file

// const MapChart = () => {
//   return (
//     <div className="map-container"> {/* Applied CSS class */}
//       <DatamapsIndia
//         regionData={{
//           Maharashtra: { value: 10 },
//           Rajasthan: { value: 1000 },
//           Gujarat: { value: 800 },
//           Karnataka: { value: 700 },
//           TamilNadu: { value: 190 },
//           Kerala: { value: 890 },
//           "Andaman & Nicobar Island": { value: 800 },
//           "Andhra Pradesh": { value: 1000 },
//           "Arunachal Pradesh": { value: 800 },
//           Assam: { value: 800 },
//           Bihar: { value: 800 },
//           Chandigarh: { value: 800 },
//           Chhattisgarh: { value: 800 },
//           "Dadara & Nagar Haveli": { value: 800 },
//           "Daman & Diu": { value: 800 },
//           Delhi: { value: 800 },
//           Goa: { value: 800 },
//           Haryana: { value: 800 },
//           "Himachal Pradesh": { value: 800 },
//           "Jammu & Kashmir": { value: 800 },
//           Jharkhand: { value: 800 },
//           Lakshadweep: { value: 800 },
//           "Madhya Pradesh": { value: 800 },
//           Manipur: { value: 800 },
//           Meghalaya: { value: 800 },
//           Mizoram: { value: 800 },
//           Nagaland: { value: 800 },
//           Odisha: { value: 800 },
//           Puducherry: { value: 800 },
//           Punjab: { value: 800 },
//           Sikkim: { value: 800 },
//           "Tamil Nadu": { value: 800 },
//           Telangana: { value: 800 },
//           Tripura: { value: 800 },
//           "Uttar Pradesh": { value: 800 },
//           Uttarakhand: { value: 800 },
//           "West Bengal": { value: 800 }
//         }}
//         hoverComponent={({ value }) => {
//           return (
//             <div>
//               <div>{value.name}</div>
//             </div>
//           );
//         }}
//         mapLayout={{
     
//           legendTitle: "Number of Tenders",
//           startColor: "pink",
//           endColor: "blue",
//           hoverTitle: "Count",
//           noDataColor: "#f5f5f5",
//           borderColor: "black",
//           hoverBorderColor: "#8D8D8D",
//           hoverColor: "green",
//         }}
//         className="datamap" 
//       />
//     </div>
//   );
// };

// export default MapChart;

// import React from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { feature } from "topojson-client";
// import worldData from "world-atlas/countries-110m.json";

// // Convert TopoJSON to GeoJSON
// const worldMap = feature(worldData, worldData.objects.countries);

// // Country Frequency Data stays the same
// const countryFrequency = {
//   "United Kingdom": 495478,
//   Germany: 9495,
//   France: 8557,
//   Ireland: 8196,
//   Spain: 2533,
//   Netherlands: 2371,
//   Belgium: 2069,
//   Switzerland: 2002,
//   Portugal: 1519,
//   Australia: 1259,
//   Norway: 1086,
//   Italy: 803,
//   "Channel Islands": 758,
//   Finland: 695,
//   Cyprus: 622,
//   Sweden: 462,
//   Austria: 401,
//   Denmark: 389,
//   Japan: 358,
//   Poland: 341,
//   Israel: 297,
//   USA: 291,
//   "Hong Kong": 288,
//   Singapore: 229,
//   Iceland: 182,
//   Canada: 151,
//   Greece: 146,
//   Malta: 127,
//   "United Arab Emirates": 68,
//   "European Union": 61,
//   "South Africa": 58,
//   Lebanon: 45,
//   Lithuania: 35,
//   Brazil: 32,
//   "Czech Republic": 30,
//   Bahrain: 19,
//   "Saudi Arabia": 10,
// };

// const countryNameFixes = {
//   "United States of America": "USA",
//   Czechia: "Czech Republic",
//   "United Arab Emirates": "UAE",
//   "South Africa": "RSA",
//   Ireland: "EIRE",
// };

// const getColor = (frequency) => {
//   if (frequency === 0) return "#E0E0E0";
//   if (frequency > 8000) return "#0D47A1";
//   if (frequency < 1000) return "#87CEEB";
//   return "#FFD700";
// };

// const Tooltip = ({ x, y, country, frequency }) => (
//   <div
//     style={{
//       position: "absolute",
//       left: x,
//       top: y,
//       background: "rgba(0,0,0,0.8)",
//       color: "white",
//       padding: "5px 10px",
//       borderRadius: "4px",
//       fontSize: "12px",
//       pointerEvents: "none"
//     }}
//   >
//     <div>{country}</div>
//     <div>Count: {frequency.toLocaleString()}</div>
//   </div>
// );

// const MapChart = () => {
//   const [tooltip, setTooltip] = React.useState(null);

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-[1000px] h-[600px] relative bg-gray-100 rounded-lg shadow-lg p-6">
//         <h2 className="text-xl font-bold mb-4 text-gray-800">Number of Records by Country</h2>
//         <div className="h-[500px]">
//           <ComposableMap
//             projectionConfig={{
//               scale: 160,
//               center: [0, 45]
//             }}
//             width={1000}
//             height={500}
//           >
//             <Geographies geography={worldMap}>
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   let countryName = geo.properties.name;
                  
//                   if (countryNameFixes[countryName]) {
//                     countryName = countryNameFixes[countryName];
//                   }

//                   const frequency = countryFrequency[countryName] || 0;
//                   const color = getColor(frequency);

//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={color}
//                       stroke="#FFFFFF"
//                       strokeWidth={0.5}
//                       style={{
//                         default: { 
//                           fill: color,
//                           outline: "none"
//                         },
//                         hover: {
//                           fill: color,
//                           outline: "none",
//                           cursor: "pointer"
//                         },
//                         pressed: {
//                           fill: color,
//                           outline: "none"
//                         }
//                       }}
//                       onMouseEnter={(evt) => {
//                         const { pageX, pageY } = evt;
//                         setTooltip({
//                           x: pageX,
//                           y: pageY,
//                           country: countryName,
//                           frequency
//                         });
//                       }}
//                       onMouseLeave={() => {
//                         setTooltip(null);
//                       }}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>
//         </div>

//         {tooltip && <Tooltip {...tooltip} />}

//         <div className="absolute bottom-6 left-6 bg-white p-4 rounded-md shadow-md">
//           <div className="text-sm font-semibold mb-2">Legend</div>
//           <div className="flex items-center gap-2 mb-1">
//             <div className="w-6 h-4 bg-[#0D47A1]" />
//             <span className="text-xs text-gray-600">{"> 8000"}</span>
//           </div>
//           <div className="flex items-center gap-2 mb-1">
//             <div className="w-6 h-4 bg-[#FFD700]" />
//             <span className="text-xs text-gray-600">1000 - 8000</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-4 bg-[#87CEEB]" />
//             <span className="text-xs text-gray-600">{"< 1000"}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapChart;


import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";

// Convert TopoJSON to GeoJSON
const worldMap = feature(worldData, worldData.objects.countries);

// Country Frequency Data (kept the same)
const countryFrequency = {
     "United Kingdom": 495478,
    Germany: 9495,
    France: 8557,
    Ireland: 8196,
    Spain: 2533,
    Netherlands: 2371,
    Belgium: 2069,
    Switzerland: 2002,
    Portugal: 1519,
    Australia: 1259,
    Norway: 1086,
    Italy: 803,
    "Channel Islands": 758,
    Finland: 695,
    Cyprus: 622,
    Sweden: 462,
    Austria: 401,
    Denmark: 389,
    Japan: 358,
    Poland: 341,
    Israel: 297,
    USA: 291,
    "Hong Kong": 288,
    Singapore: 229,
    Iceland: 182,
    Canada: 151,
    Greece: 146,
    Malta: 127,
    "United Arab Emirates": 68,
    "European Union": 61,
    "South Africa": 58,
    Lebanon: 45,
    Lithuania: 35,
    Brazil: 32,
    "Czech Republic": 30,
    Bahrain: 19,
    "Saudi Arabia": 10,
  };

const countryNameFixes = {
  "United States of America": "USA",
  Czechia: "Czech Republic",
  "United Arab Emirates": "UAE",
  "South Africa": "RSA",
  Ireland: "EIRE",
};

const getColor = (frequency) => {
  if (frequency === 0) return "#E0E0E0";
  if (frequency > 8000) return "#0D47A1";
  if (frequency < 1000) return "#87CEEB";
  return "#FFD700";
};

const Tooltip = ({ x, y, country, frequency }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      background: "rgba(31, 41, 55, 0.8)",
      color: "#E5E7EB",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: "14px",
      pointerEvents: "none",
      border: "1px solid #4B5563"
    }}
  >
    <div className="font-semibold">{country}</div>
    <div>Count: {frequency.toLocaleString()}</div>
  </div>
);

const MapChart = () => {
  const [tooltip, setTooltip] = React.useState(null);

  return (
    <div className="relative w-full h-full min-h-[550px] -mt-6">
      <ComposableMap
        projectionConfig={{
          scale: 170, // Increased scale
          center: [0, 45]
        }}
      >
        <Geographies geography={worldMap}>
          {({ geographies }) =>
            geographies.map((geo) => {
              let countryName = geo.properties.name;
              if (countryNameFixes[countryName]) {
                countryName = countryNameFixes[countryName];
              }
              const frequency = countryFrequency[countryName] || 0;
              const color = getColor(frequency);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={color}
                  stroke="#4B5563"
                  strokeWidth={0.5}
                  style={{
                    default: { 
                      fill: color,
                      outline: "none"
                    },
                    hover: {
                      fill: color,
                      outline: "none",
                      cursor: "pointer"
                    },
                    pressed: {
                      fill: color,
                      outline: "none"
                    }
                  }}
                  onMouseEnter={(evt) => {
                    const { pageX, pageY } = evt;
                    setTooltip({
                      x: pageX,
                      y: pageY,
                      country: countryName,
                      frequency
                    });
                  }}
                  onMouseLeave={() => {
                    setTooltip(null);
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && <Tooltip {...tooltip} />}

      <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-75 p-4 rounded-lg">
        <div className="text-sm font-semibold text-gray-200 mb-2">Legend</div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-5 h-4 bg-[#0D47A1]" />
          <span className="text-sm text-gray-300">{"Highly dense"}</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-5 h-4 bg-[#FFD700]" />
          <span className="text-sm text-gray-300">Moderately dense</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-4 bg-[#87CEEB]" />
          <span className="text-sm text-gray-300">{"Less dense"}</span>
        </div>
      </div>
    </div>
  );
};

export default MapChart;