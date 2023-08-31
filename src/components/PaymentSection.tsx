import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentSection: FunctionComponent = () => {
  return (
    <div
      className="absolute top-[692px] left-[0px] bg-whitesmoke w-full h-[750px] overflow-hidden text-left text-base text-black font-body-1-regular-16-22-03px"
      id="payments-div"
    >
      <img
        className="absolute top-[433px] left-[0px] w-[1366px] h-[295.55px] overflow-hidden"
        alt=""
        src="/paymentsfloor-1.svg"
      />
      <div className="absolute top-[calc(50%_-_147px)] left-[calc(50%_-_447px)] w-[353px] h-[147px]">
        <h1
          className="m-0 absolute top-[6px] left-[calc(50%_-_175.5px)]"
          id="Payment text"
        />
        <div className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_175.5px)] tracking-[0.3px] leading-[22px] whitespace-pre-wrap inline-block w-[352px] h-[88px]">
          <p className="m-0">{`Send and receive money with anyone, donate  to an important cause, or tip professionals. `}</p>
          <p className="m-0">{`Just enter a $cashtag, phone number, or `}</p>
          <p className="m-0">scan their QR code to pay.</p>
        </div>
      </div>
      <img
        className="absolute top-[116px] left-[306px] w-[750px] h-[431.54px] object-cover"
        alt=""
        id="paymentphone"
        src="/paymentsphone-1@2x.png"
      />
      <img
        className="absolute top-[205px] left-[573px] w-[810px] h-[497.54px] object-cover"
        alt=""
        src="/paymentscolumn@2x.png"
      />
      <img
        className="absolute top-[332px] left-[638px] w-[210px] h-[333.31px] object-cover"
        alt=""
        src="/paymentspillarlarge@2x.png"
      />
      <img
        className="absolute top-[560px] left-[259px] w-[135px] h-[131.32px] object-cover"
        alt=""
        src="/paymentspillarsmall@2x.png"
      />
      <img
        className="absolute top-[471px] left-[150px] w-[172px] h-[253.73px] object-cover"
        alt=""
        src="/paymentspillarmedium@2x.png"
      />
      <img
        className="absolute top-[459px] left-[511px] w-[172px] h-[253.73px] object-cover"
        alt=""
        src="/paymentspillarmedium@2x.png"
      />
      <img
        className="absolute top-[566px] left-[658px] w-[172px] h-[253.73px] object-cover"
        alt=""
        src="/paymentspillarmedium1@2x.png"
      />
      <img
        className="absolute top-[327px] left-[975px] w-[172px] h-[253.73px] object-cover"
        alt=""
        src="/paymentspillarmedium@2x.png"
      />
      <img
        className="absolute top-[349px] left-[0px] w-[810px] h-[497.54px] object-cover"
        alt=""
        src="/paymentscolumn1@2x.png"
      />
      <img
        className="absolute top-[327px] left-[295px] w-[810px] h-[497.54px] object-cover"
        alt=""
        src="/paymentscolumn2@2x.png"
      />
    </div>
  );
};

export default PaymentSection;
