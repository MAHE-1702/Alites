import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../hooks/useTheme';

const RADIUS = 1.3;

// const NODES = [
//   { lat: 20.6,  lng: 78.9   }, //  0 India (HQ)
//   { lat: 40.7,  lng: -74.0  }, //  1 New York
//   { lat: 51.5,  lng: -0.1   }, //  2 London
//   { lat: 35.7,  lng: 139.7  }, //  3 Tokyo
//   { lat: 31.2,  lng: 121.5  }, //  4 Shanghai
//   { lat: 48.9,  lng: 2.3    }, //  5 Paris
//   { lat: -33.9, lng: 151.2  }, //  6 Sydney
//   { lat: 37.8,  lng: -122.4 }, //  7 San Francisco
//   { lat: 55.8,  lng: 37.6   }, //  8 Moscow
//   { lat: 1.3,   lng: 103.8  }, //  9 Singapore
//   { lat: -23.5, lng: -46.6  }, // 10 São Paulo
//   { lat: 19.1,  lng: 72.9   }, // 11 Mumbai
//   { lat: 13.1,  lng: 80.3   }, // 12 Chennai
//   { lat: 28.6,  lng: 77.2   }, // 13 Delhi
//   { lat: 25.2,  lng: 55.3   }, // 14 Dubai
//   { lat: 22.3,  lng: 114.2  }, // 15 Hong Kong
//   { lat: -26.2, lng: 28.0   }, // 16 Johannesburg
//   { lat: 52.4,  lng: 4.9    }, // 17 Amsterdam
//   { lat: 41.0,  lng: 29.0   }, // 18 Istanbul
//   { lat: 43.7,  lng: -79.4  }, // 19 Toronto
//   { lat: 30.0,  lng: 31.2   }, // 20 Cairo
//   { lat: -34.6, lng: -58.4  }, // 21 Buenos Aires
//   { lat: 39.9,  lng: 116.4  }, // 22 Beijing
//   { lat: 34.0,  lng: -118.2 }, // 23 Los Angeles
//   { lat: 37.6,  lng: 55.6   }, // 24 Tehran
// ];

// const ARC_SETS = [
//   // 0 — "A Decade of Measurable Impact" — global reach from India
//   [
//     [0,1],[0,2],[0,9],[1,7],[2,5],[3,4],[4,9],[6,7],[8,2],
//     [0,14],[14,15],[9,15],[0,11],[11,13],[13,14],[0,12],[2,17],
//   ],
//   // 1 — "Full-Spectrum Cybersecurity" — threat vectors across regions
//   [
//     [0,2],[0,9],[0,3],[2,17],[5,18],[1,19],[9,15],[3,22],[4,22],
//     [11,12],[12,13],[14,20],[7,23],[8,17],[15,16],[0,24],[24,8],[1,5],
//   ],
//   // 2 — "Scroll to Explore" — full network, all nodes firing
//   [
//     [0,1],[0,3],[0,4],[0,9],[0,11],[0,14],[1,2],[1,5],[1,19],
//     [2,8],[2,17],[3,22],[4,22],[5,17],[5,18],[6,7],[7,23],[8,18],
//     [9,15],[9,16],[10,7],[11,12],[12,13],[14,15],[14,20],[15,16],
//     [19,10],[20,21],[0,24],[24,8],[6,21],
//   ],
// ];



