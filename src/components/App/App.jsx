import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/AppRoutes";

const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className='content'>
                <div className='container'>
                    <AppRoutes />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
