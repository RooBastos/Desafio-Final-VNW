import Style from './queroDoar.module.scss'
import livro from '../../assets/Vector.png'
import axios from 'axios'
import {useState} from 'react'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const enviarDados = async() => {
        const urlAPI = "https://libvnw.onrender.com/doar"

        const dadosLivro = {
            titulo,
            categoria,
            autor,
            image_url
        }

        await axios.post(urlAPI, dadosLivro)

        alert("Livro Cadastrado com Sucesso!")

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImage_url("")
        
    }

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImageURL = (e) => {
        setImage_url(e.target.value)
    }

    return(
        <section className={Style.principal}>
            <section className={Style.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <img src={livro} alt="" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Titulo' onChange={capturaTitulo} value={titulo} />
                    <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria}/>
                    <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor} />
                    <input type="text" placeholder='Link da Imagem' onChange={capturaImageURL} value={image_url}/>
                    <button className={Style.button} type='submit' value="Doar" onClick={enviarDados}>Doar</button>
                </form>
            </section>
        </section>
    )
}