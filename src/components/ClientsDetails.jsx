import React from 'react'

const ClientsDetails = ({ clientName, clientAddress }) => {
  return (
    <>
    <div className="clientsec">
        <div className="wrapper">
            <div className="clientinfo">
                <h2 className='text-[20px] mt-2 ' > <span className='font-bold text-[17px] ' >Client's Name : </span>{clientName} </h2>
                <address className='text-[20px] mt-2 '> <span className='font-bold text-[17px] '>Client's Address : </span> {clientAddress} </address>
            </div>
        </div>
    </div>
    </>
  )
}

export default ClientsDetails