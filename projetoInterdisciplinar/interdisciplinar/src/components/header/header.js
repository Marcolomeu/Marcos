import React from 'react';
import Image from "next/image";
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                src='/imagens/HeartLogo.png'
                width={100}
                height={100}
                alt='html5'
            />
            <nav>
                <ul className={styles.menu}>
                    <li><a href="#home">HOME</a></li>
                    <li>
                        <a href="#médicos">MÉDICOS</a>
                        <ul className={styles.submenu}>
                            <li><a href="#Listar">Listar</a></li>
                            <li><a href="#Adicionar">Adicionar</a></li>
                            <li><a href="#Editar">Editar</a></li>
                            <li><a href="#Excluir">Excluir</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='#pacientes'>PACIENTES</a>
                        <ul className= {styles.submenu}>
                            <li><a href='#Listar'>Listar</a></li>
                            <li><a href='#Adicionar'>Adicionar</a></li>
                            <li><a href='#Editar'>Editar</a></li>
                            <li><a href='#Excluir'>Excluir</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='#agendamento'>AGENDAMENTO</a>
                        <ul className={styles.submenu}>
                            <li><a href='#Listar'>Listar Consultas</a></li>
                            <li><a href='#Adicionar'>Agendar Consulta</a></li>
                            <li><a href='#Editar'>Editar Agendamento</a></li>
                            <li><a href='#Excluir'>Cancelar</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
  );
}

export default Header;
