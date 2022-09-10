import React, { useEffect, useState } from "react";
import { Mapbox } from "../../libs/mapbox";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import css from "./mapboxField.css";

const MAPBOX_TOKEN =
    "pk.eyJ1Ijoid2FsdGVyMTcxNyIsImEiOiJjbDc2czUzdTUwM2x3M29vMWJqeHFnNXMyIn0.mNc8_FNIXltTorNyFgv2Kg";

type mapboxType = {
    onClick: (coords) => any;
    coords?: { lat: number; lng: number };
};

export function MapboxField({ onClick, coords }: mapboxType) {
    const [coordinates, setCoordinates] = useState({ location: "", lat: 0, lng: 0 });

    function onSubmit(a, lat, lng) {
        setCoordinates({
            location: a,
            lat,
            lng,
        });
    }
    useEffect(() => {
        onClick(coordinates);
    }, [coordinates]);

    return (
        <div className={css.root}>
            {coords ? (
                <Mapbox
                    editCoords={{ lat: coords.lat, lng: coords.lng }}
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                />
            ) : (
                <Mapbox lat={coordinates.lat} lng={coordinates.lng} />
            )}
            <MapboxAutocomplete
                publicKey={MAPBOX_TOKEN}
                inputClass={`${css["form-control"]} ${css["search"]}`}
                onSuggestionSelect={(a, lat, lng) => {
                    onSubmit(a, lat, lng);
                }}
                country="AR"
                placeholder="ingresa una ubicación"
            />
        </div>
    );
}
