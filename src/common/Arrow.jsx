import style from "./Arrow.module.scss";

export const Arrow = ({ direction }) => {
    const arrowClass =
        direction === "left" ? style.arrowLeft : style.arrowRight;

    return (
        <div className={`${style.arrow} ${arrowClass}`}>
            <span className={style.arrow} />
        </div>
    );
};
