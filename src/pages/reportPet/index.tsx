import { useEffect, useState } from "react";
import { dropzone, dataUrl } from "../../libs/dropzone";
import { useNavigate } from "react-router-dom";
import { createPetReport } from "../../libs/api";
import { ReportPetComponent } from "./reportPetComp";

export function ReportPet() {
    var petLocation;
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        dropzone("#dropzone");
    }, []);

    async function onSubmit(e) {
        e.preventDefault();
        const span = e.target.children[5];
        const name = e.target[0].value;
        if (!petLocation.location)
            span.textContent = "DEBE INGRESAR LA ÚLTIMA UBICACIÓN DE SU MASCOTA";
        else if (!dataUrl) span.textContent = "DEBE AGREGAR UNA FOTO DE SU MASCOTA";
        else {
            span.textContent = "";
            const infoPet = {
                name,
                state: "perdido",
                dataUrl,
                location: petLocation.location,
                lat: petLocation.lat,
                lng: petLocation.lng,
            };
            //crea un reporte de mascota en la base de datos
            await createPetReport(infoPet);
            setCheck(true);
            setTimeout(() => {
                navigate("/mis-mascotas-reportadas", { replace: true });
            }, 2500);
        }
    }

    function mapboxCoords(location) {
        petLocation = location;
    }

    return ReportPetComponent(check, onSubmit, mapboxCoords, navigate);
}
