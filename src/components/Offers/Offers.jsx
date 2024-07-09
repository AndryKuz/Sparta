import Button from "../Button/Button";
import style from "./Offers.module.scss";

const Offers = () => {
    return (
        <>
            <div className={style.offers}>
                <div className={style.title}>
                    <h3>Our</h3>
                    <h4>programs</h4>
                </div>
                <div>
                    <span></span>
                </div>
            </div>
            <div>
                <Button />
            </div>
        </>
    );
};

export default Offers;