const NODES = [
  // ── Asia ──
  { lat: 20.6,  lng: 78.9   }, //  0 India (HQ)
  { lat: 19.1,  lng: 72.9   }, //  1 Mumbai
  { lat: 13.1,  lng: 80.3   }, //  2 Chennai
  { lat: 28.6,  lng: 77.2   }, //  3 Delhi
  { lat: 22.6,  lng: 88.4   }, //  4 Kolkata
  { lat: 35.7,  lng: 139.7  }, //  5 Tokyo
  { lat: 34.7,  lng: 135.5  }, //  6 Osaka
  { lat: 37.6,  lng: 127.0  }, //  7 Seoul
  { lat: 31.2,  lng: 121.5  }, //  8 Shanghai
  { lat: 39.9,  lng: 116.4  }, //  9 Beijing
  { lat: 22.3,  lng: 114.2  }, // 10 Hong Kong
  { lat: 1.3,   lng: 103.8  }, // 11 Singapore
  { lat: 13.8,  lng: 100.5  }, // 12 Bangkok
  { lat: 21.0,  lng: 105.8  }, // 13 Hanoi
  { lat: 10.8,  lng: 106.7  }, // 14 Ho Chi Minh City
  { lat: 3.1,   lng: 101.7  }, // 15 Kuala Lumpur
  { lat: 14.6,  lng: 121.0  }, // 16 Manila
  { lat: -6.2,  lng: 106.8  }, // 17 Jakarta
  { lat: 23.7,  lng: 90.4   }, // 18 Dhaka
  { lat: 33.7,  lng: 73.1   }, // 19 Islamabad
  { lat: 24.9,  lng: 67.0   }, // 20 Karachi
  { lat: 31.5,  lng: 74.3   }, // 21 Lahore
  { lat: 27.7,  lng: 85.3   }, // 22 Kathmandu
  { lat: 6.9,   lng: 79.9   }, // 23 Colombo
  { lat: 16.8,  lng: 96.2   }, // 24 Yangon
  { lat: 47.9,  lng: 106.9  }, // 25 Ulaanbaatar
  { lat: 43.3,  lng: 76.9   }, // 26 Almaty
  { lat: 41.3,  lng: 69.3   }, // 27 Tashkent
  { lat: 37.9,  lng: 58.4   }, // 28 Ashgabat
  { lat: 38.6,  lng: 48.9   }, // 29 Tabriz
  { lat: 35.7,  lng: 51.4   }, // 30 Tehran
  { lat: 33.3,  lng: 44.4   }, // 31 Baghdad
  { lat: 33.9,  lng: 35.5   }, // 32 Beirut
  { lat: 31.8,  lng: 35.2   }, // 33 Jerusalem
  { lat: 32.1,  lng: 34.8   }, // 34 Tel Aviv
  { lat: 24.7,  lng: 46.7   }, // 35 Riyadh
  { lat: 25.2,  lng: 55.3   }, // 36 Dubai
  { lat: 23.6,  lng: 58.6   }, // 37 Muscat
  { lat: 26.2,  lng: 50.6   }, // 38 Manama
  { lat: 25.3,  lng: 51.5   }, // 39 Doha
  { lat: 15.4,  lng: 44.2   }, // 40 Sanaa

  // ── Europe ──
  { lat: 51.5,  lng: -0.1   }, // 41 London
  { lat: 48.9,  lng: 2.3    }, // 42 Paris
  { lat: 52.5,  lng: 13.4   }, // 43 Berlin
  { lat: 52.4,  lng: 4.9    }, // 44 Amsterdam
  { lat: 50.8,  lng: 4.4    }, // 45 Brussels
  { lat: 48.2,  lng: 16.4   }, // 46 Vienna
  { lat: 47.4,  lng: 8.5    }, // 47 Zurich
  { lat: 45.5,  lng: 9.2    }, // 48 Milan
  { lat: 41.9,  lng: 12.5   }, // 49 Rome
  { lat: 40.4,  lng: -3.7   }, // 50 Madrid
  { lat: 38.7,  lng: -9.1   }, // 51 Lisbon
  { lat: 45.8,  lng: 15.9   }, // 52 Zagreb
  { lat: 44.8,  lng: 20.5   }, // 53 Belgrade
  { lat: 42.7,  lng: 23.3   }, // 54 Sofia
  { lat: 37.9,  lng: 23.7   }, // 55 Athens
  { lat: 41.0,  lng: 29.0   }, // 56 Istanbul
  { lat: 47.0,  lng: 28.9   }, // 57 Chisinau
  { lat: 50.5,  lng: 30.5   }, // 58 Kyiv
  { lat: 53.9,  lng: 27.6   }, // 59 Minsk
  { lat: 55.8,  lng: 37.6   }, // 60 Moscow
  { lat: 59.9,  lng: 30.3   }, // 61 St. Petersburg
  { lat: 59.4,  lng: 24.7   }, // 62 Tallinn
  { lat: 56.9,  lng: 24.1   }, // 63 Riga
  { lat: 54.7,  lng: 25.3   }, // 64 Vilnius
  { lat: 52.2,  lng: 21.0   }, // 65 Warsaw
  { lat: 50.1,  lng: 14.4   }, // 66 Prague
  { lat: 47.5,  lng: 19.1   }, // 67 Budapest
  { lat: 44.4,  lng: 26.1   }, // 68 Bucharest
  { lat: 60.2,  lng: 25.0   }, // 69 Helsinki
  { lat: 59.9,  lng: 10.7   }, // 70 Oslo
  { lat: 59.3,  lng: 18.1   }, // 71 Stockholm
  { lat: 55.7,  lng: 12.6   }, // 72 Copenhagen
  { lat: 64.1,  lng: -21.9  }, // 73 Reykjavik

  // ── Africa ──
  { lat: 30.0,  lng: 31.2   }, // 74 Cairo
  { lat: 36.8,  lng: 10.2   }, // 75 Tunis
  { lat: 32.9,  lng: 13.2   }, // 76 Tripoli
  { lat: 36.7,  lng: 3.1    }, // 77 Algiers
  { lat: 33.9,  lng: -6.9   }, // 78 Rabat
  { lat: 14.7,  lng: -17.4  }, // 79 Dakar
  { lat: 5.6,   lng: -0.2   }, // 80 Accra
  { lat: 6.4,   lng: 3.4    }, // 81 Lagos
  { lat: 4.4,   lng: 9.7    }, // 82 Douala
  { lat: 3.9,   lng: 11.5   }, // 83 Yaounde
  { lat: 4.4,   lng: 18.6   }, // 84 Bangui
  { lat: 12.4,  lng: -1.5   }, // 85 Ouagadougou
  { lat: 15.6,  lng: 32.5   }, // 86 Khartoum
  { lat: 9.0,   lng: 38.8   }, // 87 Addis Ababa
  { lat: 2.0,   lng: 45.3   }, // 88 Mogadishu
  { lat: -1.3,  lng: 36.8   }, // 89 Nairobi
  { lat: -6.2,  lng: 35.7   }, // 90 Dodoma
  { lat: -25.9, lng: 32.6   }, // 91 Maputo
  { lat: -26.2, lng: 28.0   }, // 92 Johannesburg
  { lat: -33.9, lng: 18.4   }, // 93 Cape Town
  { lat: -20.2, lng: 57.5   }, // 94 Port Louis
  { lat: -18.9, lng: 47.5   }, // 95 Antananarivo
  { lat: 0.4,   lng: 9.5    }, // 96 Libreville
  { lat: -4.3,  lng: 15.3   }, // 97 Kinshasa
  { lat: -8.8,  lng: 13.2   }, // 98 Luanda
  { lat: -15.4, lng: 28.3   }, // 99 Lusaka

  // ── Americas ──
  { lat: 40.7,  lng: -74.0  }, // 100 New York
  { lat: 37.8,  lng: -122.4 }, // 101 San Francisco
  { lat: 34.0,  lng: -118.2 }, // 102 Los Angeles
  { lat: 41.9,  lng: -87.6  }, // 103 Chicago
  { lat: 29.8,  lng: -95.4  }, // 104 Houston
  { lat: 33.7,  lng: -84.4  }, // 105 Atlanta
  { lat: 25.8,  lng: -80.2  }, // 106 Miami
  { lat: 38.9,  lng: -77.0  }, // 107 Washington DC
  { lat: 42.4,  lng: -71.1  }, // 108 Boston
  { lat: 47.6,  lng: -122.3 }, // 109 Seattle
  { lat: 43.7,  lng: -79.4  }, // 110 Toronto
  { lat: 45.5,  lng: -73.6  }, // 111 Montreal
  { lat: 49.3,  lng: -123.1 }, // 112 Vancouver
  { lat: 51.0,  lng: -114.1 }, // 113 Calgary
  { lat: 19.4,  lng: -99.1  }, // 114 Mexico City
  { lat: 20.9,  lng: -89.6  }, // 115 Merida
  { lat: 14.1,  lng: -87.2  }, // 116 Tegucigalpa
  { lat: 10.5,  lng: -66.9  }, // 117 Caracas
  { lat: 4.7,   lng: -74.1  }, // 118 Bogota
  { lat: -0.2,  lng: -78.5  }, // 119 Quito
  { lat: -12.0, lng: -77.0  }, // 120 Lima
  { lat: -33.5, lng: -70.6  }, // 121 Santiago
  { lat: -34.6, lng: -58.4  }, // 122 Buenos Aires
  { lat: -23.5, lng: -46.6  }, // 123 São Paulo
  { lat: -15.8, lng: -47.9  }, // 124 Brasilia
  { lat: -3.1,  lng: -60.0  }, // 125 Manaus
  { lat: 18.5,  lng: -69.9  }, // 126 Santo Domingo
  { lat: 18.1,  lng: -77.3  }, // 127 Kingston
  { lat: 23.1,  lng: -82.4  }, // 128 Havana
  { lat: 9.0,   lng: -79.5  }, // 129 Panama City

  // ── Oceania ──
  { lat: -33.9, lng: 151.2  }, // 130 Sydney
  { lat: -37.8, lng: 145.0  }, // 131 Melbourne
  { lat: -27.5, lng: 153.0  }, // 132 Brisbane
  { lat: -31.9, lng: 115.9  }, // 133 Perth
  { lat: -36.9, lng: 174.8  }, // 134 Auckland
  { lat: -41.3, lng: 174.8  }, // 135 Wellington
  { lat: -9.4,  lng: 160.0  }, // 136 Honiara
  { lat: -17.7, lng: 168.3  }, // 137 Port Vila
];

