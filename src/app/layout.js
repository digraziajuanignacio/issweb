import './CSS/globals.css'
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import NavBar from './Components/NavBar'
import BootstrapClient from './Components/BootstrapClient'
import Footer from './Components/Footer'



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ISS WEB",
  description: "Instituto Santisimo Sacramento WebSite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
        <BootstrapClient/>
        </body>
    </html>
  );
}
