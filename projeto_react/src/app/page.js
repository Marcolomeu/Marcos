import styles from "./page.module.css";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  const nome = 'Marcos'
  return (
    <div>
        <header></header>
        <h1>Liberdad carahoooo</h1>
        <p>Parágrafo da primeira página</p>
        <p>Autor: {nome}</p>
        <Image className= {styles.imagem} src="/images/Milei.jpg" alt="Milei" width={500} height={400}/>
    </div>
  );
}