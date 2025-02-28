import { Link } from "react-router-dom";
import Banner from "../../assets/Banner.png"
import s from "./Home.module.css"


export default function Home() {
    return (
        <div>
            <div className={s.Banner_div}>
                <img className={s.Banner} src={Banner} alt="" />
            </div> 
            
        </div>
    )
}