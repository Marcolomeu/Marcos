// src/components/header/header.js
import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#sobre">SOBRE</a></li>
          <li>
            <a href="#servicos">SERVIÇOS</a>
            <ul className={styles.submenu}>
              <li><a href="#performance">PERFORMANCE</a></li>
              <li><a href="#remocao-virus">REMOÇÃO DE VÍRUS</a></li>
              <li><a href="#manutencao">MANUTENÇÃO</a></li>
              <li><a href="#seo">SEO</a></li>
              <li><a href="#lojas-virtuais">LOJAS VIRTUAIS</a></li>
              <li><a href="#criacao-sites">CRIAÇÃO DE SITES</a></li>
            </ul>
          </li>
          <li><a href="#portfolio">PORTFÓLIO</a></li>
          <li><a href="#glossario">GLOSSÁRIO</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#contato">CONTATO</a></li>
        </ul>
      </nav>
      <p className={styles.contactNumber}></p>
    </header>
  );
}

export default Header;
