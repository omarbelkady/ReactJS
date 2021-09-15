//   Route: /ajouter
import { Button, FormControl, FormGroup, Input, InputLabel,makeStyles, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import { addCar } from '../Service/api';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    container:{
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialVal = {
    marqueDeVoiture: '',
    modeleDeVoiture: '',
    addresseEmail: '',
    numDeTelephone: ''
}

const AddCar = () => {
    const [vehicle, setVehicle] = useState(initialVal);
    const {marqueDeVoiture, modeleDeVoiture, addresseEmail, numDeTelephone} = vehicle;
    const myClass = useStyles();
    const mybrowshistory = useHistory();

    const onValueChange = (ev) => {
        setVehicle({...vehicle, [ev.target.name] : ev.target.value})
    }

    const ajouterlesDetailDuVehicules = async () => {
        await addCar();
        mybrowshistory.push("./voitures");
    }
    return (
        <div>
            <FormGroup className={myClass.container}>
                <br/>
                <br/>
                <br/>
                <br/>
                <Typography variant="h4">Ajouter Un Véhicule</Typography>
                <FormControl>
                    <InputLabel>Marque De Voiture</InputLabel>
                    <Input onChange={(ev)=> onValueChange(ev)} name='marqueDeVoiture' value={marqueDeVoiture} id="myinp"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Modele De Voiture</InputLabel>
                    <Input onChange={(ev)=> onValueChange(ev)} name='modeleDeVoiture' value={modeleDeVoiture} id="myinp"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Addresse Email</InputLabel>
                    <Input onChange={(ev)=> onValueChange(ev)} name='addresseEmail' value={addresseEmail} id="myinp"/>
                </FormControl>
                <FormControl>
                    <InputLabel>N° De Telephone</InputLabel>
                    <Input onChange={(ev)=> onValueChange(ev)} name='numDeTelephone' value={numDeTelephone} id="myinp"/>
                </FormControl>
                <br/>
                <Button variant="contained" onClick={() => ajouterlesDetailDuVehicules()} color="primary">Ajouter Vehicule</Button>
            </FormGroup>
        </div>
    )
}

export default AddCar;