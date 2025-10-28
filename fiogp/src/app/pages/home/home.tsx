"use client"


import { useLanguage } from "@/app/LanguajeContext";
import styles from './home.module.css'

import Video from "@/app/shared/video/video";
import Carrusel from "@/app/shared/carrusel/carrusel";
import Title from "@/app/shared/titles/title";
import MoreLess from "@/app/shared/textMoreLess/MoreLess";


export default function InitSection(){
    const { t } = useLanguage();
    
    const carruselIMG = [
        "img1",
        "img2",
        "img3"
    ]


    return(
        <main>
            <section className={styles.sectionInit} id="init">
                <div className={styles.conteinerInitSection}>
                    <div className={styles.initTitle}>
                        <img src="icon.png" alt="icon" />
                        <h1>{t("home.init-part.title")}</h1>
                    </div>
                    <div className={styles.initDescription}>
                        <div className={styles.textoLimitado}>
                            <MoreLess text={t("home.init-part.description")} limit={146} comeBack="#init"/>
                        </div>
                        <p className={styles.textLong}>{t("home.init-part.description")}</p>
                        <Video videoPath="/videos/CHEF-GUSTAVO-GRACIANO-T_u2ll-R.mp4"/>
                    </div>
                    <div className={styles.carruselIMG}>
                        <Carrusel imgs={carruselIMG } />
                    </div>
                </div>
            </section>
            <section className={styles.sectionCertificates}>
                <Title title={t("home.sectionCertificates.title")} />
                <div className={styles.CertificatesClass}>
                    <div>
                        <img src="/img/certificates/gorro-_Q6GY_n2 1.png" alt="gorroo" />
                        <h1>{t("home.sectionCertificates.chefs")}</h1>
                    </div>
                    <div>
                        <img src="/img/certificates/comida-DY2fm2Po 1.png" alt="escuelas" />
                        <h1>{t("home.sectionCertificates.restaurantes")}</h1>
                    </div>
                    <div>
                        <img  src="/img/certificates/insti-DskXLeRN 1.png" alt="restaurantes" />
                        <h1>{t("home.sectionCertificates.escuelas")}</h1>
                    </div>
                </div>
                <p>{t("home.sectionCertificates.description")}</p>
                <div className={styles.certificatesVideo}>
                    <Video videoPath="/videos/video1-BPCDhCUD.mp4"/>
                </div>
            </section>
            <section>
                <Title title="asd" />
            </section>
            <section>
                <Title title="asd" />
            </section>
            <section>
                <Title title="asd" />
            </section>
            <section>
                <Title title="asd" />
            </section>
        </main>
    );
}


