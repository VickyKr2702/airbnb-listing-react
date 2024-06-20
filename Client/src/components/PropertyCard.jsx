/* eslint-disable react/prop-types */
const PropertyCard = ({stay}) => {
    
    return (
        <div className="flex flex-col overflow-hidden">
            <div className=" flex">
                <img className="rounded-xl min-w-full max-h-[w-full]" src={stay.listing.contextualPictures[0].picture} alt="" />
            </div>
            <div className="content basis-[20%] text-start mt-2">
                <h2 className="text-xl font-normal flex justify-between gap-[3px]"><span className="text-base text-ellipsis whitespace-nowrap overflow-hidden font-semibold">{stay.listing.title}</span><span className="text-sm whitespace-nowrap">{stay.listing.avgRatingLocalized}</span></h2>
                <h2 className="font-light leading-4 whitespace-nowrap text-ellipsis overflow-hidden text-gray-700">{stay.listing.name}</h2>
                {stay.listing.structuredContent.primaryLine && 
                    <p className="font-light leading-4 whitespace-nowrap text-ellipsis overflow-hidden text-gray-700">{stay.listing.structuredContent.primaryLine.body}</p>
                }
                <p className="font-light leading-4 mt-2 pb-2"><strong>{stay.pricingQuote.structuredStayDisplayPrice.primaryLine.price || stay.pricingQuote.structuredStayDisplayPrice.primaryLine.discountedPrice}</strong> {stay.pricingQuote.structuredStayDisplayPrice.primaryLine.qualifier}</p>
            </div>
        </div>
    )
}

export default PropertyCard