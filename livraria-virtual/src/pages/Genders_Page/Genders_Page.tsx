import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import api from "../../services/api";
import BookCardProps from "../../Interfaces/BookCardProps";
import BookCard from "../../components/BookCard/bookCard";
import s from "./Genders_Page.module.css"
import Type from "../../Interfaces/Type";


export default function Genders_Page() {
    
    var [books, setBooks] = useState<BookCardProps[]>([])

    var genero = useParams().genderName;
    useEffect(() => {

        api.get(`livros?genero=${genero}`)
            .then(response => {
                console.log(response.data)
                setBooks(response.data)
            })
            .catch(error => {
                console.log(error)
            })


    }, [])

    
    return (

        <div className={s.container}>
            <div>
                Busca
            </div>
            <div className={s.back_div}>
                <Link to={`/home`} className={s.back_link}>{`<  ${genero}`}</Link>
            </div>
            
            <div className={s.books_container}>
                {books.map((book: BookCardProps) => {
                    return (
                        <div className={s.book_div}>
                            <BookCard autor={book.autor} 
                                capa={book.capa} 
                                genero={book.genero} 
                                id={book.id} preco={book.preco} 
                                sinopse={book.sinopse} 
                                titulo={book.titulo} 
                                key={book.id}
                                type={Type.large}
                                >

                            </BookCard>
                        </div>
                    )
                })}
            </div>
            
        </div>

    )



}
        