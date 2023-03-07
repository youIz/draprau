function Cards({src, name, population, region, capital}) {
    return (
        <div className="Cards">
            <div className="Cards w-[250px] h-[400px] shadow-xl shadow-gray-400 cursor-pointer">
                <div className="w-[250px] h-[150px]">
                    <img className="w-[100%] h-[100%]" src={src} alt="" />
                </div>
                <div className="p-8 flex flex-col h-[50%] gap-[10px] bg-white">
                    <p className="font-bold text-xl">{name}</p>
                    <p className="text-black"><span className="font-bold">Population</span> : {population}</p>
                    <p className="text-black"><span className="font-bold">Region</span> : {region}</p>
                    <p className="text-black"><span className="font-bold">Capital</span> : {capital}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;