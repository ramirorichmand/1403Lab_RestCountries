const CountryComponent = ({country, moveCountryToVisitedList}) => {

    function handleSubmit(event) {
        event.preventDefault();
        moveCountryToVisitedList(country);
    }

    return (
        <>        
        <li>{country.name.common}</li>
        <input type="checkbox" onChange={handleSubmit}/> 
        </>

    )

}

export default CountryComponent;