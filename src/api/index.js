import axios from "axios"

const apiUrl="https://covid19.mathdro.id/api"

export const fetchData = async ()=>{


    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(apiUrl)
        

        return {confirmed,recovered,deaths,lastUpdate}
    }catch(err){
        console.log(err)
    }
}

export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${apiUrl}/daily`);

        const modifiedData = data.map((dailyData)=> ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))//el return luego del => esta dentro de un ({}) para que devuelva automaticamente un objeto
        return modifiedData
    }catch(err){
        console.log(err)
    }
}