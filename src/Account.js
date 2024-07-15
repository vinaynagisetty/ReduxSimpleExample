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
                <h1>Transactions Detailes</h1>
         <table className="table  table-bordered w-50">
            <thead  >
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Amout
                    </th>
                    <th>
                      Type
                    </th>
                    <th>
                     Date
                    </th>
                </tr>
            </thead>
            <tbody>
                
                    {
                        data.transaction.map(
                            (item)=>{
                  
               
                          return    <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.amount}</td>
                                <td>{item.type}</td>
                                <td>{item.date.toString()}</td>
                              </tr>
                            }
                        )
                    }
                
            </tbody>

         </table>
      </div>
    );
  }
  
  export default Account;
  