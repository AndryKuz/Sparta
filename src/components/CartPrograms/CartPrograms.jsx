import { ReactComponent as Svg } from "../../assets/images/cart/short.svg";

import style from "./CartPrograms.module.scss";

import ImageForCart from "./ImageForCart";
import CartInfo from "./CartInfo";


const CartPrograms = () => {
    return (
        <section className={style.cart}>
            <div>
                <ImageForCart color='#1C1C1C' svg={<Svg />} />
            </div>
            <div>
                <CartInfo />
            </div>
        </section>
    );
};

export default CartPrograms;