const ARC_SETS = [
  // 0 — Global Reach from India HQ
  [
    // India cluster outward
    [0,1],[0,2],[0,3],[0,4],[0,11],[0,36],[0,41],[0,100],[0,130],
    [1,11],[1,23],[2,23],[2,12],[3,19],[3,22],[4,18],[4,24],
    // SE Asia web
    [11,12],[11,15],[11,17],[11,10],[12,13],[13,14],[14,17],
    [15,16],[16,17],[10,8],[8,9],[8,5],[5,7],[7,9],
    // Middle East hub
    [36,35],[36,39],[36,38],[36,37],[35,74],[35,31],[31,32],
    [32,34],[34,33],[31,56],[56,30],[30,28],
    // Europe spine
    [41,42],[42,43],[43,44],[44,45],[41,44],[42,51],[50,51],
    [49,48],[48,47],[47,46],[46,43],[41,72],[72,71],[71,70],
    // Africa backbone
    [74,75],[75,77],[77,78],[74,86],[86,87],[87,89],[89,92],[92,93],
    // North America dense
    [100,107],[100,110],[100,108],[100,103],[101,109],[101,102],
    [102,104],[103,107],[104,106],[105,106],[107,108],[109,112],
    [110,111],[111,108],[103,110],[112,113],[101,113],
    // Central/South America
    [104,114],[114,116],[116,129],[129,118],[118,120],[120,121],
    [121,122],[122,123],[123,124],[100,123],[106,126],
    // Oceania
    [130,131],[131,132],[130,134],[17,130],
    // Intercontinental
    [0,87],[0,74],[11,130],[130,101],[41,100],[5,101],[36,74],
  ],

  // 1 — Threat Vectors / Attack Surface
  [
    // Russia threat chains
    [60,58],[60,61],[60,43],[60,56],[60,30],[60,59],[60,65],
    [61,62],[62,63],[63,64],[64,65],[59,58],[58,57],[57,56],
    // China threat chains
    [9,8],[9,5],[9,22],[9,25],[9,7],[9,10],[22,5],[8,5],[10,11],
    // US internal threat web
    [100,107],[100,103],[100,110],[101,102],[101,109],[102,104],
    [103,105],[104,106],[105,107],[107,108],[108,100],[109,101],
    [110,103],[106,114],[114,128],[128,127],[127,126],[126,106],
    // Middle East threat arc
    [0,30],[30,31],[31,32],[31,56],[56,55],[55,54],[54,53],
    [30,28],[28,27],[27,26],[26,25],[56,75],[75,74],[74,77],
    // Africa threat chain
    [74,86],[86,87],[87,88],[88,89],[89,90],[90,91],[91,92],[92,93],
    [81,80],[80,79],[79,77],[77,75],[75,76],[76,74],
    [92,98],[98,97],[97,96],[96,81],[81,85],[85,79],
    // Europe threat web
    [41,44],[44,45],[42,51],[43,65],[65,66],[66,67],[67,68],[68,54],
    [46,47],[47,48],[48,49],[49,55],[55,56],[43,46],[41,45],
    [70,71],[71,72],[72,41],[69,62],[62,59],[59,43],
    // SE Asia threat chain
    [11,14],[14,13],[13,12],[12,16],[16,17],[17,15],[15,11],
    [11,10],[10,9],[9,5],[5,6],[6,7],[7,8],
    // South America threat chain
    [100,117],[117,118],[118,119],[119,120],[120,121],[121,122],
    [122,123],[123,124],[124,125],[125,118],[122,121],[123,122],
    [129,118],[116,129],[114,116],[104,114],[106,129],
    // Intercontinental attacks
    [60,100],[9,100],[41,79],[0,60],[74,41],[36,56],[11,87],
    [100,41],[101,5],[130,11],[0,36],[36,87],[9,36],
  ],

  // 2 — Full Network — All regions firing
  [
    // ── India cluster ──
    [0,1],[0,2],[0,3],[0,4],[1,23],[2,23],[3,19],[4,18],
    [1,2],[2,3],[3,4],[4,1],[0,22],[0,24],[1,24],[2,11],

    // ── South/SE Asia ──
    [11,12],[11,15],[11,17],[12,13],[13,14],[15,16],[16,17],
    [18,19],[19,20],[20,21],[22,23],[23,24],[14,15],[12,15],
    [13,16],[17,16],[11,14],[12,24],[18,22],[19,21],[20,23],

    // ── East Asia ──
    [5,6],[5,7],[7,8],[8,9],[9,10],[10,11],[9,22],[8,10],
    [6,7],[7,9],[5,8],[6,8],[9,25],[25,26],[26,27],[7,25],

    // ── Central Asia ──
    [26,27],[27,28],[28,29],[29,30],[26,28],[27,29],[28,30],
    [25,27],[26,9],[27,19],[28,36],[29,36],[30,28],

    // ── West Asia / Middle East ──
    [30,31],[31,32],[32,33],[33,34],[34,31],[30,35],[35,36],
    [36,37],[37,38],[38,39],[39,40],[40,35],[35,74],[36,38],
    [31,56],[32,56],[34,36],[33,35],[36,39],[38,40],[39,35],
    [30,56],[31,74],[35,40],[36,74],[37,39],[38,36],

    // ── Europe West ──
    [41,42],[41,44],[42,43],[43,44],[44,45],[45,42],[45,41],
    [46,47],[47,48],[48,49],[49,50],[50,51],[42,51],[41,51],
    [43,46],[44,46],[47,42],[48,42],[49,55],[50,49],[51,42],
    [41,43],[42,44],[43,45],[46,48],[47,49],[48,50],[49,51],

    // ── Europe East ──
    [52,53],[53,54],[54,55],[55,56],[56,57],[57,58],[58,59],
    [59,60],[60,61],[61,62],[62,63],[63,64],[64,65],[65,66],
    [66,67],[67,68],[68,54],[52,54],[53,55],[56,58],[57,59],
    [60,58],[61,63],[62,64],[63,65],[64,66],[65,67],[66,68],

    // ── Nordics ──
    [69,70],[70,71],[71,72],[72,69],[70,73],[41,72],[41,70],
    [69,71],[70,72],[71,73],[69,62],[70,63],[71,64],[72,65],

    // ── Africa North ──
    [74,75],[75,76],[76,77],[77,78],[78,79],[74,86],[74,77],
    [75,74],[76,75],[77,76],[78,77],[79,78],[75,77],[76,78],

    // ── Africa West/Central ──
    [79,80],[80,81],[81,82],[82,83],[83,84],[84,85],[85,79],
    [80,85],[81,85],[79,81],[80,82],[81,83],[82,84],[83,85],
    [96,97],[97,98],[98,99],[96,81],[97,81],[96,82],[85,80],

    // ── Africa East/South ──
    [86,87],[87,88],[88,89],[89,90],[90,91],[91,92],[92,93],
    [86,89],[87,89],[88,90],[89,91],[90,92],[91,93],[92,94],
    [94,89],[95,91],[94,95],[93,91],[89,92],[87,90],[86,88],
    [98,92],[99,92],[99,91],[98,97],[99,97],[92,99],[91,99],

    // ── North America dense ──
    [100,101],[100,103],[100,107],[100,108],[100,110],[100,109],
    [101,102],[101,109],[101,113],[102,104],[102,114],[103,105],
    [103,107],[103,110],[104,106],[104,105],[104,114],[105,106],
    [105,107],[106,107],[107,108],[107,110],[108,111],[108,110],
    [109,112],[109,113],[110,111],[111,112],[112,113],[113,109],
    [100,102],[100,104],[100,106],[101,103],[101,107],[101,110],
    [102,103],[102,109],[103,108],[103,109],[104,107],[105,108],
    [106,108],[106,110],[107,109],[108,112],[109,110],[110,112],
    [100,111],[101,112],[102,110],[103,112],[104,111],[105,110],

    // ── Central America / Caribbean ──
    [104,114],[114,115],[115,116],[116,129],[129,128],[128,127],
    [127,126],[126,106],[106,129],[114,116],[115,129],[116,118],
    [128,126],[127,129],[126,129],[106,128],[104,116],[102,114],

    // ── South America dense ──
    [117,118],[118,119],[119,120],[120,121],[121,122],[122,123],
    [123,124],[124,125],[125,118],[117,119],[118,120],[119,121],
    [120,122],[121,123],[122,124],[123,125],[124,118],[125,117],
    [117,120],[118,121],[119,122],[120,123],[121,124],[122,125],
    [100,117],[100,123],[106,117],[129,118],[116,118],[114,117],
    [117,121],[118,122],[119,123],[120,124],[121,125],[122,118],

    // ── Oceania ──
    [130,131],[131,132],[132,133],[130,134],[134,135],[135,136],
    [136,137],[130,132],[131,133],[132,134],[133,130],[134,136],
    [135,137],[130,136],[131,134],[132,135],[133,134],

    // ── Intercontinental backbone ──
    [0,11],[0,36],[0,41],[0,74],[0,100],[0,130],[0,87],
    [11,36],[11,130],[11,87],[11,17],[17,130],[17,11],
    [36,56],[36,74],[36,41],[36,9],[36,87],
    [41,100],[41,122],[41,79],[41,72],[41,74],
    [42,107],[43,60],[60,100],[60,56],[60,9],
    [56,74],[74,87],[87,92],[92,81],[81,41],
    [130,101],[130,5],[5,101],[5,9],[9,36],
    [100,122],[100,41],[101,5],[74,41],[89,36],
    [60,43],[9,100],[5,100],[41,60],[56,41],
    [74,56],[87,36],[92,74],[11,41],[36,100],
    [130,9],[134,5],[133,11],[131,17],[132,16],
    [73,100],[73,41],[70,41],[69,41],[72,100],
  ],
];
function latLngToVec3(lat, lng, r = RADIUS) {
  const phi   = (90 - lat)  * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  );
}

