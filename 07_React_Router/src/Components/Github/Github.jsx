import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const[data , setData] = useState({})
  // useEffect(()=> {
  //   fetch(`https://api.github.com/users/MdTariq01`)
  //   .then((Response) => Response.json())
  //   .then((data) => 
  //   setData(data))
  // } , [])
  return (
    <>
      <div className="bg-orange-700 p-2 mb-0 text-2xl text-white text-center">Github Repos : {data.public_repos}</div>
      <div className=" bg-orange-700 flex items-center justify-center p-4">
        <img className="flex items-center justify-center w-52" src="https://avatars.githubusercontent.com/u/184133887?v=4"></img>
      </div>
    </>
  )
}

export default Github

export const githubinfoLoader = async () => {
  const Response = await fetch(`https://api.github.com/users/MdTariq01`)
  return Response.json()
}