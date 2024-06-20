/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({setFilter}) => {

    const handleInput = (e) => {
        e.preventDefault();
        console.log('submit called')
        console.log(e.target.queryString.value)
        const value = e.target.queryString.value;
        // const value = e.target.value
        console.log('here');
        setFilter(value)
    }

    return (
        <div className="bg-red-500 p-4 flex justify-center items-center">
            <form onSubmit={handleInput} className='bg-white flex justify-between rounded-full overflow-hidden p-1'>
                <input className="p-2 focus:outline-none" type="text" name='queryString' placeholder='Enter a location'/>
                <button type='submit' className="rounded-full bg-red-500 px-4 py-3 cursor-pointer text-white"><FontAwesomeIcon icon={faSearch}/></button>
            </form>
        </div>
    )
}

export default Navbar