function EarthSphere() {
  const texture = useTexture('/earth6.png');
  return (
    <mesh>
      <sphereGeometry args={[RADIUS, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function makeArc(a, b, lift = 1.35, steps = 40) {
  const mid = new THREE.Vector3()
    .addVectors(a, b)
    .normalize()
    .multiplyScalar(RADIUS * lift);
  return new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(steps);
}
// function makeArc(a, b, steps = 40) {
//   const dist = a.distanceTo(b);
//   const lift = 1.35 + dist * 0.22;   // longer arc = more liftT
//   const mid = new THREE.Vector3()
//     .addVectors(a, b)
//     .normalize()
//     .multiplyScalar(RADIUS * lift);
//   return new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(steps);
// }

function PulsingNode({ position, index, accentPrimary, accentHover }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const s = 1 + 0.38 * Math.sin(clock.elapsedTime * 3.0 + index * 0.95);
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.030, 8, 8]} />
      <meshBasicMaterial color={index === 0 ? accentHover : accentPrimary} transparent opacity={0.9} />
    </mesh>
  );
}

function HaloRing({ accentPrimary }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[RADIUS, 0.005, 8, 128]} />
      <meshBasicMaterial color={accentPrimary} transparent opacity={0.20} />
    </mesh>
  );
}

function GlobeScene({ activeSection, isDragging, velocity, dragOffset, mousePos, accentPrimary, accentHover }) {
  const groupRef  = useRef();
  const autoAngle = useRef(0);
  // Smoothed hover offsets (lerped each frame)
  const hoverY = useRef(0);
  const hoverX = useRef(0);

  useFrame((_, delta) => {
    autoAngle.current += delta * 0.22;

    if (!isDragging.current) {
      // Inertia: carry last drag velocity forward then decay
      dragOffset.current.y += velocity.current.y;
      dragOffset.current.x += velocity.current.x;
      velocity.current.x *= 0.90;
      velocity.current.y *= 0.90;
      // Slowly re-center tilt
      dragOffset.current.x *= 0.97;

      // Lerp hover influence — full-screen mouse drives strong globe drift
      // mousePos.x (left→right, -0.5→+0.5) rotates Y axis
      // mousePos.y (top→bottom, -0.5→+0.5) rotates X axis
      hoverY.current += (mousePos.current.x * 3.0 - hoverY.current) * 0.06;
      hoverX.current += (mousePos.current.y * 1.1 - hoverX.current) * 0.06;
    } else {
      // Drag is active — fade out hover influence so drag feels crisp
      hoverY.current *= 0.85;
      hoverX.current *= 0.85;
    }

    dragOffset.current.x = Math.max(-0.75, Math.min(0.75, dragOffset.current.x));

    groupRef.current.rotation.y = autoAngle.current + dragOffset.current.y + hoverY.current;
    groupRef.current.rotation.x = dragOffset.current.x + hoverX.current;
  });

  const nodePositions = useMemo(
    () => NODES.map(n => latLngToVec3(n.lat, n.lng)),
    [],
  );

  const arcPoints = useMemo(() => {
    const set = ARC_SETS[activeSection] ?? ARC_SETS[0];
    return set.map(([a, b]) => makeArc(nodePositions[a], nodePositions[b]));
  }, [activeSection, nodePositions]);

  return (
    <group ref={groupRef}>
      <EarthSphere />
      <HaloRing accentPrimary={accentPrimary} />
      {nodePositions.map((pos, i) => (
        <PulsingNode key={i} position={pos} index={i} accentPrimary={accentPrimary} accentHover={accentHover} />
      ))}
      {arcPoints.map((pts, i) => (
        <Line
          key={`s${activeSection}-${i}`}
          points={pts}
          color={accentHover}
          lineWidth={1.0}
          transparent
          opacity={0.9}
        />
      ))}
    </group>
  );
}

