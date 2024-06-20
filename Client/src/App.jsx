import { useEffect, useState } from 'react'
import PropertyListing from './components/PropertyListing';
import Navbar from './components/Navbar';
import './App.css'

function App() {
    
    const [stays, setStays] = useState([]);
    const [filter, setFilter] = useState("");
    const [originalStays, setOriginalStays] = useState([])

    async function fetchData(){
        try{
            const res = await fetch(import.meta.env.VITE_API_URL)
            const data = await res.json();
            const s = data.data.presentation.staysSearch.mapResults.mapSearchResults
            setOriginalStays([...s])
            setStays([...s])
        }catch(err){
            console.log('error in the useEffect')
        }
    }
    
    useEffect(()=>{
        fetchData()
    },[])

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
                var ss = [...originalStays];
                console.log(filter)
                console.log('before:',stays)
                if(filter.length != 0){
                    console.log('here too');
                    ss = ss.filter((item) => {
                        console.log("titles:",item.listing.title)
                        const re = new RegExp(filter, "i")
                        // const re = /i
                        const result = re.test(item.listing.title)
                        console.log(result);
                        return result
                    })
                    console.log('after:',ss)
                    setStays([...ss])
                }else{
                    fetchData()
                }
            }catch(err){
                console.error(err)
            }
        }

        func();

    },[filter])

    useEffect(()=>{
        console.log("stays changed")
    },[stays])

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
