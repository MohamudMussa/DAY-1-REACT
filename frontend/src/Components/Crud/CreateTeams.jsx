// import { useState } from "react";
// import { Card, CardBody, CardTitle } from "reactstrap"
// import axios from "axios";

// const CreateTeams = ({trigger}) => {

//     // states for form
//     const [teamName, setTeamName] = useState('');
//     const [locations, setLocations] = useState('');


//     const create = (e) => {
//         e.preventDefault(); 
//         axios.post(`http://localhost:9500/football/create`, {teamName,locations})
//             .then((res) => {
//                 // console.log(res.data);
//                 clearValues();
//                 trigger(res.data);
//             }).catch((err) => {
//                 trigger(err.data);
//             })
//     }

//     const clearValues = () => {
//         setTeamName('');
//         setLocations('');

//     }

//     return(
//         <div className="bg-light border-right" id="sidebar">
//             <Card>
//                 <CardBody>
//                     <CardTitle>Create A New Football Team</CardTitle>
//                     <form onSubmit={create}>
//                         <input 
//                             type="text" 
//                             className="form-control" 
//                             placeholder="TeamName"
//                             value={teamName}
//                             onChange={({target}) => setTeamName(target.value)}
//                         />
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Locations"
//                             value={locations}
//                             onChange={({ target }) => setLocations(target.value)}
//                         />
                
//                         <br/>
//                         <button type="submit" className="btn btn-outline-success col-md-12">Add</button>
//                     </form>
//                 </CardBody>
//             </Card>
//         </div>     
//     )
// }

// export default CreateTeams; 