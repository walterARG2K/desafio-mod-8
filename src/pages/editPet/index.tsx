import { useEffect, useState } from "react";
import { dropzone, dataUrl } from "../../libs/dropzone";
import { useNavigate, useParams } from "react-router-dom";
import { updateInfoPet } from "../../libs/api";
import { useGetPet } from "../../hooks/getPet";
import { EditPetComponent } from "./editPetComp";

export function EditPet() {
    var petLocation;
    const params = useParams();
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();

    const [petInfo, setPetInfo] = useState({
        name: "",
        location: "",
        state: "",
        urlImage: "",
        lat: 0,
        lng: 0,
    });

    //obtiene los datos actualizados de una mascota
    useGetPet(params.id).then((r) => {
        if (!petInfo.name) setPetInfo(r);
        const imageBackground = document.querySelector(".dropzone");
        (imageBackground as any).style.backgroundImage = `url(${petInfo.urlImage})`;
    });

    useEffect(() => {
        dropzone("#dropzone");
    }, []);

    //al enviar el formulario de actualizar mascota
    async function onSubmit(e) {
        e.preventDefault();
        const infoPet = {
            name: e.target[0].value,
            dataUrl,
            location: petLocation?.location || "",
            lat: petLocation?.lat || "",
            lng: petLocation?.lng || "",
        };

        for (const key in infoPet) {
            if (!infoPet[key]) delete infoPet[key];
        }
        // actualiza la info de la mascota
        await updateInfoPet(infoPet, params.id);
        setCheck(true);
        setTimeout(() => {
            navigate("/mis-mascotas-reportadas", { replace: true });
        }, 2500);
    }

    function mapboxCoords(location) {
        petLocation = location;
    }

    return EditPetComponent(check, onSubmit, petInfo, mapboxCoords, params, navigate);
}
