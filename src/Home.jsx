import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Cards from './Cards';

function Home() {
    let [data, setData] = useState([]);

    const fetchData = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }
    function compare(a, b) {
        if (a.name.common < b.name.common) {
            return -1;
        }
        if (a.name.common > b.name.common) {
            return 1;
        }
        return 0;
    }
    const sortedData = data.sort(compare);
    useEffect(() => {
        fetchData()

    }, [])
    console.log(data);
    return (
        <div className='Home w-screen h-screen overflow-x-hidden flex flex-col items-center'>
            <Navbar />
            <div className='bg-gray-300 w-screen'>
                <div className='w-1/2 flex absolut justify-start pt-8 pl-24r'>
                    <div className="flex items-center pl-28 cursor-pointer">
                        <svg aria-hidden="true" className="relative left-12 w-5 h-5 dark:text-black" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" className='py-3 px-20 shadow-xl' placeholder='Search for a country' />
                </div>
                <Link to={'/country/:id'} state={{ data: data }}>
                    <div className="Main w-[100%] ml-28 mt-28 flex gap-10 flex-wrap">

                        {data.map((element) => {
                            return <Cards name={element.name.common} population={element.population} region={element.region} capital={element.capital} src={element.flags.png} />
                        })}

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home