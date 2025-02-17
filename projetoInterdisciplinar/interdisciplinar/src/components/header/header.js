import React from 'react';
import Image from "next/image";
import Link from 'next/link'; 
import styles from './header.module.css';

export default function Header() {
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
                    <li><Link href="/">HOME</Link></li>
                    <li>
                        <Link href="/medicos">MÉDICOS</Link>
                        <ul className={styles.submenu}>
                            <li><Link href="/medicos">Listar</Link></li>
                            <li><Link href="#Adicionar">Adicionar</Link></li>
                            <li><Link href="#Editar">Editar</Link></li>
                            <li><Link href="#Excluir">Excluir</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href='/pacientes'>PACIENTES</Link>
                        <ul className={styles.submenu}>
                            <li><Link href='/pacientes'>Listar</Link></li>
                            <li><Link href='#Adicionar'>Adicionar</Link></li>
                            <li><Link href='#Editar'>Editar</Link></li>
                            <li><Link href='#Excluir'>Excluir</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href='#agendamento'>AGENDAMENTO</Link>
                        <ul className={styles.submenu}>
                            <li><Link href='#Listar'>Listar Consultas</Link></li>
                            <li><Link href='#Adicionar'>Agendar Consulta</Link></li>
                            <li><Link href='#Editar'>Editar Agendamento</Link></li>
                            <li><Link href='#Excluir'>Cancelar</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}