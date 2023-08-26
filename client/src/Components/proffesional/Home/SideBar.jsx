import React from 'react'

function SideBar() {
  return (
    <>
    <div className="absolute left-0 flex h-screen w-72 flex-col overflow-hidden rounded-r-2xl bg-gray-700 text-white">
      <h1 className="mt-10 ml-10 text-3xl font-bold">Urbane</h1>
      <ul className="mt-20 space-y-3">
        <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2
               2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2
                0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></span>
          <span className="">Overview</span>
        </li>
        <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600">
          <span
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></span
          ><span className="">Transaction</span>
          <svg className="absolute -top-1/2 -right-1 h-32 w-8 text-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="399.349 57.696 100.163 402.081" width="1em" height="4em">
            <path fill="currentColor" d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z" />
          </svg>
        </li>
        <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></span>
          <span className="">Send Money</span>
        </li>
        {/* Add more list items for other sections like Payments, Cards, Settings */}
      </ul>

      <div className="my-6 mt-auto ml-10 flex cursor-pointer">
        <div>
          <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
        </div>
        <div className="ml-3">
          <p className="font-medium">Palmer</p>
          <p className="text-sm text-gray-300">Kiev, Ukraine</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SideBar