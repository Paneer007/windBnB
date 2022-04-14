import { useEffect, useState } from "react";
import Card from "./components/HousingCard";
import userData from "./data/stays.json"
function App() {
  const [search,setSearch]=useState(false)
  const [location,setLocation]=useState("Helsinki")
  const [country,setCountry]=useState("Finland")
  const [searchMode,setSearchMode]=useState('location')
  const [childCount,setChildCount]=useState(0);
  const [adultCount,setAdultCount]=useState(0);
  const [noOfGuest,setNoOfGuest]=useState(0)
  const [updLoc,setUpdLoc]=useState("Helsinki")
  let cityList=[];
  userData.forEach(x=>cityList.push({country:x.country,city:x.city,id:cityList.length}))
  const locationArr = userData.reduce((acc, current) => {
    const x = acc.find(item => item.city === current.city);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  const totalGuest = childCount+adultCount
  const displayArr=userData.filter(x=>x.city===location&& noOfGuest<= x.maxGuests)
  console.log(displayArr)
  const searchFilter =()=>{
    setLocation(updLoc)
    setSearch(false)
    setNoOfGuest(childCount+adultCount)
  }
  const hello=(e)=>{
    if(e.key==='Escape'){
      setSearch(false)
    }
  }
  useEffect(()=>{
    document.body.addEventListener('keydown',hello)
  },[])
  return (
    <div className="App py-[32px] px-[96px] font-Montserrat relative">
        {
          search===false?
          <div className="flex flex-row justify-between" >
            <div className="flex flex-row justify-center items-center">
              <img src={require("./images/logo.png")}/>
            </div>
            <div className="flex flex-row justify-center items-center shadow-md rounded-xl py-5 px-4 gap-1 "onClick={()=>setSearch(true)}>
              <p className="text-[14px] font-normal">{location},{country}</p>
              <span className="inline-block my-0 mx-[5px] border-solid border-grey-400 border-l-2 h-6"></span>
              <p className="text-[14px] font-normal">{noOfGuest===0?'Add more':`${noOfGuest} guests`}</p>
              <span className="inline-block my-0 mx-[5px] border-solid border-grey-400 border-l-2 h-6"></span>
              <p className="text-airbnbRed">🔎︎</p>
            </div>
        </div>
        :
        <div  className="fixed w-full z-10 bg-white top-0 right-0 shadow-infinite flex flex-col p-[96px] h-[450px]">
          <div className="flex flex-row justify-center items-center mb-[32px] rounded-xl px-[27px] shadow-lg">
            <div className="flex-1 p-2"  onClick={()=>setSearchMode("location")}>
              <p className="text-[9px] font-extrabold">Location</p>
              <p className="text-[14px]">{updLoc},{country}</p>
            </div>
            <span className="inline-block my-0 mx-[5px] border-solid border-grey-400 border-l-2 h-10"></span>
            <div className="flex-1 p-2" onClick={()=>setSearchMode("guests")}>
              <p className="text-[9px] font-extrabold">guest</p>
              <p className="text-[14px]">{noOfGuest===0?'Add more':`${noOfGuest} guests`}</p>
            </div>
            <span className="inline-block my-0 mx-[5px] border-solid border-grey-400 border-l-2 h-10"></span>
            <div className="flex justify-center items-center p-[4px] flex-1">
              <p className="bg-airbnbRed text-white text-center px-[24px] py-[9px] rounded-lg" onClick={searchFilter}>🔎︎ Search</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-1 pl-[27px]">
                {searchMode==='location'?
                locationArr.map(x=><p className="my-6" onClick={()=>setUpdLoc(x.city)}>📍 {x.city},{x.country}</p>)
              :
              null}
            </div>
            <div className="flex-1 ">
              {
                searchMode==='guests'?
                <div>
                  <div>
                    <p className="font-bold text-[14px]">Adults</p>
                    <p className="font-regular text-[14px]">Ages 13 or above</p>
                    <div className="flex flex-row">
                      <button className="w-[23px] h-[23px] border-solid border-[1px] text-center flex flex-col justify-center items-center m-[12px]" onClick={()=>adultCount===0?null:setAdultCount(adultCount-1)}>-</button>
                      <p className="my-[12px]">{adultCount}</p>
                      <button className="w-[23px] h-[23px] border-solid border-[1px] text-center flex flex-col justify-center items-center m-[12px]" onClick={()=>setAdultCount(adultCount+1)}>+</button>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-[14px]">Children</p>
                    <p className="font-regular text-[14px]">Ages 2-12</p>
                    <div className="flex flex-row">
                      <button className="w-[23px] h-[23px] border-solid border-[1px] text-center flex flex-col justify-center items-center m-[12px]" onClick={()=>childCount===0?null:setChildCount(childCount-1)}>-</button>
                      <p className="my-[12px]">{childCount}</p>
                      <button className="w-[23px] h-[23px] border-solid border-[1px] text-center flex flex-col justify-center items-center m-[12px]" onClick={()=>setChildCount(childCount+1)}>+</button>
                    </div>
                  </div>
                </div>
                :
                null
              }
            </div>
            <div className="flex-1 ">
            </div>
          </div>
        </div>
        }
      <div className="flex flex-col py-4">
        <div className="flex flex-row justify-between my-[32px]">
          <div className="text-2xl font-bold">Stays in {country}</div>
          <p>{displayArr.length>12?"12+ stays":`${displayArr.length} stays`}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-between">
          {displayArr.map(x=><Card obj={x}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
