import axios from "axios";

const url = "https://localhost:3003/vehicules";


//promise
export const getVehicles = async (identifiant) => {
    identifiant = identifiant || ''
    return await axios.get(`${url}/${identifiant}`); //https://localhost:3003/vehicules/23
}


export const addCar = async(car) => {
    return await axios.post(url, car);
}

export const editCar = async(identifiant, utilisateur) => {
    return await axios.put(`${url}/${identifiant}`/utilisateur);
}

export const supprimerVoiture = async(identifiant, utilisateur) => {
    return await axios.delete(`${url}/${identifiant}`/utilisateur);
}