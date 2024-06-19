import { useEffect } from 'react'
import './App.css'

function App() {



    useEffect(() => {
        const url = import.meta.env.VITE_API_URL;
        const options = {
            method: "get",
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': import.meta.env.VITE_API_HOST
            }
        }

        async function func(){
            try{
                await getLocation()
                const position = localStorage.getItem('position')
                const endpoint = `/listingsByLatLng?lat=${position.lat}&lng=${position.long}&range=500&offset=0&bedrooms=1&maxGuestCapacity=2`
                const response = await fetch(url+endpoint, options);
                console.log(response);
                const result = await response.json();
                console.log(result);
            }catch(err){
                console.error(err)
            }
        }

        func();

    },[])

    const getLocation = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            localStorage.setItem("position", {lat: position.coords.latitude, long: position.coords.longitude})
        })
    }

    return(
        <>
        <nav>

        </nav>
        <main>
            <button onClick={getLocation}>location</button>
        </main>
        <footer>

        </footer>
        </>
    )
}

export default App
