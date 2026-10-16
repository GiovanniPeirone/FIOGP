"use client";

import styles from './lenguaje.module.css'

import { useLanguage } from "@/app/LanguajeContext";

export default function Languaje(){
    const { lang, setLang } = useLanguage();

    return (
        <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className={styles.selectLenguaje}
        >
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="fn">Frances</option>
        </select>
    );
}