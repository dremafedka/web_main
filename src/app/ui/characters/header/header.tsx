import Search from "@/app/ui/characters/header/search";
import Filter from "@/app/ui/characters/header/filter";

export default function Header () {
    return (
        <section className="flex items-center mt-5">
            <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
                <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <div
                        className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-1/2">
                            <Search placeholder={"Search character"}/>
                        </div>
                        <div
                            className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                            <div className="flex items-center w-full space-x-3 md:w-auto">
                                <Filter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
