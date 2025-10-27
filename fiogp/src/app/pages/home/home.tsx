"use client"

import { useLanguage } from "@/app/LanguajeContext";
import styles from './home.module.css'

import Video from "@/app/shared/video/video";
import Carrusel from "@/app/shared/carrusel/carrusel";
import Title from "@/app/shared/titles/title";


export default function InitSection(){
    const { t } = useLanguage();
    
    const carruselIMG = [
        "img1",
        "img2",
        "img3"
    ]


    return(
        <main>
            <section className={styles.sectionInit}>
                <div className={styles.initTitle}>
                    <img src="icon.png" alt="icon" />
                    <h1>{t("home.init-part.title")}</h1>
                </div>
                <div className={styles.initDescription}>
                    <p>{t("home.init-part.description")}</p>
                    <Video videoPath="/videos/CHEF-GUSTAVO-GRACIANO-T_u2ll-R.mp4"/>
                </div>
                <div className={styles.carruselIMG}>
                    <Carrusel imgs={carruselIMG } />
                </div>
            </section>
            <section className={styles.sectionCertificates}>
                <Title title={t("home.sectionCertificates.title")} />
                <div className={styles.CertificatesClass}>
                    <div>
                        <img src="/img/certificates/gorro-_Q6GY_n2 1.png" alt="gorroo" />
                        <h1></h1>
                    </div>
                    <div>
                        <img src="/img/certificates/insti-DskXLeRN 1.png" alt="" />
                        <h1></h1>
                    </div>
                    <div>
                        <img src="/img/certificates/comida-DY2fm2Po 1.png" alt="" />
                        <h1></h1>
                    </div>
                </div>
            </section>
        </main>
    );
}


