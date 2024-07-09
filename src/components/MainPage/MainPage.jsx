import style from "./MainPage.module.scss";
import { ReactComponent as Arrow } from "../../assets/images/ExpandDown.svg";

const MainPage = () => {
    return (
        <div className={style.pageParent}>
            <div className={style.mainPage}>
                <h3>The art of restoring the body through</h3>
                <h2>bath procedures</h2>
                <div>
                    <span></span>
                </div>
                <Arrow />
            </div>
        </div>
    );
};

export default MainPage;
