import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
export const BrandLogo = () => {
    return (
        <>
            {/* Clients */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className=" sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
                    <h1 className="text-gray-600 text-lg">
                        Our Brands
                    </h1>
                </div>
                {/* End Title */}
                <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
                    <img src={brand1} className="w-24 h-auto sm:w-auto sm:h-auto"/>
                    <img src={brand2} className="w-24 h-auto sm:w-auto sm:h-auto"/>
                </div>
            </div>
            {/* End Clients */}
        </>

    )
}