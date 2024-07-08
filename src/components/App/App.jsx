import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AppRoutes } from "../Routes/AppRoutes";

const App = () => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header />
                <div className='content'>
                    <AppRoutes />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
