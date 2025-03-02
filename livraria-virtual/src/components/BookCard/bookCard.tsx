import { Link } from "react-router-dom";
import BookCardProps from "../../Interfaces/BookCardProps";
import s from "./BookCardSmall.module.css"
import l from "./bookCardLarge.module.css"

export default function BookCard({autor,capa,genero,id,preco,sinopse,titulo, type}: BookCardProps) {
    
    if(type == "small"){
        return (

        



            <div className={s.book_div}>
                <Link to={`/home/book/${id}`} className={s.link}>
                    <div className={s.book_content}>
                        <img src={capa} className={s.capa} />
                        <div className={s.text_container}>
                            <div className={s.top_text}>
                                <p className={s.titulo}>{titulo}</p>
                                <p className={s.autor}>{autor}</p>
                            </div>
                            <p className={s.preco}>R$ {preco}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }else{
        return (

            <div className={l.book_div}>
                <Link to={`/home/book/${id}`} className={l.link}>
                    <div className={l.book_content}>
                        <img src={capa} className={l.capa} />
                        <div className={l.text_container}>
                            <div className={l.top_text}>
                                <p className={l.titulo}>{titulo}</p>
                                <p className={l.autor}>{autor}</p>
                            </div>
                            <p className={l.preco}>R$ {preco}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
    
    
    
    
    
}