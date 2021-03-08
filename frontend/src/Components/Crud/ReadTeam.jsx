import axios from 'axios';
import { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import IndividualTeams from './IndividualTeams';
const ReadTeams = ({ msg , trigger}) => {

    // states
    const [teamList, setTeamList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    // useEffect -> triggers a sideEffect
    useEffect(() => {
        axios.get(`http://localhost:9500/football/read`)
            .then((res) => {
                setIsLoaded(true);
                setTeamList(res.data);
                console.log()
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err.message);
            })
    }, [msg]);

    if (error) {
        return <p>{error}</p>
    } else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    } else {
        return (
            <div className="row">
                {teamList.map((item) => (
                    <div className="col-md-6">
                        <IndividualTeams key={item._id} item={item} trigger={trigger} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ReadTeams;