import style from "./OurReviews.module.scss";

import Title from "../../common/Title";
import { nameTitle } from "../../constants/common";
import { Arrow } from "../../common/Arrow";

const OurReviews = () => {
    return (
        <div className={style.ourReviews}>
            <div className={style.title}>
                <Title title1={nameTitle[2][1]} title2={nameTitle[2][2]} />
                <Arrow direction='left' />
            </div>
        </div>
    );
};

export default OurReviews;
