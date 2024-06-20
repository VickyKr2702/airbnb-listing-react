import { useEffect, useState } from 'react'
import PropertyListing from './components/PropertyListing';
import Navbar from './components/Navbar';
import './App.css'

function App() {

    const [stays, setStays] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        // const url = import.meta.env.VITE_API_URL;
        // const options = {
        //     method: "get",
        //     headers: {
        //         'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        //         'x-rapidapi-host': import.meta.env.VITE_API_HOST
        //     }
        // }

        // async function func(){
        //     try{
        //         await getLocation()
        //         const position = localStorage.getItem('position')
        //         const endpoint = `/listingsByLatLng?lat=${position.lat}&lng=${position.long}&range=500&offset=0&bedrooms=1&maxGuestCapacity=2`
        //         const response = await fetch(url+endpoint, options);
        //         console.log(response);
        //         const result = await response.json();
        //         console.log(result);
        //     }catch(err){
        //         console.error(err)
        //     }
        // }

        const func = async() => {
            try{
                const res = await fetch("http://localhost:3000/api/fetchData")
                const data = await res.json();
                const s = data.data.presentation.staysSearch.mapResults.mapSearchResults
                console.log(filter)
                if(filter.length != 0){
                    console.log('here too');
                    s.filter((item) => {
                        const re = new RegExp(filter)
                        return re.test(item.listing.title)
                    })
                }
                setStays(s)
                console.log(data);
            }catch(err){
                console.error(err)
            }
        }

        func();

    },[filter])

    // const getLocation = async () => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         localStorage.setItem("position", {lat: position.coords.latitude, long: position.coords.longitude})
    //     })
    // }





    
    return(
        <>
            <Navbar setFilter={setFilter}/>
            <PropertyListing stays={stays}/>
        </>
    )
}

export default App
