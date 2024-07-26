import { BiSearch } from "react-icons/bi";

const Search = () => {
    return ( 
        <div className="
            w-full
            md:w-auto
            rounded-full
            border-[1px]
            transition
            cursor-pointer
            hover: shadow-md
            shadow-sm
            py-2
        ">
            <div className="
                flex
                flex-row
                items-center
                justify-between
            ">
                <div
                    className="
                        text-sm
                        font-semibold
                        px-6"
                >Any Where
                </div>
                <div
                    className="
                        hidden
                        text-sm
                        font-semibold
                        sm:block
                        px-6
                        flex-1
                        border-x-[1px]
                        text-center"
                >Any Week
                </div>
                <div className="
                    flex
                    flex-row
                    gap-3
                    text-gray-500
                    pr-4
                    pl-2
                    items-center
                ">
                    <div 
                        className="
                        hidden
                        sm:block
                        text-sm
                        text-center">
                            Add guests
                    </div>
                    <div
                    className="
                        bg-rose-500 text-white p-2 rounded-full"
                    >
                        <BiSearch/>
                    </div>
                </div>
               
            </div>
        </div>
     );
}
 
export default Search;