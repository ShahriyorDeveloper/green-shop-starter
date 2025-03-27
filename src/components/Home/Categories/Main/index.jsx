import { Slider } from "antd";
import Discount from "./Discount";

const CategoriesMain = () => {
  return (
    <div className="w-[310px] bg-[#F5F5F580] p-[15px] max-lg:hidden">
      <h3 className="font-bold">Categories</h3>
      <div className="flex flex-col gap-4 mt-[10px] pl-[10px]">
        <div
          className={`flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors`}
        >
          <h3>title</h3>
          <p>count</p>
        </div>
      </div>
      <div className="mt-[15px]">
        <h3 className="font-bold">Price Range</h3>
        <Slider range defaultValue={[1, 1000]} max={1000} />
        <p className="font-normal">
          Price: <span className="font-bold text-[#46A358]">$</span>
        </p>
        <button className="mt-[16px] bg-[#46A358] text-white px-[23px] py-[8px] rounded-lg">
          Filter
        </button>
      </div>
      <Discount />
    </div>
  );
};

export default CategoriesMain;
