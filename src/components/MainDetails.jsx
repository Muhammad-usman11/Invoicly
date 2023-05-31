import React from "react";

const MainDetails = ({ name, address }) => {
  return (
    <>
      <div className="detailssec mt-[20px] ">
        <div className="wrapper">
          <div className="info text-right ">
            <h2 className=" text-[24px] font-bold ">{name} </h2>
            <div className=" flex justify-end">
              <address className=" text-[17px] mt-2 font-medium max-w-[340px] ">
               
                {address}
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDetails;
