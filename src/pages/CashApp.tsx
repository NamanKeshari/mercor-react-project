import { FunctionComponent } from "react";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import FilteredCardFormContainer from "../components/FilteredCardFormContainer";
import PaymentSection from "../components/PaymentSection";
import BankingSection from "../components/BankingSection";
import CashCardBoostSection from "../components/CashCardBoostSection";
import InvestingSection from "../components/InvestingSection";
import Navbar from "../components/Navbar";

const CashApp: FunctionComponent = () => {
  return (
    <div className="relative bg-light-white w-full h-screen overflow-scroll">
      <section
        className="absolute h-full w-full top-[-27px] right-[0px] left-[0px] bg-black"
        id="hero-section-main-container"
      >
        <div className="absolute top-[calc(50%_-_309.65px)] right-[62.5px] overflow-hidden flex flex-row items-center justify-start">
          <img className="relative w-16 h-9" alt="" src="/layer-2.svg" />
        </div>
        <Navbar />
        <img
          className="absolute top-[calc(50%_-_315.5px)] left-[60px] w-[30px] h-11"
          alt=""
          src="/cashapp--logo.svg"
        />
        <ContainerCardFormFilter />
        <FilteredCardFormContainer />
      </section>
      <PaymentSection />
      <BankingSection />
      <CashCardBoostSection />
      <InvestingSection />
    </div>
  );
};

export default CashApp;
