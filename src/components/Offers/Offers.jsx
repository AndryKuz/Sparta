import Title from "../../common/Title";
import { nameButton, nameTitle } from "../../constants/common";
import Button from "../Button/Button";
import style from "./Offers.module.scss";

const Offers = () => {
    return (
        <div className={style.programs}>
            {/* <div className={style.offers}>
                <div className={style.title}>
                    <h3>Our</h3>
                    <h4>programs</h4>
                </div>
                <div>
                    <span></span>
                </div>
            </div> */}
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
