import style from "./Title.module.scss";

const Title = ({ title1, title2 }) => {
    return (
        <div className={style.offers}>
            <div className={style.title}>
                <h3>{title1}</h3>
                <h4>{title2}</h4>
            </div>
            <div>
                <span></span>
            </div>
        </div>
    );
};

export default Title;
