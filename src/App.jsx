import './components/style/main.sass'
import React, { useEffect, useState } from 'react'
import requestData from './service/setGithubDataBase'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Avatar from './assets/Avatar.jpg'
import Selo from './assets/Selo.png'
import Body from './components/body/Body'


function App() {
    //Função que ira guardar os dados da requisição
    const [data, setData] = useState([])

    //Função para gerar um estado logo quando é carregado o app
    useEffect(() => {
        Promise.resolve(requestData)
        .then( res => setData(res))
        .catch(erro => console.log(erro))
    }, [])

    return (
        <div className='app'>
            <Header foto={data.avatar_url ?? Avatar}
                    nome={data.name ?? 'Shrekão da Silva'}
            />
            <Body/>           
            <Footer selo={data.avatar_url ?? Selo}
                    link={data.html_url ?? 'https://github.com/CriticalNoob02'}
                    nome={data.login ?? "CriticalNoob02"}
            />
        </div>
    )
}
export default App