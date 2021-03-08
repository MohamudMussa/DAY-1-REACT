import { useState } from 'react';
import ReadTeam from "./Crud/ReadTeam";

const HomePage = () => {

    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (
        <div className="row">
            <div className="col-md-3">
            </div>
            <div className="container">
                <div className="col-md-9">
                    <div className="alert alert-success">{msg}</div>
                    <ReadTeam msg={msg} trigger={trigger}/>
                </div>
            </div>
        </div>
    )
}
export default HomePage; 