'use strict';

import CompProp from './CompProp';


const ProbsDiff = () => {


    const myVal = 10;

    const bool = true;

    const str = "My Projects ";

    const someObject = {

    
        name: "Mecury",
        brand: "Merk",
        year: 2018,
        interior: ["sunroof", 2, "heated seats"]
        
    };


    //const someArray = ["JavaScript", "React", "HTML5"];

    const someFunk = () => ('A function');
 
 
    return(

        <CompProp
        string={str}
        object={someObject}
       // array={someArray}
        funk={someFunk}
        />
      

    );



}


export default ProbsDiff;