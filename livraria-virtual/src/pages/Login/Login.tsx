
import Picture from "../../assets/Picture.png"
import s from './Login.module.css'
import Logo from "../../assets/Logo.svg"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

const userSchema = z.object({
    Email: z.string().nonempty('O e-mail não pode ser vazio').email('E-mail inválido'),
    Senha: z.string().nonempty('A senha não pode ser vazia').min(6, 'A senha deve ter no mínimo 6 caracteres')
})

type User = z.infer<typeof userSchema>

export default function Login() {
    
    var nav = useNavigate()

    var form = useForm({
        resolver: zodResolver(userSchema)
    })

    async function Validate(data: User) {
        try{
            form.reset()
            await new Promise(resolve => setTimeout(resolve, 2000))
            nav('/home')
        }catch{
            
            form.setError('root', {
                type: 'server',
                message: 'Erro ao fazer login'
            })
        }
        


    }

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
                <form onSubmit={form.handleSubmit(Validate)}>

                    <p><strong>Email</strong></p>
                    <input className={s.input} type="text" placeholder="Email" {...form.register("Email")}/>
                    {form.formState.errors.Email && <span className={s.errorMessage}>{form.formState.errors.Email.message}</span>}
                    <p><strong>Senha</strong></p>
                    <input className={s.input} type="password" placeholder="Senha"  {...form.register("Senha")}/>
                    {form.formState.errors.Senha && <span className={s.errorMessage}>{form.formState.errors.Senha.message}</span>}
                    <div className={s.buttons_div}>
                        <button className={s.entrar_button} disabled={form.formState.isSubmitting}><p className={s.p}>{form.formState.isSubmitting ? 'Carregando...' : 'Entrar'}</p></button>
                        <button className={s.cadastrar_button} disabled={form.formState.isSubmitting}><p className={s.p}>Cadastre-se</p></button>
                    </div>
                    {form.formState.errors.root && <span className={s.errorMessage}>{form.formState.errors.root.message}</span>}
                </form>
            </div>


        </div>
            
    </main>  
        
        
    )

}