import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { sideBarList, sideBarView } = useSelector(
    (store) => store.sideBarList
  );
  if (!sideBarView) return null;
  return (
    <div className="flex -mt-10 pr-2 h-screen sm:block flex-col pt-8 shadow-2xl w-[36%] md:w-[16%]">
      {sideBarList.map((item,index) => {
        return (
          <Link to={index!==0?`/${item.list.toLowerCase()}`:"/"} key={item.list}>
            <div className="flex pl-6 h-12">
              {/* <img className='w-20 h-16' src={item.url} alt={item.name}/> */}
              <p className="font-bold text-[18px]">{item.list}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
