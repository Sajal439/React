/* eslint-disable react-refresh/only-export-components */
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
  //   const [data, setData] = useState(0);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Sajal439")
  //       .then((Response) => Response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img
        className="flex items-center justify-center"
        src={data.avatar_url}
        alt="Git Profile"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Sajal439");
  return response.json();
};
