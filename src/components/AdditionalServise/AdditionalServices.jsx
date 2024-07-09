import Title from "../../common/Title";
import { nameTitle } from "../../constants/common";
import style from "./AdditionalServices.module.scss";

const AdditionalServices = () => {
    return (
        <section className={style.service}>
            <Title title1={nameTitle[1][1]} title2={nameTitle[1][2]} />
        </section>
    );
};

export default AdditionalServices;
