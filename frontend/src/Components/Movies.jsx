import ReadTeams from "./Crud/ReadTeam"
import { useState } from 'react';
import CreateTeams from "./Crud/CreateTeams";

const Movies = () => {

    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <CreateTeams trigger={trigger} />
            </div>
            <div className="container">
                <div className="col-md-9">
                    <div className="alert alert-success">{msg}</div>
                    <ReadTeams msg={msg} trigger={trigger}/>
                </div>
            </div>
        </div>
    )
}
export default Movies; 