import React from "react";
import ReactDOM from "react-dom/client";

import Info from "/components/Info/Info";
import About from "/components/About/About";
import Interests from "/components/Interests/Interests";
import Footer from "/components/Footer/Footer";

function App() {
    return (
        <div className="business__card">
            <Info />
            <main>
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);