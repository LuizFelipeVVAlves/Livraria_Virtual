import { Link } from "react-router-dom";
import Picture from "../../assets/Picture.png"
import s from './Login.module.css'
import Logo from "../../assets/Logo.svg"


export default function Login() {
//Usar UseNavigate para redirecionamento login
// const navigate = useNavigate(); <Link to='/home'>AAAA</Link>
return (
  
  <main className={s.main}>
    <div>
        <img className={s.img} src={Picture} alt="" />
    </div>
    <div className={s.content}>
        <div>
            <img style={{width: '150%'}} src={Logo} alt="" />
        </div>
        <div>
            <h2 style={{color: '#09093799'}}>Bem Vindo(a)!</h2>
            <h1><strong>Entre na sua conta</strong></h1>
        </div>
        <div className={s.inputs_div}>
            <p><strong>Email</strong></p>
            <input className={s.input} type="text" placeholder="Email"/>
            <p><strong>Senha</strong></p>
            <input className={s.input} type="password" placeholder="Senha"/>
        </div>
        <div className={s.buttons_div}>
            <button className={s.entrar_button}><p className={s.p}>Entrar</p></button>
            <button className={s.cadastrar_button}><p className={s.p}>Cadastre-se</p></button>
        </div>
    </div>
        
  </main>  
    
    
)

}