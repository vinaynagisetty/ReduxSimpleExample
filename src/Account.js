import { useSelector } from "react-redux";


function Account() {

 let data=useSelector(
    (state)=>{
       return state;
    }
 );
    return (
      <div className="container ">
       
         <table className="table  table-bordered w-50">
            <thead  >
                <tr>
                    <th>
                        Balance
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Mobile Number
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                       {data.balance}
                    </td>
                    <td>
                    {data.name}
                    </td>
                    <td>
                    {data.phoneNumber}
                    </td>
                </tr>
            </tbody>

         </table>
      </div>
    );
  }
  
  export default Account;
  