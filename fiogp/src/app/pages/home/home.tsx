"use client"


import { useLanguage } from "@/app/LanguajeContext";
import styles from './home.module.css'

import Video from "@/app/shared/video/video";
//import Carrusel from "@/app/pages/home/carrusel/carrusel";
import Title from "@/app/shared/titles/title";
import MoreLess from "@/app/pages/home/textMoreLess/MoreLess";
import { Marquee } from './paises/paises'

export default function InitSection(){
    const { t } = useLanguage();
    
    const carruselIMG = [
        "img1",
        "img2",
        "img3"
    ]


    return(
        <main className={styles.main}>
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
                    <a href="">Ver Mas sobre nuestra oferta academica</a>
                </div>
            </section>
            <section className={styles.NuestrosRepresentantesSection}>
                <div className={styles.titleREpresentrants}>
                    <Title title={t("home.representantes.title")} />
                </div>
                <div className={styles.RepresntantsDesktop}>
                    <img src="Respresentantes.svg" alt="Respresentantes.svg" />
                </div>
                <div className={styles.RepresntantsMobile}>
                    <Marquee />
                </div>
            </section>
            <section className={styles.ContactUs}>
                <Title title={t("home.contactus.title")} />
                <div className={styles.contactusContainer}>
                    <div>
                        <form action="" className={styles.ContactForm}>
                            <input type="text" placeholder={t("home.contactus.data.name")}/>
                            <input type="text" placeholder={t("home.contactus.data.lastname")}/>
                            <input type="text" placeholder={t("home.contactus.data.email")}/>
                            <textarea name="" id="" placeholder={t("home.contactus.data.message")}></textarea>
                            <button>{t("home.contactus.data.send")}</button>
                        </form>
                    </div>
                    <div className={styles.contactusImg}>
                        <img src="/img/img4-CyxJUPJO 1.png" alt="contact-img" height={500}/>
                    </div>
                </div>
            </section>
        </main>
    );
}


