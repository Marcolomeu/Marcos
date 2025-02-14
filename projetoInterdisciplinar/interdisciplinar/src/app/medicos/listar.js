import Header from '@/components/header/header.js';
'use client';
import React, {useState, useEffect} from 'react';

export default function listarMedicos() {

    const [medicos, setMedicos] = useState([])
    const [medicosSelecionados, setMedicoselecionados] = useState('')

    const getMedicos = async () => {
        try {
            const response = await fetch('https://api-clinica-2a.onrender.com/medicos')
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
            }

            const data = await response.json();
            setMedicos(data)

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        getMedicos();
    }, [medicosSelecionados])

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>TELEFONE</th>
                    <th>EMAIL</th>
                    <th>ESPECIALIDADE</th>
                </tr>
            </thead>
            <tbody>
                {medicos.map((medico) => (
                    <tr key={medico.id}>
                        <td>{medico.id}</td>
                        <td>{medico.nome}</td>
                        <td>{medico.telefone}</td>
                        <td>{medico.email}</td>
                        <td>{medico.especialidade}</td>
                    </tr>
                ))}
            </tbody>
        </table>    
    )
}

