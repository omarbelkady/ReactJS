import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { getVehicles, supprimerVoiture } from '../Service/api';
import { Link } from "react-router-dom";

{/*Route: /voitures */}

const useStyle = makeStyles({
    mytable: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    tahead : {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: '20'
        }
    },
    myrow : {
        '& > *': {
            fontSize: ''
        }
    }

})

const AllCars = () => {
    
    const [vehicules, setVehicles] = useState([]);
    const myClass= useStyle();

    useEffect(() => {
        getAllVehicles();
    }, [])

    const getAllVehicles = async() => {
        const resp = await getVehicles();
        console.log(resp.data);
        setVehicles(resp.data);
    }

    const supprimerVehicule = async(identifiant) => {
        await supprimerVoiture(identifiant);
        getAllVehicles();
    }
    
    return (
        <div>
            
            <br/>
            <br/>
            
            <br/>
            <br/> 
            <h1 align="center">Nos Véhicules</h1>
            <Table className={myClass.mytable}>
                <TableHead>
                    <TableRow className={myClass.tahead}>
                        <TableCell>iD</TableCell>
                        <TableCell>Année</TableCell>
                        <TableCell>Marque De Voiture</TableCell>
                        <TableCell>Modele</TableCell>
                        <TableCell>N° De Téléphone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        vehicules.map(vehicule => (
                            <TableRow className={myClass.myrow}>
                                <TableCell>{vehicule.iD}</TableCell>
                                <TableCell>{vehicule.nom}</TableCell>
                                <TableCell>{vehicule.nomdutilisateur}</TableCell>
                                <TableCell>{vehicule.email}</TableCell>
                                <TableCell>{vehicule.telephone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/modifier/${vehicule.iD}`}>Modifier</Button>
                                    <Button variant="contained" color="secondary" onClick={()=>supprimerVehicule(vehicule.iD)}>Supprimer</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AllCars;
