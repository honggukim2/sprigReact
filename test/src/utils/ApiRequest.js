import React from "react";
import axios from "axios";


const ApiRequest = async(url,data) => {
    try{
        const response = await axios.post(url,data, { 
            headers : {
                "Content-Type" : "application/json",
            },
        });
        return response.data
    }catch(error){
        if (error.response) {
            console.log(error.response);
            if (error.response.status === 401) {
            } else {
              // 다른 종류의 오류 처리
              console.error("Another error happened:", error.message);
            }
          } else {
            console.error("Error sending request:", error.message);
          }
    }
}

export default ApiRequest;