import { useState } from "react"




const App = () => {

    const [count, setCount] = useState(0);

    return(



        <button onclick={() => setCount (count + 1)}>
            {count}
        </button>

    )


}

export default App;