import Title from "../../common/Title";
import { nameButton, nameTitle } from "../../constants/common";
import Button from "../Button/Button";
import style from "./Offers.module.scss";

const Offers = () => {
    return (
        <div className={style.programs}>
            <Title title1={nameTitle[0][1]} title2={nameTitle[0][2]} />
            <div className={style.buttons}>
                {nameButton.map(({ title }) => (
                    <Button key={title} nameButton={title} />
                ))}
            </div>
        </div>
    );
};

export default Offers;
