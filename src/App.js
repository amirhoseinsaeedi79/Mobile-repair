
import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import  Home  from './components/home/home'
import './components/styles.css'
export default function App(){
    
    let router = useRoutes(routes)

    
    return (
        <>
   
        {router}

      
        
         </>
    )
}
