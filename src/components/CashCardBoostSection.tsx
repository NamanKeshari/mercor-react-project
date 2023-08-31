import { FunctionComponent } from "react";

const CashCardBoostSection: FunctionComponent = () => {
  return (
    <div
      className="absolute top-[2192px] left-[0px] bg-black w-full h-[750px] overflow-hidden text-left text-21xl text-cash-app-green font-hero-text"
      id="cash-boost"
    >
      <img
        className="absolute top-[0px] left-[437px] w-[1050px] h-[897.71px] object-cover"
        alt=""
        src="/booststairs1@2x.png"
      />
      <img
        className="absolute top-[162px] left-[0px] w-[550px] h-[725.83px] object-cover"
        alt=""
        src="/booststairs2@2x.png"
      />
      <img
        className="absolute top-[212px] left-[976px] w-20 h-[134.49px] object-cover"
        alt=""
        src="/boostcard@2x.png"
      />
      <img
        className="absolute top-[534px] left-[978px] w-20 h-[100.87px] object-cover"
        alt=""
        src="/boostcoffee@2x.png"
      />
      <img
        className="absolute top-[92px] left-[1088px] w-[75px] h-[93.46px] object-cover"
        alt=""
        src="/boosthand@2x.png"
      />
      <img
        className="absolute top-[149px] left-[558px] w-[250px] h-[508.93px] object-cover"
        alt=""
        src="/boostphone@2x.png"
      />
      <img
        className="absolute top-[402px] left-[1246px] w-[100px] h-[80.22px] object-cover"
        alt=""
        src="/boostshoe@2x.png"
      />
      <img
        className="absolute top-[389px] left-[882px] w-[70px] h-[92.62px] object-cover"
        alt=""
        src="/boostburger@2x.png"
      />
      <div className="absolute top-[calc(50%_-_149px)] left-[calc(50%_-_472px)] w-[352px] h-[203px]">
        <h1 className="m-0 absolute top-[0px] left-[calc(50%_-_176px)] text-inherit leading-[40px] font-normal font-inherit inline-block w-[336px]">
          <p className="m-0">Cash Card</p>
          <p className="m-0">{`& Boost`}</p>
        </h1>
        <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_176px)] text-base tracking-[0.3px] leading-[22px] font-body-1-regular-16-22-03px text-light-white inline-block w-[336px] h-[88px]">
          The Cash Card is a free, customizable debit card that lets you pay
          online and in stores. It’s the only way to get Boosts—instant
          discounts that work at places where you want to spend.
        </div>
      </div>
    </div>
  );
};

export default CashCardBoostSection;
