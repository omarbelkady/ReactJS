//   Route: /ajouter
import { Button, FormControl, FormGroup, Input, InputLabel,makeStyles, Typography } from '@material-ui/core';
import React,{useState, useEffect} from 'react';
import { getVehicles, editCar} from '../Service/api';
import { useHistory, useParams } from "react-router-dom";


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

const EditCar = () => {
    const [vehicle, setVehicle] = useState(initialVal);
    const {marqueDeVoiture, modeleDeVoiture, addresseEmail, numDeTelephone} = vehicle;
    const myClass = useStyles();
    const { identifiant } = useParams();
    const mybrowshistory = useHistory();

    useEffect(()=>{
        loadVehicleData();
    },[])

    {/* Making the api call */}

    const loadVehicleData = async () =>{
        const res = await getVehicles(identifiant);
        setVehicle(res.data);
    }

    const onValueChange = (ev) => {
        setVehicle({...vehicle, [ev.target.name] : ev.target.value})
    }

    const modifierlesDetailDuVehicules = async () => {
        await editCar(identifiant, vehicle);
        mybrowshistory.push("./voitures");
    }
    return (
        <div>
            <FormGroup className={myClass.container}>
                <br/>
                <br/>
                <br/>
                <br/>
                <Typography variant="h4">Modifier Un Véhicule</Typography>
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
                <Button variant="contained" onClick={() => modifierlesDetailDuVehicules()} color="primary">Modifier Un Vehicule</Button>
            </FormGroup>
        </div>
    )
}

export default EditCar;