import AdditionalServices from "../components/AdditionalServise/AdditionalServices";
import CartPrograms from "../components/CartPrograms/CartPrograms";

import Offers from "../components/Offers/Offers";
import OurReviews from "../components/OurReviews/OurReviews";

const Home = () => {
    return (
        <>
            <Offers />
            <CartPrograms />
            <AdditionalServices />
            <OurReviews />
        </>
    );
};

export default Home;
