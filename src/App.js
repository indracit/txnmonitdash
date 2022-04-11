import { useState} from 'react';
import axios from 'axios'
import './table.css'
import { Button } from '@mui/material';
import { Box } from '@mui/material';

const heading = ["SerialNo","RRN","GatewayRRN","VendorID","RespToClient","Amount","ServiceName","ONUS","ServerTime"]

function App() {
 
  const [value,setValue]=useState([])
async function fetchData() {
const response = await axios.get("url");
return response.data
}

return ( <div  style={{fontSize:'.8em'}}>  <h1 style={{"text-align": "center"}}>DASHBOARD</h1>
                   <Box textAlign='center' m={2}> <Button variant="outlined"  onClick={()=>{fetchData().then(data => {
  console.log('data fetched from misdashboard');
setValue(data) 
});}}>Get Data</Button>    </Box>   
<div style={{ display:'flex',"justify-content": "center", height: '70vh', maxWidth: '100vw', }}>
<table style={{ width: '85vw' }}>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {value.map(row =>{
                      return  <tr> {row.map(val=> <td>{val}</td>)}
                              </tr>})}
                </tbody>
            </table>
</div> </div>
  );
}

export default App;
