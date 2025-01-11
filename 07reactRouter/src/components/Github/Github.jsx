import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ujjwaljain01')
    //     .then(response => response.json())
    //     .then(data => setdata(data))
    // },[])

    return (
        <div className=" flex flex-row gap-x-96 m-4 bg-gray-500 text-white p-4 text-3xl">
            <img src={data.avatar_url} alt="not found" width={200}></img>
            Github followers: {data.followers}
        </div>
    )
}

export const getInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/ujjwaljain01')

    return response.json()
}

export default Github ;