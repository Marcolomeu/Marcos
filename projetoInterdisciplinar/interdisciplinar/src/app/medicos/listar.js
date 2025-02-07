import Header from '../components/header/header.js';
import React, {useState, useEffect} from 'react';

export default function listar() {
    /*
    const [medicos, setMedicos] = useState()
    function dadosMedicos() {
        const resultado = fetch("rota-ap")
        setMedicos(resultado)
    }
    useEffect(
        dadosMedicos()
    )
    */
    return(
        <table>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>TELEFONE</th>
                <th>EMAIL</th>
                <th>ESPECIALIDADE</th>
            </tr>
        </table>
    )
}