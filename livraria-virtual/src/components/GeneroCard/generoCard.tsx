import { useEffect, useState } from "react";
import api from "../../services/api";
import BookCard from "../BookCard/bookCard";
import GeneroCardProps from "../../Interfaces/GeneroCardProps";
import BookCardProps from "../../Interfaces/BookCardProps";
import s from "./GeneroCard.module.css"
import { Link } from "react-router-dom";
import Type from "../../Interfaces/Type";

export default function GeneroCard(props: GeneroCardProps) {

    var config = {

        params: {
            _limit: 4,
        }
    }
    var [generoBooks, setGeneroBooks] = useState<BookCardProps[]>([])

    useEffect(() => {

        api.get(`/livros?genero=${props.genero}`, config)
        .then(response => {
            setGeneroBooks(response.data)
        })
        .catch(error => {
            console.log(error)
        })

    }, [])
 
    return (
        <div className={s.genero_card_div}>
            <div className={s.genero_text_div}>
                <h1>{props.genero}</h1>
                <Link to={`/home/gender/${props.genero}`} className={s.ver_mais}>Ver Mais</Link>
            </div>
            
            <div className={s.genero_div}>
                {
                    generoBooks.map((book: BookCardProps) => {
                        return (
                            <BookCard autor={book.autor} 
                                capa={book.capa} 
                                genero={book.genero} 
                                id={book.id} preco={book.preco} 
                                sinopse={book.sinopse} 
                                titulo={book.titulo} 
                                key={book.id}
                                type = {Type.small}
                                >
                                
                            </BookCard>
                        )
                    })
                }   
            </div>
             
        </div>
    )
}