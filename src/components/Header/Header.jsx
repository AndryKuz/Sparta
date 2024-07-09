import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import { FaInstagram } from "react-icons/fa";

import style from "./Header.module.scss";

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className={style.header}>
                    <div className={style.instagram}>
                        <FaInstagram />
                    </div>
                    <Logo className={style.logo} />
                    <div className={style.navigation}>
                        <div className={style.menu}>
                            <button>Book now</button>
                        </div>
                        <button type='button' class={style.burger}>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
