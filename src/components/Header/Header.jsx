import Navbar from "../Navbar/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <p className="title">Сервис по поиску Gif</p>
      <Navbar />
    </header>
  );
}
