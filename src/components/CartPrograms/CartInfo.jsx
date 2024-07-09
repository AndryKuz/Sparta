import { BookNow } from "../Button/BookNow";
import style from "./CartInfo.module.scss";

const CartInfo = () => {
    return (
        <div>
            <div className={style.left}>
                <h3>"Short pleasure"</h3>
                <span></span>
                <p>€120 per person</p>
                <p>120 minutes / 5 guests maximum</p>
                <BookNow />
            </div>
            <div className={style.right}></div>
        </div>
    );
};

export default CartInfo;
