import style from "./ImageForCart.module.scss";

const ImageForCart = ({ color, svg }) => {
    return (
        <div className={style.cart} style={{ backgroundColor: color }}>
            <div className={style.image}>{svg}</div>
        </div>
    );
};

export default ImageForCart;
