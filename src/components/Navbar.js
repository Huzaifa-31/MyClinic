import { PiBell } from "react-icons/pi";
import messages from "../messages.svg"
import React, { useEffect, useRef } from "react";

export default function Navbar({ setSearchValue, searchResults, handleSelect, search }) {
    const searchRef = useRef(null)
    const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
          setSearchValue("")
        }
    }
    
    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])
    
    return (
        <div className="flex relative justify-between pt-4">
            <div className="relative" ref={searchRef}>
            <input 
                type="text"
                value={search}
                onChange={(e) => setSearchValue(e.target?.value)} 
                className="border-[#B9C1E2] rounded-md border text-sm py-2 px-2 tracking-wide" 
                placeholder="Search .." 
            />
            {searchResults && (
                <div className="absolute left-0 top-[100%] flex gap-1 flex-col bg-white w-44 mt-2 border border-gray-500 rounded-lg py-2 h-40 overflow-y-scroll">
                    {searchResults.length > 0 ? searchResults.map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => handleSelect(item.id)}
                            className="hover:bg-blue-500 hover:text-white rounded-md p-2 py-0 cursor-pointer"
                        >
                            {item.patient.last_name} {item.patient.first_name}
                        </div>
                    )) : <div>No results</div>}
            </div>)}
            </div>
            <div className="icons flex gap-4 mr-10">
                <img src={messages} size={24} alt="message" />
                <PiBell size={36} />
            </div>

        </div>
    )
}