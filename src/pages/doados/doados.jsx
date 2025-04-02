import Style from '../doados/doados.module.scss'
import Article from "../../components/props/articleLivroDoados/ArticleLivroDoado";
import livro from '../../assets/livro.png'
import axios from "axios";
import { useState, useEffect } from "react";

export default function Doados() {
    const [livros, setLivros] = useState([]);

    const getLivros = async () => {
        try {
            const response = await axios.get("https://libvnw.onrender.com/livros")
            setLivros(response.data)
        } catch (error) {
            console.error("Erro ao buscar livros:", error)
        }
    }

    useEffect(() => {
        getLivros();
    }, []);

    return (
        <section className={Style.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={Style.boxBooks}>
                {livros.map((item) => (
                    <Article
                        key={item.id}
                        linkImg={item.image_url}
                        titulo={item.titulo}
                        autor={item.autor}
                        genero={item.categoria}
                    />
                ))}

            </section>
        </section>
    )
}