import { Link } from "react-router-dom";
import BookCardProps from "../../Interfaces/BookCardProps";
import s from "./BookCard.module.css"




export default function BookCard({autor,capa,genero,id,preco,sinopse,titulo}: BookCardProps) {
    
    
    
    return (
        <div className={s.book_div}>
            <Link to={`/home/book/${id}`}>
                    
                <div >
                    <img src={capa} className={s.capa} />
                    <p className={s.titulo}>{titulo}</p>
                    <p>{autor}</p>
                    <p>{preco}</p>
                </div>

            </Link>
        </div>
        

    )
}