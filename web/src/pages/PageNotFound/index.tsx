import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';

const PageNotFound = () => {
    return (
        <div>
            <Header title="Page not found" ></Header>
            <p style={{ textAlign: "center" }}>
                <h2>Página não encontrada :(</h2>
            </p>
        </div >
    );
};

export default PageNotFound;