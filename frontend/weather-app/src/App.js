import React from "react";
import Weather from "./Weather";
import './index.css';

const App = () => {
    return (
        <div className="h-screen flex items-start justify-center pt-40 bg-gradient-to-r from-[#C6E7FF] via-[#D4F6FF] to-[#FFDDAE]">
            <Weather />
        </div>
    );
};

export default App;
