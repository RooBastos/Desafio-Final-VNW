import S from "./header.module.scss";

import logo from "../../assets/logo.png";
import busca from "../../assets/busca.png";

import { Link } from "react-router-dom";

export default function header() {
  return (
      <header>
        <section className={S.boxLogo}>
          <img src={logo} alt="Imagem de um livro" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/doados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/querodoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>
        <div className={S.boxInput}>
          <input type="text" placeholder="O que você procura?"/>
          <img src={busca} alt="Imagem de uma lupa" />
        </div>
      </header>
  );
}
