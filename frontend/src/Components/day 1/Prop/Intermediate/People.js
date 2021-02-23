import People from "./People.json";

import React from 'react';




const PeopleTest = () => {

    return (
        <table>
            <tbody >
                {People.map((item, i) => (

                    <div key={i} >  


                    <h5>  {item.id} </h5>
                    <h1>  {item.title} </h1>
                    
                    <h5 className="spacer"> {item.type} </h5>





                    <h6>{item.detail} </h6>



                    </div>

                ))}
            </tbody>
        </table>
    )

}






export default PeopleTest;