import React ,{ useState } from "react";

let Index1 = () =>{
    let dateObj =[
        {
            firstName:"PAvan",
            LastName:"SaI",
            clg:"Lpu"
        },
        {
            firstName: "Chintu",
            LastName:"Seelam",
            clg:"Cvr"
        },
        {
            firstName:"Sai",
            LastName:"Reddy",
            clg:"Mlr"
        }

    ];
    return(
        <div>
            {
                data.map((eachObj) =>{
                    const {firstName,LastName,clg} = eachObj
                    return(
                        <li>
                            <div>My Firstname{firstName}</div>
                            <div>My lastname{LastName}</div>
                            <div>My clg {clg}</div>
                        </li>
                    )
                })
            }
        </div>
    )
}    

export default Index1;