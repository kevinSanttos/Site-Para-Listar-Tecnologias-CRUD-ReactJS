import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
export function ProtectedRoute(){
    
    const navigate = useNavigate()
    const {userLogado} = useContext(UserContext)
    useEffect(()=> {
        if(!userLogado){
            navigate("/")
        }
    }, [])
    return(
        <>
            {
                 userLogado ? <Outlet/> : null
            }
        </>
    )
}