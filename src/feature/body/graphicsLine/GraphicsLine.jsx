import LineChart from "../../../components/charts/Linechart"
import React, { useEffect, useState, Fragment, useContext } from 'react'
import { isLoading } from "../../../context/isLoading"
import colors from "../../../components/style/variables/colors"
import Loader from "../../../components/loaders/loader"

function Graphics(){ 
  const {loading4, setLoading4} = useContext(isLoading)

 const [lang, setLang] = useState()

 useEffect(() => {
    fetch("http://localhost:5100/CriticalNoob02/events")
    .then( res => res.json() )
    .then( resData => {
      setLang(resData)
      setLoading4(false)
    })
    .catch(erro => console.log(erro))
 }, [])
 
  // Dados da Api
  const title = 'Eventos no Github'
  const labelToolip = 'Eventos'
  const color = []
  const labelApi = []
  const dataApi = []
  for(let key in lang){
    console.log(labelApi)
    labelApi.push(key)
    dataApi.push(lang[key])
  }


    return(
        <Fragment>
          <h1 className="titleReposGit">Linguagens usadas nos repositórios</h1>

          {
          loading4
            ?
          <Loader/>
            :
          <div className="graphicsBox">
            <LineChart
              labelData={labelApi}
              descriptionData={labelToolip}
              valueData={ dataApi }
              color={color}
              titleText={title}
            />
          </div>
          }

        </Fragment>
    )
}

export default Graphics