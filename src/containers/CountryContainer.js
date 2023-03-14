import { useState, useEffect } from "react";
import CountryComponent from "../components/CountryComponent";

const CountryContainer = () => {

    const[countries, setCountries] = useState([]);

    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))

    }, [])

    const [visitedCountries, setVisitedCountries] = useState([]);

    const moveCountryToVisitedList = (country) => {
        setVisitedCountries([...visitedCountries, country])
    }
    


    // const countryNames = countries.map((country) => country.name.common);

    // console.log(countryNames);

    console.log(visitedCountries)

    return(

        <>
            {
            countries ? countries.map(function(country) { 
                return (                
                <>
                <CountryComponent country={country} moveCountryToVisitedList={moveCountryToVisitedList}/>
                </>)})
                : "No countries found"
            }
    

            <h2>Visited Countries:</h2>
            {
            visitedCountries ? visitedCountries.map(function(country) { 
                return (                
                <>
                <CountryComponent country={country} moveCountryToVisitedList={() => {console.log("Already added country!")}} />
                </>)})
                : "No countries found"
            }
        </>



    )

}

export default CountryContainer;