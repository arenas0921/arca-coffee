import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    ZoomControl,
    LayersControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Ubicacion.module.css";
import { useLanguage } from "../../context/LanguageContext";

const LAT = 4.6411257;
const LNG = -75.5725345;

const googleMapsUrl =
    "https://maps.app.goo.gl/4y31NbDc1caJBFRv8";

const position = [LAT, LNG];

const arcaIcon = L.divIcon({
    className: styles.arcaMarker,

    html: `
        <div class="${styles.markerPin}">
            <div class="${styles.markerLogo}">
                <span>ARCA</span>
                <small>COFFEE</small>
            </div>
        </div>
    `,

    iconSize: [90, 110],
    iconAnchor: [45, 108],
    popupAnchor: [0, -105],
});


function Ubicacion() {

    const { language } = useLanguage();

    const isSpanish = language === "es";

    return (
        <section
            id="ubicacion"
            className={styles.ubicacion}
        >

            <div className={styles.header}>

                <h2>
                    {isSpanish
                        ? "Ubicación"
                        : "Location"}
                </h2>

            </div>


            <div className={styles.mapWrapper}>

                <MapContainer
                    center={position}
                    zoom={15}
                    scrollWheelZoom={true}
                    zoomControl={false}
                    className={styles.map}
                >

                    <LayersControl
                        position="topleft"
                    >

                        {/* =========================
                            MAPA
                           ========================= */}

                        <LayersControl.BaseLayer
                            name={
                                isSpanish
                                    ? "Mapa"
                                    : "Map"
                            }
                        >

                            <TileLayer
                                attribution="&copy; OpenStreetMap contributors"
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                        </LayersControl.BaseLayer>


                        {/* =========================
                            SATÉLITE
                           ========================= */}

                        <LayersControl.BaseLayer
                            checked
                            name={
                                isSpanish
                                    ? "Satélite"
                                    : "Satellite"
                            }
                        >

                            <TileLayer
                                attribution="Tiles &copy; Esri"
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                            />

                        </LayersControl.BaseLayer>

                    </LayersControl>


                    {/* =========================
                        MARCADOR ARCA COFFEE
                       ========================= */}

                    <Marker
                        position={position}
                        icon={arcaIcon}
                    >

                        <Popup>

                            <strong>
                                ARCA COFFEE
                            </strong>

                            <br />

                            Salento, Quindío

                        </Popup>

                    </Marker>


                    {/* =========================
                        CONTROLES DE ZOOM
                       ========================= */}

                    <ZoomControl
                        position="topright"
                    />

                </MapContainer>


                {/* =========================
                    BOTÓN CÓMO LLEGAR
                   ========================= */}

                <a
                    className={styles.mapButton}
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                        isSpanish
                            ? "Abrir ubicación de Arca Coffee en Google Maps"
                            : "Open Arca Coffee location in Google Maps"
                    }
                >

                    {isSpanish
                        ? "Cómo llegar"
                        : "Get directions"}

                    <span>↗</span>

                </a>

            </div>


            {/* =========================
                UBICACIÓN
               ========================= */}

            <div className={styles.locationLabel}>

                <span>⌖</span>

                SALENTO, QUINDÍO, COLOMBIA

            </div>

        </section>
    );
}

export default Ubicacion;