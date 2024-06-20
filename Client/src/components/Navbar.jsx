/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({setFilter}) => {

    const handleInput = (e) => {
        console.log('here');
        setFilter(e.target.value)
    }

    return (
        <div className="bg-red-500 p-4 flex justify-center items-center">
            <div className='bg-white flex justify-between rounded-full overflow-hidden p-1'>
                <input className="p-2 focus:outline-none" type="text" onChange={handleInput}/>
                <div className="rounded-full bg-red-500 px-4 py-3 cursor-pointer text-white"><FontAwesomeIcon icon={faSearch}/></div>
            </div>
        </div>
    )
}

export default Navbar