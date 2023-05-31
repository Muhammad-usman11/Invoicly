import React, { useState, useRef  } from "react";
import Header from "./components/Header";
import InvoiceDetails from "./components/InvoiceDetails";
import MainDetails from "./components/MainDetails";
import ClientsDetails from "./components/ClientsDetails";
import Footer from "./components/Footer";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import ReactToPrint from 'react-to-print';


const App = () => {
  const [showInvoice, setShowInvoice] = useState(true);

  const [name, setName] = useState("Joe Mark");
  const [address, setAddress] = useState("New York");
  const [clientName, setClientName] = useState("John Clark");
  const [clientAddress, setClientAddress] = useState("Tronto, Canada");
  const [invoiceNumber, setInvoiceNumber] = useState("2221");
  const [invoiceDate, setInvoiceDate] = useState("20/6/2023");
  const [dueDate, setDueDate] = useState("2/7/2023");
  const [email, setEmail] = useState("john44@outlook.com");
  const [website, setWebsite] = useState("www.johnclark.com");
  const [contactno, setContactno] = useState("22 445 7764");
  const [accountno, setAccountno] = useState("002 334 765 344");

  const [ description, setDescription ] = useState("")
  const [ quantity, setQuantity ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ amount, setAmount ] = useState("")
  const [ list, setList ] = useState([])
  const [ totalAmount, setTotalAmount ] = useState("0")

  const componentRef = useRef();

  return (
    <>

    {showInvoice?
    <>
    <ReactToPrint
    trigger={() => <button className=' my-[25px] mx-[20px] md:mx-[80px] float-right py-[10px] px-[14px] bg-gray-500 text-white rounded-lg shadow border-none  '>Print this out!</button>}
    content={() => componentRef.current}
    />


    <div ref={componentRef} className=" py-[50px] " >
    <Header />
    <InvoiceDetails invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
    <MainDetails name={name} address={address} />
    <ClientsDetails clientName={clientName} clientAddress={clientAddress}  />
    <Table amount={amount} description={description} quantity={quantity} price={price} list={list} totalAmount={totalAmount} />
    <Footer clientName={clientName} clientAddress={clientAddress} email={email} website={website} contactno={contactno} accountno={accountno} />
    
    
    

  </div>
  <div className="editbtn wrapper">
  <button onClick={ ()=> setShowInvoice(false) }  className=' my-[20px] py-[10px] px-[14px] bg-blue-500 text-white rounded-lg shadow border-none  '>Edit Information</button>
  </div>
    </>

    
  : 
    <div className="wrapper py-[30px] flex-col flex ">
    <h1 className="pii" >Enter Your Information</h1>
    
    <label className=" mt-5 " htmlFor=""> Name</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="text" placeholder="Enter the Name" required autoComplete="off" value={name} onChange={ (e)=>setName(e.target.value) } />

    <label className=" mt-5 " htmlFor="">Address</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="text" placeholder="Enter the address" required autoComplete="off" value={address} onChange={ (e)=>setAddress(e.target.value) } />

    <label className="  mt-5 " htmlFor="">Client's Name</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="text" placeholder="Enter the Name" required autoComplete="off" value={clientName} onChange={ (e)=>setClientName(e.target.value) } />

    <label className=" mt-5 " htmlFor="">Client's Address</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="text" placeholder="Enter the Address" required autoComplete="off" value={clientAddress} onChange={(e)=>setClientAddress(e.target.value) } />

    <label className=" mt-5 " htmlFor="">Invoice Number</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="number" placeholder="Enter the Invoice Number " required autoComplete="off" value={invoiceNumber} onChange={(e)=>setInvoiceNumber(e.target.value) } />

    <label className=" mt-5 " htmlFor="">Invoice Date</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="date" placeholder="Enter the Invoice Date " required autoComplete="off" value={invoiceDate} onChange={(e)=>setInvoiceDate(e.target.value) } />

    <label className=" mt-5 " htmlFor="">Due Date</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="date" placeholder="Enter the Due Date " required autoComplete="off" value={dueDate} onChange={(e)=>setDueDate(e.target.value) } />

    {/* input data for table */}
    <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} totalAmount={totalAmount} setTotalAmount={setTotalAmount}   />

    {/*end  input data for table */}
    <label className=" mt-5 " htmlFor="">Email</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="email" placeholder="Enter the Email " required autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value) } />

    <label className=" mt-5 " htmlFor="">Website</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="text" placeholder="Enter Your Website " required autoComplete="off" value={website} onChange={(e)=>setWebsite(e.target.value) } />

    <label className=" mt-5 " htmlFor="">Contact no</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="text" placeholder="Enter Your Contact no " required autoComplete="off" value={contactno} onChange={(e)=>setContactno(e.target.value) } />

    <label className=" mt-5 " htmlFor="">Account no</label>
    <input className=" py-[10px] px-[14px] rounded-md outline-none border border-solid border-gray-200 "  type="text" placeholder="Enter Your Account no " required autoComplete="off" value={accountno} onChange={(e)=>setAccountno(e.target.value) } />

    <button onClick={ ()=> setShowInvoice(true) } className=' mt-[40px] py-[10px] px-[14px] bg-blue-500 text-white rounded-lg shadow border-none  '>Preview Information</button> 
    </div>
  }
      
    </>
  );
};

export default App;