export default function ThreatGlobe({ activeSection = 0 }) {
  const { theme } = useTheme();
  const wrapperRef = useRef(null);
  const isDragging = useRef(false);
  const lastPos    = useRef({ x: 0, y: 0 });
  const velocity   = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const mousePos   = useRef({ x: 0, y: 0 }); // normalized full-screen, -0.5 to +0.5

  // Resolve accent colors from theme
  const accentPrimary = theme === 'dark' ? '#9B59F7' : '#0054D2';
  const accentHover = theme === 'dark' ? '#A875F8' : '#0080FF';

  // Track mouse across the entire window — no click needed
  useEffect(() => {
    const handler = (e) => {
      mousePos.current = {
        x: e.clientX / window.innerWidth  - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const onPointerDown = (e) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    velocity.current = { x: 0, y: 0 };
    if (wrapperRef.current) wrapperRef.current.style.cursor = 'grabbing';
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const dx = (e.clientX - lastPos.current.x) * 0.007;
    const dy = (e.clientY - lastPos.current.y) * 0.007;
    dragOffset.current.y += dx;
    dragOffset.current.x += dy;
    dragOffset.current.x = Math.max(-0.75, Math.min(0.75, dragOffset.current.x));
    velocity.current = { x: dy * 0.5, y: dx * 0.5 };
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = () => {
    isDragging.current = false;
    if (wrapperRef.current) wrapperRef.current.style.cursor = 'grab';
  };

  return (
    <div
      ref={wrapperRef}
      className="w-full h-full"
      style={{ cursor: 'grab', touchAction: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 38 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 3, 5]} intensity={1.2} />
        <GlobeScene
          activeSection={activeSection}
          isDragging={isDragging}
          velocity={velocity}
          dragOffset={dragOffset}
          mousePos={mousePos}
          accentPrimary={accentPrimary}
          accentHover={accentHover}
        />
      </Canvas>
    </div>
  );
}
