import AdditionalServices from "../components/AdditionalServise/AdditionalServices";
import CartPrograms from "../components/CartPrograms/CartPrograms";
import MainPage from "../components/MainPage/MainPage";
import Offers from "../components/Offers/Offers";

const Home = () => {
    return (
        <>
            <MainPage />
            <Offers />
            <CartPrograms />
            <AdditionalServices />
        </>
    );
};

export default Home;
