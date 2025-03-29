import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { sideBarList, sideBarView } = useSelector(
    (store) => store.sideBarList
  );
  if (!sideBarView) return null;
  return (
    <div className="flex -mt-10 pr-2 h-screen hidden sm:block flex-col pt-8 shadow-2xl w-[26%] md:w-[16%]">
      {sideBarList.map((item) => {
        return (
          <Link to={`/${item.list.toLowerCase()}`} key={item.list}>
            <div className="flex pl-6 h-12">
              {/* <img className='w-20 h-16' src={item.url} alt={item.name}/> */}
              <p>{item.list}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
