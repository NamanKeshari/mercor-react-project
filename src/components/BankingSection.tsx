import { FunctionComponent } from "react";

const BankingSection: FunctionComponent = () => {
  return (
    <div
      className="absolute top-[1442px] left-[0px] bg-cash-app-green w-full h-[750px] overflow-hidden text-left text-21xl text-light-white font-hero-text"
      id="banking-div"
    >
      <img
        className="absolute top-[517px] left-[853px] w-60 h-[139.12px] object-cover"
        alt=""
        src="/bankingcubes@2x.png"
      />
      <img
        className="absolute top-[607px] left-[1178px] w-[120px] h-[79.66px] object-cover"
        alt=""
        src="/bankingmonster@2x.png"
      />
      <img
        className="absolute top-[165px] left-[354px] w-[270px] h-[166.38px] object-cover"
        alt=""
        src="/bankingtrack1@2x.png"
      />
      <img
        className="absolute top-[171px] left-[508px] w-[350px] h-[407.99px] object-cover"
        alt=""
        src="/bankingphone@2x.png"
      />
      <img
        className="absolute top-[213px] left-[789px] w-[280px] h-[187.35px] object-cover"
        alt=""
        src="/bankingramp1@2x.png"
      />
      <img
        className="absolute top-[511px] left-[157px] w-[300px] h-[194.48px] object-cover"
        alt=""
        src="/bankingramp2@2x.png"
      />
      <img
        className="absolute top-[283px] left-[1153px] w-[90px] h-[247px] object-cover"
        alt=""
        src="/bankingstairs1@2x.png"
      />
      <img
        className="absolute top-[414px] left-[57px] w-20 h-[222.78px] object-cover"
        alt=""
        src="/bankingstairs2@2x.png"
      />
      <img
        className="absolute top-[16px] left-[939px] w-[250px] h-[160.42px] object-cover"
        alt=""
        src="/bankingtrack2@2x.png"
      />
      <img
        className="absolute top-[628px] left-[489px] w-[150px] h-[156.92px] object-cover"
        alt=""
        src="/bankingtube@2x.png"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[380px] h-[159.92px] object-cover"
        alt=""
        src="/bankinghole@2x.png"
      />
      <img
        className="absolute top-[706px] left-[728px] w-[380px] h-[159.92px] object-cover"
        alt=""
        src="/bankinghole1@2x.png"
      />
      <img
        className="absolute top-[105px] left-[74px] w-[130px] h-[199.81px] object-cover"
        alt=""
        src="/bankingcolumn@2x.png"
      />
      <div className="absolute top-[calc(50%_-_68px)] left-[calc(50%_-_459px)] w-[353px] h-[147px]">
        <h1 className="m-0 absolute top-[6px] left-[calc(50%_-_175.5px)] text-inherit leading-[40px] font-normal font-inherit inline-block w-[336px]">
          Banking
        </h1>
        <div className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_175.5px)] text-base tracking-[0.3px] leading-[22px] font-body-1-regular-16-22-03px text-black inline-block w-[323px] h-[88px]">
          <p className="m-0">{`Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing `}</p>
          <p className="m-0">and account number.</p>
        </div>
      </div>
    </div>
  );
};

export default BankingSection;
