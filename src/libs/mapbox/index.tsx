import React, { Fragment } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { useSetCoordinates } from "../../hooks/mapbox";

type coordsType = {
    lat: number;
    lng: number;
    editCoords?: { lat; lng };
};

const Map = ReactMapboxGl({
    accessToken:
        "pk.eyJ1Ijoid2FsdGVyMTcxNyIsImEiOiJjbDc2czUzdTUwM2x3M29vMWJqeHFnNXMyIn0.mNc8_FNIXltTorNyFgv2Kg",
});

function MarkPoint({ lat, lng }: coordsType) {
    const petLocation = [lat, lng];

    return (
        <Fragment>
            {
                <Marker
                    setZoom={14}
                    offsetTop={-48}
                    offsetLeft={-24}
                    coordinates={petLocation.reverse()}
                >
                    <img
                        style={{ width: 30, height: 30 }}
                        src="https://img.icons8.com/color/48/000000/marker.png"
                    />
                </Marker>
            }
        </Fragment>
    );
}

export function Mapbox({ lat, lng, editCoords }: coordsType) {
    const petLocation = useSetCoordinates({ lat, lng });

    return (
        <Map
            style="mapbox://styles/walter1717/cl78pnutv003515lxvymz8hzo"
            containerStyle={{
                height: "30vh",
                width: "80%",
                maxWidth: "328px",
            }}
            center={editCoords?.lat ? [editCoords.lng, editCoords.lat] : [-64.5979393, -35.0599757]}
            zoom={[4]}
        >
            {editCoords?.lat ? <MarkPoint lat={editCoords.lat} lng={editCoords.lng} /> : null}
            {petLocation.lat ? <MarkPoint lat={petLocation.lat} lng={petLocation.lng} /> : null}
        </Map>
    );
}
