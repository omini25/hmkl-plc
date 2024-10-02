import React, { useState } from 'react';
import management from "../assets/images/management.png"
import crs from "../assets/images/crs.jpeg"
import report from "../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg"


export const Section3 = () => {
    const [activeTab, setActiveTab] = useState(1); // 1 for the first tab

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white overflow-hidden">
            {/* Tab Nav */}
            <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                <button
                    type="button"
                    className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl border border-fuchsia-600 ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabClick(1)}
                    aria-selected={activeTab === 1}
                    aria-controls="tabs-with-card-1"
                    role="tab"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"/>
                    </svg>
                    <span className="mt-5">
                          <span
                              className={`hs-tab-active:text-fuchsia-600 block font-semibold text-gray-800 ${activeTab === 1 ? 'text-fuchsia-600' : ''}`}>
                              Management Team
                          </span>
                          <span className="hidden lg:block mt-2 text-gray-800">
                            Meet our management team.
                          </span>
                        </span>

                    <div className="mt-5 flex">
                        <a href="#" className="text-base font-semibold leading-7 text-fuchsia-600">
                            Learn more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </button>

                <button
                    type="button"
                    className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl border border-fuchsia-600 ${activeTab === 1 ? 'active' : ''}`} // Conditional class
                    onClick={() => handleTabClick(2)}
                    aria-selected={activeTab === 2}
                    aria-controls="tabs-with-card-2"
                    role="tab"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
                    </svg>
                    <span className="mt-5">
                          <span
                              className={`hs-tab-active:text-fuchsia-600 block font-semibold text-gray-800 ${activeTab === 2 ? 'text-fuchsia-600' : ''}`}>
                            Reports & Financials
                          </span>
                          <span className="hidden lg:block mt-2 text-gray-800">
                            Documents and Reports
                          </span>
                        </span>

                    <div className="mt-5 flex">
                        <a href="#" className="text-base font-semibold leading-7 text-fuchsia-600">
                            Learn more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </button>

                <button
                    type="button"
                    className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl border border-fuchsia-600 ${activeTab === 1 ? 'active' : ''}`} // Conditional class
                    onClick={() => handleTabClick(3)} // Call handleTabClick
                    aria-selected={activeTab === 3} // Set aria-selected based on state
                    aria-controls="tabs-with-card-3"
                    role="tab"
                >
                    <svg
                        className="shrink-0 hidden sm:block size-7 hs-tab-active:text-fuchsia-600 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                        <path d="M5 3v4"/>
                        <path d="M19 17v4"/>
                        <path d="M3 5h4"/>
                        <path d="M17 19h4"/>
                    </svg>
                    <span className="mt-5">
                          <span
                              className={`hs-tab-active:text-fuchsia-600 block font-semibold text-gray-800 ${activeTab === 3 ? 'text-fuchsia-600' : ''}`}>
                            CSR
                          </span>
                          <span className="hidden lg:block mt-2 text-gray-800">
                            One tool for your company to share knowledge and ship projects.
                          </span>
                        </span>

                    <div className="mt-5 flex">
                        <a href="#" className="text-base font-semibold leading-7 text-fuchsia-600">
                            Learn more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </button>
            </nav>
            {/* End Tab Nav */}


            {/* Tab Content */}
            <div className="mt-6 md:mt-8">
                <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1"
                     className={activeTab === 1 ? '' : 'hidden'}
                >
                {/* Devices */}
                    <div className="max-w-[1140px] lg:pb-32 relative">

                        {/* Browser Device */}
                        <figure
                            className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] rounded-b-lg">
                            <div
                                className="bg-gray-800 rounded-lg overflow-hidden"> {/* Added overflow-hidden and rounded-lg */}
                                <img
                                    className="w-full h-auto object-cover"
                                    src={management}
                                    alt="Features Image"
                                />
                            </div>
                        </figure>
                        {/* End Browser Device */}
                    </div>
                    {/* End Devices */}
                </div>

                <div id="tabs-with-card-2" role="tabpanel" aria-labelledby="tabs-with-card-item-2"
                     className={activeTab === 2 ? '' : 'hidden'}
                >
                    {/* Devices */}
                    <div className="max-w-[1140px] lg:pb-32 relative">
                        {/* Browser Device */}
                        <figure
                            className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] rounded-b-lg">
                            <div
                                className="bg-gray-800 rounded-lg overflow-hidden"> {/* Added overflow-hidden and rounded-lg */}
                                <img
                                    className="w-full h-auto object-cover"
                                    src={report}
                                    alt="Features Image"
                                />
                            </div>
                        </figure>
                        {/* End Browser Device */}
                    </div>
                    {/* End Devices */}
                </div>

                <div id="tabs-with-card-3" role="tabpanel" aria-labelledby="tabs-with-card-item-3"
                     className={activeTab === 3 ? '' : 'hidden'}
                >
                    {/* Devices */}
                    <div className="max-w-[1140px] lg:pb-32 relative">

                        {/* Browser Device */}
                        <figure
                            className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] rounded-b-lg">
                            <div
                                className="bg-white rounded-lg overflow-hidden">
                                <img
                                    className="w-full h-auto object-cover"
                                    src={crs}
                                    alt="Features Image"
                                />
                            </div>
                        </figure>
                        {/* End Browser Device */}
                    </div>
                    {/* End Devices */}
                </div>
            </div>
            {/* End Tab Content */}
        </div>


    )
}