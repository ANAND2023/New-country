
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Country.css'
const Country = () => {
    const [countryName, setCountryName] = useState('');
    const [countryInfo, setCountryInfo] = useState("bharat")

    const hanadeleInput = ((e) => {
        setCountryName(e.target.value)
    })

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://restcountries.com/v3.1/name/${countryName}`
            ); // Replace with your API URL
            setData(response.data);
            console.log(response);
            // console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setCountryInfo(null)
        }

    }

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/name/bharat");
                setData(response.data);
                console.log(response);
                // console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="main">
            <div className="center">
                <div className="input_tag">
                    <input type="text" placeholder="Enter Country Name.." onChange={hanadeleInput} />
                    <button onClick={handleSearch}>Search</button>
                  
                </div>
                <ul>
                    {data.map((item) => (
                        <>
                            <h1 className="input_tag">{item.name.common} </h1>
                            <div className="images">
                                <img className="img1" src={item.flags.svg} alt={item.flags.alt} />
                                <img className="img2" src={item.coatOfArms.png} alt={item.flags.alt} />
                            </div>
                            <h2 className="input_tag">{item.name.official} </h2>

                            <div className="col">
                                <div className="row">
                                    <li key={item.id}><b>Capital</b> : {item.capital}</li>
                                    <li key={item.id}> <b>Area </b>: {item.area}</li>
                                    <li key={item.id}><b>Borders</b> : {item.borders}</li>
                                </div>
                                <div className="row">
                                    <li key={item.id} ><b> Population </b>: {item.population}</li>
                                    <li key={item.id}><b>Region</b> : {item.region}</li>
                                    <li key={item.id}><b>startOfWeek</b> : {item.startOfWeek}</li>
                                </div>

                            </div>




                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Country;
