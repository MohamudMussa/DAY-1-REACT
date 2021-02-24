import People from "./People.json";

import React from 'react';




const PeopleTest = () => {

    return (
        <table>
            <tbody >
                {People.map((info, i) => (

                    <div key={i} >  


                    <h5>  {info.id} </h5>
                    <h1>  {info.title} </h1>
                    
                    <h5 className="spacer"> {info.type} </h5>





                    <h6>{info.detail} </h6>


                    </div>

                ))}
            </tbody>
        </table>
    )

}






export default PeopleTest;