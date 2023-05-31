import React from 'react'

const Footer = ( {clientAddress, clientName, email, website, contactno, accountno } ) => {
  return (
    <>
    <div className="footersec mt-[60px] ">
        <div className="wrapper">
            <div className="fbox py-[5px] md:py-[30px] border-t border-solid border-gray-300 ">
                <p className='footertext mt-1 text-[20px] ' ><span className='font-bold text-[17px] ' >Email :</span> {email}  </p>
                <p className='footertext mt-1 text-[20px] '><span className='font-bold text-[17px] '>Website :</span> {website} </p>
                <p className='footertext mt-1 text-[20px] '><span className='font-bold text-[17px] '>Contact :</span> {contactno} </p>
                <p className='footertext mt-1 text-[20px] '><span className='font-bold text-[17px] '>Address :</span> {clientAddress } </p>
                <p className='footertext mt-1 text-[20px] '><span className='font-bold text-[17px] '>Account Holder :</span>     {clientName}  </p>
                <p className='footertext mt-1 text-[20px] '><span className='font-bold text-[17px] '>Account Number :</span> {accountno} </p>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Footer