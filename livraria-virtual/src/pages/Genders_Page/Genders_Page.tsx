import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import api from "../../services/api";
import BookCardProps from "../../Interfaces/BookCardProps";
import BookCard from "../../components/BookCard/bookCard";
import s from "./Genders_Page.module.css"
import Type from "../../Interfaces/Type";
import Lupa from "../../assets/Lupa.svg"

export default function Genders_Page() {
    var [books, setBooks] = useState<BookCardProps[]>([])
    var [searchTerm, setSearchTerm] = useState<string>("")

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
    }, [genero])

    var filteredBooks = books.filter(book =>
        book.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className={s.container}>
            <div className={s.search_div}>
                <input
                    type="text"
                    placeholder= "Pesquisar por título"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={s.search_input}
                />
            </div>
            <div className={s.back_div}>
                <Link to={`/home`} className={s.back_link}>{`<  ${genero}`}</Link>
            </div>
            <div className={s.books_container}>
                {filteredBooks.map((book: BookCardProps) => {    
                    return (
                        <div className={s.book_div} key={book.id}>
                            <BookCard autor={book.autor} 
                                capa={book.capa} 
                                genero={book.genero} 
                                id={book.id} preco={book.preco} 
                                sinopse={book.sinopse} 
                                titulo={book.titulo} 
                                type={Type.large}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
