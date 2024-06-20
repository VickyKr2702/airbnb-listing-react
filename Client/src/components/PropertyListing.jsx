/* eslint-disable react/prop-types */
import PropertyCard from "./PropertyCard"

const PropertyListing = ({stays}) => {

    console.log(stays)

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 py-10 flex-grow justify-between gap-5 md:gap-10">
            {stays.map((stay, idx)=>(
                <PropertyCard key={idx} stay={stay}/>
            ))}
        </div>
    )
}

export default PropertyListing