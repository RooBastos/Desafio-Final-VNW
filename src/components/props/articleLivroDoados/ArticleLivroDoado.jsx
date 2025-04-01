import Style from "./ArticleLivroDoados.module.scss";

import PropTypes from "prop-types";

export default function Article({ id, linkImg, titulo, autor, genero }) {
  return (
    <article className={Style.articleDoados} key={id}>
      <img src={linkImg} alt={`Imagem do livro ${titulo}`} />
      <h3>{titulo}</h3>
      <p>{autor}</p>
      <p>{genero}</p>
    </article>
  );
}

Article.propTypes = {
  linkImg: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
};
