'use client';
import Header from '@/components/header/header.js';
import React, {useState, useEffect} from 'react';
import styles from '@/app/medicos/page.module.css';

export default function listarConsultas() {

    const [consultas, setConsultas] = useState([]);
    const [consultasSelecionadas, setConsultasSelecionadas] = useState('');
    const [buscaMedico, setBuscaMedico] = useState('');
    const [buscaPaciente, setBuscaPaciente] = useState('');
    const [mostrarInput, setMostrarInput] = useState(false);

    const getConsultas = async () => {
        try {
            const response = await fetch('https://api-clinica-2a.onrender.com/consultas');
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
            }

            const data = await response.json();
            setConsultas(data);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error);
        }
    };

    useEffect(() => {
        getConsultas();
    }, [consultasSelecionadas]);

    const consultasFiltradas = consultas.filter(consulta => 
        consulta.medico.toLocaleLowerCase().includes(buscaMedico.toLocaleLowerCase()) &&
        consulta.paciente.toLocaleLowerCase().includes(buscaPaciente.toLocaleLowerCase())
    );

    return(
        <div>
            <div className={styles.controls}>
                <button onClick={() => setMostrarInput(!mostrarInput)}>
                    {mostrarInput ? 'Ocultar Campos de Busca' : 'Mostrar Campos de Busca'}
                </button>
                {mostrarInput && (
                    <div className={styles.inputContainer}>
                        <input 
                            value={buscaMedico}
                            type="text" 
                            onChange={(ev) => setBuscaMedico(ev.target.value)}
                            placeholder="Buscar médico pelo nome"
                        />
                        <input 
                            value={buscaPaciente}
                            type="text" 
                            onChange={(ev) => setBuscaPaciente(ev.target.value)}
                            placeholder="Buscar paciente pelo nome"
                        />
                    </div>
                )}
            </div>
            <table className={styles.table}>
                <thead className={styles.elementoTabela}>
                    <tr className={styles.tituloTable}>
                        <th>ID</th>
                        <th>ESPECIALIDADE</th>
                        <th>MÉDICO</th>
                        <th>PACIENTE</th>
                        <th>TIPO</th>
                    </tr>
                </thead>
                <tbody className={styles.elementoTabela}>
                    {consultasFiltradas.map((consulta) => (
                        <tr key={consulta.id}>
                            <td>{consulta.id}</td>
                            <td>{consulta.especialidade}</td>
                            <td>{consulta.medico}</td>
                            <td>{consulta.paciente}</td>
                            <td>{consulta.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>      
        </div>
    );
}