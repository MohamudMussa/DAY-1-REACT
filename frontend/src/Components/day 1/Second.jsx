'use strict';


const Second = () => {

const date = new Date;

return(

    <>
    
    <p> This CV was last updated on {date.toLocaleDateString()} </p>

    </>
    
    
    );
}
export default Second;

