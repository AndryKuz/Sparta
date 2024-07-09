import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className={style.footer}>
                    <div>
                        <Logo className={style.logo} />
                    </div>
                    <div>
                        <nav className={style.menu}>
                            <Link>Gallery</Link>
                            <Link>About Spartisan</Link>
                            <Link>Gift certificates</Link>
                            <Link>Booking</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
