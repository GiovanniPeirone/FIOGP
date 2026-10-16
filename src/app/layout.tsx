import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "./LanguajeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foro Iberoamericano de Organizaciones Gastronómicas",
  description: "Somos una organización fundada hace 27 años con el objetivo de elevar el estándar de la preparación de alimentos y bebidas en especial en América.Nuestro programa de certificación es una combinación de experiencia laboral, más estudios formales. Dictadas por profesionales de amplia trayectoria docente y profesional.Proyectamos el Foro Iberoamericano de Organizaciones Gastronómicas profesionales como una institución que forma, desarrolla personas comprometidas con la profesionalización y principalmente con la sociedad.Creada en …. Más de 20.000 estudiantes e instituciones certificadas en todo el Continente. Más de 12 niveles de certificación. Presencia en 17 países de América y de Europa. Nuestra certificación cuenta con el respaldo de la organización más importante del mundo e incluido el programa de certificación ISO. Los invitamos a ser parte de este programa, comunicándose con nuestros representantes.",
  icons:{
    icon: "icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </LanguageProvider>
    </html>
  );
}
