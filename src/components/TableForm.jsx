import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  totalAmount,
  setTotalAmount
}) => {

  const [ isEditing, setIsEditing ] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    };
    setDescription("");
    setPrice("");
    setQuantity("");

    setList([...list, newData]);
    setIsEditing(false)
    console.log(list);
  };

  const deleteRow = (id) => {
    setList(list.filter( (row)=> row.id !== id ) )
  }

  let allAmount = document.querySelectorAll(".amount")
  let count = 0
  for( let i=0; i< allAmount.length; i++ ){
    
      count +=  parseInt(allAmount[i].innerHTML)
      console.log(count);
      setTotalAmount(count)
   
  }

  const updateRow = (id) =>{
    const editRow = list.find((row)=>row.id === id ) 
    setIsEditing(true)
    setList(list.filter( (row)=> row.id !== id ) )
    setDescription(editRow.description)
    setQuantity(editRow.quantity)
    setPrice(editRow.price)
    setAmount(editRow.amount)
  }

  useEffect(() => {
    const calAmount = (amount) => {
      setAmount(quantity * price);
    };

    calAmount(amount);
  }, [amount, setAmount, quantity, price]);

  return (
    <>
      <div className="    ">
        <form onSubmit={handleSubmit}>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className=" flex flex-col">
              <label className=" mt-5 " htmlFor="">
                Description
              </label>
              <input
                className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "
                type="text"
                placeholder="Enter the description "
                required
                autoComplete="off"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className=" flex flex-col">
              <label className=" mt-0 md:mt-5 " htmlFor="">
                Quantity
              </label>
              <input
                className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "
                type="text"
                placeholder="Enter the quantity "
                required
                autoComplete="off"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className=" flex flex-col">
              <label className=" mt-0 md:mt-5 " htmlFor="">
                Price
              </label>
              <input
                className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "
                type="text"
                placeholder="Enter the price "
                required
                autoComplete="off"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className=" flex flex-col">
              <label className=" mt-0 md:mt-5 " htmlFor="">
                Amount
              </label>

              <p> {amount} </p>
            </div>

            <button
              type="submit"
              className=" max-w-[200px] py-[10px] px-[14px] bg-blue-500 text-white rounded-lg shadow border-none  "
            >
             { isEditing ? "Update the data" : "Add Table Data" }
            </button>
          </div>
        </form>

        <table className=" w-[100%] mt-10 ">
          <thead className="tdata font-bold ">
            <tr>
              <td>Description</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Amount</td>
              <td>Actions</td>
            </tr>
          </thead>
          {list.map(({ id, description, quantity, price, amount }) => (
            <tbody key={id} className="tdata bg-slate-200 text-[19px] font-medium ">
              <tr>
                <td className=" p-[10px] "> {description} </td>
                <td className=" p-[10px] "> {quantity} </td>
                <td className=" p-[10px] "> {price} </td>
                <td className="amount p-[10px] "> {amount} </td>
                <td>
                  <button onClick={ ()=>deleteRow(id) } >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-600 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </button>{" "}
                  <button onClick={ ()=>updateRow(id) } >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-2 text-blue-600 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>
                </td>
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

export default TableForm;
