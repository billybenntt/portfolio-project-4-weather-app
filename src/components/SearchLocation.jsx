import { useGlobalContext } from '../hooks/context.jsx'

function SearchLocation () {

  const { toggleSidebar } = useGlobalContext()

  return (
    <div className="text-gray-150">

      {/*CLOSE BTN*/}
      <div className="text-right">
        <button className="text-2xl" onClick={toggleSidebar}>
          <i className="fa fa-times"></i>
        </button>
      </div>

      {/*SEARCH LOCATIONS*/}

      <div className="flex justify-between my-5 space-x-4">
        <input
          type="text"
          className="border border-gray-150 bg-transparent p-3 flex-grow"
          placeholder="search location"
        />
        <button className="bg-[#3C47E9] py-3 px-5 hover:bg-[#3C47E9]/70">
          Search
        </button>
      </div>

      {/*PREDEFINED LOCATIONS*/}

      <div className="mt-20">
        <button className="hover:border border-gray-250 px-4 py-6 w-full flex justify-between">
          <p>London</p>
          <i className="fa fa-chevron-right text-gray-350"></i>
        </button>

        <button className="hover:border border-gray-250 px-4 py-6 w-full flex justify-between">
          <p>Taipei</p>
          <i className="fa fa-chevron-right text-gray-350"></i>
        </button>

      </div>
    </div>
  )
}

export default SearchLocation
