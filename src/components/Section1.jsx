import image1 from "../assets/images/investor-update.jpg"
import image2 from "../assets/images/property-update.jpg"
import image3 from "../assets/images/hospitality-update.jpg"

export const Section1 = () => {
    return (
        <>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    {/*<h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>*/}
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-3xl shadow-lg ">
                                <div className="overflow-hidden">
                                    <img
                                        src={image1}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-4 text-black">Investor Updates</h3>
                                    <p className="text-gray-700">Join us to create sustainable real estate & hospitality
                                        business.
                                    </p>
                                    <div className="mt-5 flex">
                                        <a href="#" className="text-base font-semibold leading-7 text-fuchsia-600">
                                            Learn more <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-3xl shadow-lg ">
                                <div className="overflow-hidden">
                                    <img
                                        src={image2}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-4 text-black">Property Updates</h3>
                                    <p className="text-gray-700">Join us to create sustainable real estate & hospitality
                                        business.
                                    </p>
                                    <div className="mt-5 flex">
                                        <a href="#" className="text-base font-semibold leading-7 text-fuchsia-600">
                                            Learn more <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-3xl shadow-lg ">
                                <div className="overflow-hidden">
                                    <img
                                        src={image3}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-4 text-black">Hospitality Updates</h3>
                                    <p className="text-gray-700">Join us to create sustainable real estate & hospitality
                                        business.
                                    </p>
                                    <div className="mt-5 flex">
                                        <a href="#" className="text-base font-semibold leading-7 text-fuchsia-600">
                                            Learn more <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}