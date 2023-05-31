import React from 'react'

const InvoiceDetails = ({ invoiceNumber, invoiceDate, dueDate }) => {
  return (
    <>
    <div className="invoicesec mt-[30px] ">
        <div className="wrapper">
            <div className="details list-none ">
                <li className=' mt-2 text-[20px] ' ><span className=' font-bold text-[17px] ' >Invoice Number :</span> {invoiceNumber} </li>
                <li className=' mt-2 text-[20px] '><span className=' font-bold text-[17px]'>Invoice Date :</span> {invoiceDate} </li>
                <li className=' mt-2 text-[20px]'><span className=' font-bold text-[17px] '>Due Date :</span> {dueDate} </li>
            </div>
        </div>
    </div>
    </>
  )
}

export default InvoiceDetails