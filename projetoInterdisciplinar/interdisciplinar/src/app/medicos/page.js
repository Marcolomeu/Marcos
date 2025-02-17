'use client';
import Header from '@/components/header/header.js';
import React, {useState, useEffect} from 'react';
import styles from '@/app/medicos/page.module.css'

export default function listarMedicos() {

    const [medicos, setMedicos] = useState([])
    const [medicosSelecionados, setMedicoselecionados] = useState('')
    const [busca, setBusca] = useState('')
    const [mostrarInput, setMostrarInput] = useState(false)

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

    const medicosFiltrados = medicos.filter(medico => 
        medico.nome.toLocaleLowerCase().startsWith(busca.toLocaleLowerCase())
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
                        <th>ESPECIALIDADE</th>
                    </tr>
                </thead>
                <tbody className={styles.elementoTabela}>
                    {medicosFiltrados.map((medico) => (
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
        </div>
    )
}