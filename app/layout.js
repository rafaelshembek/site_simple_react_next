import "bootstrap/dist/css/bootstrap.min.css"
import './globals.css'

// components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="d-flex flex-column min-vh-100">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
