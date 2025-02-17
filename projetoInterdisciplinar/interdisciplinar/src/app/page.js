import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/header/header.js';
import styles from '../app/page.module.css';

export default function Page() {
    return (
        <div className={styles.container}>
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className={styles.message}
            >
                <h1>Bem-vindo à Clínica!</h1>
            </motion.div>
        </div>
    );
}