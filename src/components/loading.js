import React from 'react';
import DepartmentUI from './DepartmentUI/DepartmentUI';
import MainFonImage from './mainFonImage/MainFonImage';
import Navbar from "./navbar/Navbar";
import TopBook from './topBook/topBook';

function Loading(props) {
    return (
        <>
            <Navbar/>
            <MainFonImage/>
            <DepartmentUI/>
            <TopBook/>
        </>
    );
}

export default Loading;