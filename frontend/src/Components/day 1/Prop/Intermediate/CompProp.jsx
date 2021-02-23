import ArrayItem from "./ArrayItem";


const CompProp = (props) => {


    const {num, string, array, funk, peep}= props;
    return (

        <> 
        <h3> {peep} </h3>
        <h1> {string} </h1>

        {/* {
                array.map((item,i) => (
                <ArrayItem key={i} item={item}/>
                ))
            } */}

        </>

    )

}



export default CompProp;