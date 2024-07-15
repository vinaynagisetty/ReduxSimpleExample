import { useSelector } from "react-redux";


function Account() {

 let data=useSelector(
    (state)=>{
       return state;
    }
 );
 console.log(data)
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
                       {data.Account.balance}
                    </td>
                    <td>
                    {data.Account.name}
                    </td>
                    <td>
                    {data.Account.phoneNumber}
                    </td>
                </tr>
            </tbody>

         </table>
      </div>
    );
  }
  
  export default Account;
  