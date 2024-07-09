import style from "./Button.module.scss";

const nameButton = [
    "Short pleasure",
    "Deep delight",
    "Steam room",
    "Your own bather",
    "One on one",
];

const Button = () => {
    return <button className={style.but}>Name</button>;
};

export default Button;
