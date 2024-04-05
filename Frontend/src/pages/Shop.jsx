import { useState, useEffect } from 'react';
import axios from "axios";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import './Shop.css';

function Shop(){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/advert")
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.error('Erreur lors de la requête :', error);
            });
    }, []);

    return (
        <>
        <NavBar />
        <SearchBar />
        <div className='container'>
        {data.map((advertData, index) => (
                <div key={index} className='card-container'>
                <Card data={advertData} />
                </div>
        ))}
        </div>
        </>
    )
}

export default Shop;
