import React from "react";

const Table = ({ list, totalAmount }) => {
  return (
    <>
      <div className="wrapper">
        <table className=" w-[100%] mt-10 ">
          <thead className="tdata font-bold ">
            <tr>
              <td>Description</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Amount</td>
            </tr>
          </thead>
          {list.map(({id, description, quantity, price, amount }) => (
            
              
                <tbody key={id} className="tdata bg-slate-200 text-[19px] font-medium ">
                  <tr>
                    <td className=" p-[10px] "> {description} </td>
                    <td className=" p-[10px] "> {quantity} </td>
                    <td className=" p-[10px] "> {price} </td>
                    <td className=" p-[10px] "> {amount} </td>
                  </tr>
                </tbody>
             
            
          ))}
        </table>
        <div className=" mt-[15px] text-[20px] md:text-4xl text-blue-600 font-semibold " >
        {`Total Amount : ${totalAmount} `}
        </div>
      </div>
    </>
  );
};

export default Table;
