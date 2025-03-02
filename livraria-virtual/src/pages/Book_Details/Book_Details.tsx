import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import BookCardProps from "../../Interfaces/BookCardProps";
import s from './Book_Details.module.css'

export default function Book_Details() {
    
    var [book, setBook] = useState<BookCardProps | null>(null)
    var bookId = useParams().bookId;
    useEffect(() => {
        api.get(`livros/${bookId}`)
            .then(response => {
                setBook(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    
    if(!book){
        return <div><h1>Livro não encontrado</h1></div>
    }


    return (
        <div className={s.container}>
            <div className={s.back_div}>
                <Link to={`/home`} className={s.back_link}>{"< Detalhes do Livro"}</Link>
            </div>
            <div className={s.book_div_content}>
                <div className={s.capa_div}>
                    <img className={s.capa} src={book.capa} alt="" />
                </div>
                <div className={s.text_div}>
                    <h1>{book.titulo}</h1>
                    <p className={s.autor}>{book.autor}</p>
                    <div className={s.sinopse_div}>
                        <h2>Sinopse</h2>
                        <p className={s.sinopse}>{book.sinopse}</p>
                    </div>
                    <div className={s.btn_div}>
                        <button className={s.carrinho_btn}><p className={s.btn_text}>{`R$ ${book.preco}                   Adicionar ao carrinho`}</p></button>
                    </div> 
                </div>
            </div>
             
        </div>
    )

}

