import ApiContext from "./ApiContext";
import { useState } from "react";
const ApiState = (props)=>{
    const [blogSubscriber, setblogSubscriber] = useState({});

    const GetSubscriber = async()=>{
        const response = await fetch(`${process.env.REACT_APP_HOST}/subscriber/getsubscriber`, {
            method: "GET",
            headers: {
              'Content-Type': "application/json",
              "auth-token":localStorage.getItem("token")
            },
          });
          const subscriber = await response.json();
          setblogSubscriber(subscriber);
          
         
    }

    return(
        <ApiContext.Provider value={{blogSubscriber,GetSubscriber}}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState