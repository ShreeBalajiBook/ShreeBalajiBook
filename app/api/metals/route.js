export const GET = async () => {
  const metalResponse = await fetch(
    "https://investing4.p.rapidapi.com/commodities/metals",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "f7748dcc75mshca390d38b8da639p1c932ejsn1ee66680ea59",
        "X-RapidAPI-Host": "investing4.p.rapidapi.com",
      },
    }
  );
  const energyResponse = await fetch(
    "https://investing4.p.rapidapi.com/commodities/energy",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "f7748dcc75mshca390d38b8da639p1c932ejsn1ee66680ea59",
        "X-RapidAPI-Host": "investing4.p.rapidapi.com",
      },
    }
  );
  try {
    if (!metalResponse.ok ) {
      throw new Error(`HTTP error! status: ${metalResponse.status}`);
    }
    const metaldata = await metalResponse.json(); // or response.text() for non-JSON responses
    const energydata = await energyResponse.json(); // or response.text() for non-JSON responses

    let metalsdata = {
      mcxgold: metaldata["data"]["MCX Futures Market Quotes"][4],
      mcxsilver: metaldata["data"]["MCX Futures Market Quotes"][13],
      mcxlead: metaldata["data"]["MCX Futures Market Quotes"][9],
      mcxzinc: metaldata["data"]["MCX Futures Market Quotes"][16],
      mcxcopper: metaldata["data"]["MCX Futures Market Quotes"][2],
      mcxcrudeoil: energydata["data"]["MCX Futures Market Quotes"][1],
      mcxnaturalgas: energydata["data"]["MCX Futures Market Quotes"][2],
    };


    return new Response(JSON.stringify(metalsdata), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Failed to fetch data", { status: 500 });
  }
};

// try {
//   const data = response.body;
//   console.log(data);
//   return new Response(JSON.stringify(response.body), { status: 200 });
// } catch (error) {
//   return new Response("Failed to fetch all Prompts", { status: 500 });
// }
// const response = await axios.request(options);
// const response = await fetch(
//   "https://investing4.p.rapidapi.com/commodities/metals",
//   {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "2da82fee73msha9490162fe38560p184755jsnfe577cb7ce38",
//       "X-RapidAPI-Host": "investing4.p.rapidapi.com",
//     },
//   }
// );
// const options = {
//   method: "GET",
//   url: "https://investing4.p.rapidapi.com/commodities/metals",
//   headers: {
//     "X-RapidAPI-Key": "2da82fee73msha9490162fe38560p184755jsnfe577cb7ce38",
//     "X-RapidAPI-Host": "investing4.p.rapidapi.com",
//   },
// };
