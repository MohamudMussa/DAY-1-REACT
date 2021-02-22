'use strict';

import CompProp from './CompProp';


const ProbsDiff = () => {


    const myVal = 10;

    const bool = true;

    const str = "Hello, world!";

    const someObject = {

    
        name: "Mecury",
        brand: "Merk",
        year: 2018,
        interior: ["sunroof", 2, "heated seats"]
        
    };


    const someArray = ["Apple", "Kiwi", "Orange"];

    const someFunk = () => {'A function'};
 
 
    return(

        <CompProp
        num={myVal}
        bool={bool}
        string={str}
        object={someObject}
        array={someArray}
        funk={someFunk}
        />
      

    );



}


export default ProbsDiff;