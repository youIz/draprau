import Navbar from './Navbar'
function Country(){
    const data = location.state?.data;
    console.log(data);
    console.log(data[0].capital);
    return(
        <div className='Country'>
            <Navbar />
            <div className='bg-gray-300 h-screen'>
                <div>
                    <button className='rounded-lg bg-white text-black shadow-gray-400 ml-32 my-10 shadow-lg w-[100px] h-[40px]'>Back</button>
                </div>
                <div className='flex w-full h-full justify-center gap-5 mt-10 ml-16'>
                    <div className='w-[45%] h-[100%]'>
                        <img className="w-[650px] h-[450px]" src={data[0].flags.png} alt="" />
                    </div>
                    <div className='w-[45%] h-[100%]'>
                        <p className="font-bold text-4xl">Nom du pays</p>
                        <div className='flex gap-14'>
                            <div className='flex flex-col gap-5 mt-10 text-lg'>
                                <p className="text-black"><span className="font-bold">Native name</span> : {data[0].population}</p>
                                <p className="text-black"><span className="font-bold">Population</span> : {data[0].population}</p>
                                <p className="text-black"><span className="font-bold">Region</span> : {data[0].population}</p>
                                <p className="text-black"><span className="font-bold">Sub Region</span> : {data[0].region}</p>
                                <p className="text-black"><span className="font-bold">Capital</span> : {data[0].capital}</p>
                                <p className="text-black"><span className="font-bold">Border Countries : </span> BTN BTN BTN</p>
                            </div>
                            <div className='mt-10 gap-5 flex flex-col'>
                                <p className="text-black"><span className="font-bold">Top Level Domain</span> : .be</p>
                                <p className="text-black"><span className="font-bold">Currencies</span> : Euro</p>
                                <p className="text-black"><span className="font-bold">Languages </span> : French, Dutch, German</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country;