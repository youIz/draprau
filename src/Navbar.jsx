import { useEffect } from "react"
export default function Navbar() {

    useEffect(() => {
        
    })

    return (
        <div className='w-full h-[80px] mt-5 flex justify-between m-4'>
            <h1 className='text-5xl font-bold ml-28'>Where in the world?</h1>
            <button className='bg-black absolute right-44 text-white rounded-xl w-[150px] h-[50px]'>Dark mode</button>
        </div>
    )
}
