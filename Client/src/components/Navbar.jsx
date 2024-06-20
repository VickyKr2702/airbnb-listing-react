/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({setFilter, setLocationFilter}) => {

    const handleInput = (e) => {
        e.preventDefault();
        console.log('submit called')
        console.log(e.target.locationString.value)
        const locationValue = e.target.locationString.value
        const nameValue = e.target.queryString.value
        if(locationValue){
            setLocationFilter(locationValue)
        }
        if(nameValue){
            setFilter(nameValue)
        }
    }

    return (
        <div className="bg-red-500 p-4 flex justify-center items-center">
            <form onSubmit={handleInput} className='bg-white flex justify-between rounded-full overflow-hidden p-1'>
                <input className="p-2 focus:outline-none border-r-gray-300 border-r-2" type="text" name="queryString" placeholder="Enter a Name"/>
                <input className="p-2 focus:outline-none" type="text" name='locationString' placeholder='Enter a location'/>
                <button type='submit' className="rounded-full bg-red-500 px-4 py-3 cursor-pointer text-white"><FontAwesomeIcon icon={faSearch}/></button>
            </form>
        </div>
    )
}

export default Navbar