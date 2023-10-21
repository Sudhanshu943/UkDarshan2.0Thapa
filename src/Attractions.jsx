import React from "react";
import AttractionCard from "./AttractionCard";

function Attractions() {
  return (
    <>
      {/* <div className="h-full bg-cover bg-no-repeat  bg-[url('https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] "> */}
      <div className="" id="attractions">
        <h1 className="mb-4 text-3xl font-bold text-center mt-14">
          Top Attractions
        </h1>
        <div className="grid justify-center grid-cols-3 gap-x-4 p-9">
          <AttractionCard
            id="Auli"
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpV-krNESUqNfBL70eZ74zOx7qHa_qO5DJA&usqp=CAU "
          ></AttractionCard>

          <AttractionCard
            id="mussoorie"
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCzoa0mOdVuunetDMW6qiEVzSCnwVWyP0QA&usqp=CAU"
          ></AttractionCard>

          <AttractionCard
            id="Nanital Lake"
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKNKhkOCpinqo4_WWuUjdr6RUm-Kunb2tkw&usqp=CAU"
          ></AttractionCard>

          <AttractionCard></AttractionCard>
          <AttractionCard></AttractionCard>
          <AttractionCard></AttractionCard>
          <AttractionCard></AttractionCard>
          <AttractionCard></AttractionCard>
          <AttractionCard></AttractionCard>
        </div>
      </div>
    </>
  );
}

export default Attractions;
