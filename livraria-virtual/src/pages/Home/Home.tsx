import Banner from "../../assets/Banner.png"
import s from "./Home.module.css"
import { useEffect, useState } from "react";
import api from "../../services/api";
import GeneroCard from "../../components/GeneroCard/generoCard";


export default function Home() {
    
    const [generos, setGeneros] = useState<string[]>([])
    var x = 0


    useEffect(() => {

        api.get("/livros")
            .then(response => {
                const data = response.data
                const generos = data.map((livro: any) => livro.genero)
                const generosUnicos = Array.from(new Set(generos))
                setGeneros(generosUnicos as string[])
            })
            .catch(error => {
                console.log(error)
            })


    }, [])
            
    console.log(generos)

    return (
        <>
            <div className={s.Banner_div}>
                <img className={s.Banner} src={Banner} alt="" />
            </div>
            <div className={s.generos_div}>
                {generos.map((gen) => {
                    x++
                    return (
                        <GeneroCard genero={gen} key={gen}></GeneroCard>
                        
                    )
                })}
            </div>
        
        </>
        
        
    )

}