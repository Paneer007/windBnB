const Card=({obj})=>{
    return(
        <div className="flex flex-col justify-center">
            <img src={obj.photo} alt={`${obj.city} ${obj.country} ${obj.title}`} className="h-[269px] w-[395px] rounded-3xl my-2"   />
            <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between gap-2.5">
                    {obj.superHost===true?<p className="w-[100px] h-[28px] border-[1px] border-solid rounded-xl text-xs flex flex-row justify-center items-center font-bold">Super Host</p>:null}
                    {obj.type==null?null:<p className="text-[14px] flex flex-row justify-center items-center">{obj.type}.</p>}
                    {obj.beds==null?null:<p className="text-[14px] flex flex-row justify-center items-center">{obj.beds} beds</p>}
                </div>
                <p>
                <span className="text-red-700 text-xl">★</span>{obj.rating}
                </p>
            </div>
            <div>
                <p className="text-base font-bold">{obj.title}</p>
            </div>
        </div>
    )
}
export default Card