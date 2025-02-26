import Logo from '../../assets/Logo.svg'
import User from '../../assets/User.svg'
import Shopping_cart from '../../assets/shopping_cart.svg'
import s from './header.module.css'
import '../../css/globals.css'

export default function Header() {

    return (
        <header>
            <div className={s.main_header}>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={s.icons_div}>
                    <div>
                        <button className={s.user_button}>
                            <img src={User} alt="user" />
                        </button>
                        
                    </div>
                    <div>
                        <button className={s.shopping_cart_button}>
                            <img src={Shopping_cart} alt="shopping_cart" />
                        </button>
                        
                    </div>
                </div>
            </div>
            
            

        </header>
    )

}