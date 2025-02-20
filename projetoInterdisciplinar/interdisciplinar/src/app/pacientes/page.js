'use client';
import Header from '@/components/header/header.js';
import React, {useState, useEffect} from 'react';
import styles from '@/app/pacientes/page.module.css'

export default function listarPacientes() {

    const [pacientes, setPacientes] = useState([])
    const [pacientesSelecionados, setPacientesSelecionados] = useState('')
    const [busca, setBusca] = useState('')
    const [mostrarInput, setMostrarInput] = useState(false)

    const getPacientes = async () => {
        try {
            const response = await fetch('https://api-clinica-2a.onrender.com/pacientes')
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
            }

            const data = await response.json();
            setPacientes(data)

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        getPacientes();
    }, [pacientesSelecionados])

    const pacientesFiltrados = pacientes.filter(paciente => 
        paciente.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
    );

    return(
        <div>
            <div className={styles.controls}>
                <button onClick={() => setMostrarInput(!mostrarInput)}>
                    {mostrarInput ? 'Ocultar Campo de Busca' : 'Mostrar Campo de Busca'}
                </button>
                {mostrarInput && (
                    <div className={styles.inputContainer}>
                        <input 
                            value={busca}
                            type="text" 
                            onChange={(ev) => setBusca(ev.target.value)}
                            placeholder="Buscar médico pelo nome"
                        />
                    </div>
                )}
            </div>
            <table className={styles.table}>
                <thead className={styles.elementoTabela}>
                    <tr className={styles.tituloTable}>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>TELEFONE</th>
                        <th>EMAIL</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody className={styles.elementoTabela}>
                    {pacientesFiltrados.map((paciente) => (
                        <tr key={paciente.id}>
                            <td>{paciente.id}</td>
                            <td>{paciente.nome}</td>
                            <td>{paciente.telefone}</td>
                            <td>{paciente.email}</td>
                            <td>{paciente.cpf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>      
        </div>
    )
}