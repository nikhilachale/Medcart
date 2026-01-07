import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { OrderSummarySection } from "./OrderSummarySection";

const priceBreakdownItems = [
  {
    label: "Item total (MRP)",
    value: "₹4274.43",
    valueClassName: "text-black",
  },
  {
    label: "Handling charges",
    value: "₹45",
    valueClassName: "text-black line-through",
  },
  { label: "Total Discount:", value: "-₹50", valueClassName: "text-[#106536]" },
  { label: "Coupon Code", value: "-₹70", valueClassName: "text-[#106536]" },
  { label: "Medcart Credits", value: "-₹70", valueClassName: "text-[#106536]" },
  { label: "Shipping fee", value: "₹12", valueClassName: "text-black" },
];

export const OrderSidebar = () => {
  return (
    <aside className="w-full lg:w-89.5 pt-2 px-2 lg:px-0">
      <section className="mb-6">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-base mb-2">
          Delivering to
        </h2>
        <p className="font-['Poppins',Helvetica] font-normal text-black text-base mb-2">
          Home
        </p>
        <p className="font-['Poppins',Helvetica] font-normal text-[#666666] text-sm leading-5.25 mb-4">
          Singhal General store, Varun Path, Varun Nagar, JAIPUR, RAJASTHAN,
          302020, India
        </p>
        <p className="font-['Poppins',Helvetica] font-semibold text-[#ff6d00] text-sm">
          Expected delivery date : 25 Dec &#39;25 - 27 Dec &#39;25
        </p>
      </section>

      <Separator className="my-6" />

      <section className="mb-6">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-base mb-4">
          Order Summary
        </h2>
        <p className="font-['Poppins',Helvetica] font-normal text-black text-base mb-4">
          Items
        </p>

        <OrderSummarySection />

        <p className="text-sm font-['Poppins',Helvetica] font-normal text-black mt-3">
          +4 more items
        </p>
      </section>

      <Separator className="my-6" />

      <section className="mb-6">
        {priceBreakdownItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-3">
            <span
              className={`font-['Poppins',Helvetica] font-normal text-sm ${item.label.includes("Discount") || item.label.includes("Coupon") || item.label.includes("Credits") ? "text-[#106536]" : "text-[#666666]"}`}
            >
              {item.label}
            </span>
            <span
              className={`font-['Poppins',Helvetica] font-normal text-sm ${item.valueClassName}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </section>

      <Separator className="my-6" />

      <div className="flex justify-between items-center mb-6">
        <span className="font-['Poppins',Helvetica] font-semibold text-black text-base">
          Amount paid
        </span>
        <span className="font-['Poppins',Helvetica] font-semibold text-black text-base">
          ₹1,999.00*
        </span>
      </div>

      <div className="relative h-13.25 mb-6 rounded-lg overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full"
          alt="Savings background"
          src="/vector-515.svg"
          fill
          loading="eager"
        />
        <div className="relative flex items-center justify-center h-full gap-2">
          <div className="w-5.25 h-5.25 flex items-center justify-center">
            <Image
              className="w-3.75 h-3.75 object-cover"
              alt="Savings icon"
              src="/image-340.png"
              width={15}
              height={15}
            />
          </div>
          <span className="font-['Poppins',Helvetica] font-semibold text-white text-sm">
            You saved ₹577.00 on this order!
          </span>
        </div>
      </div>

      <p className="font-['Poppins',Helvetica] font-normal text-xs mb-6">
        <span className="text-[#666666]">
          *Prices shown on the page are indicative, inclusive of all taxes and
          may slightly vary once the final bill.....{" "}
        </span>
        <span className="text-[#60096a]">See more</span>
      </p>

      <Separator className="my-6" />

      <section className="mb-8">
        <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-base mb-4">
          Paid via UPI
        </h3>
        <p className="font-['Poppins',Helvetica] font-normal text-black text-base mb-2">
          From : Slice cc (XX9395)
        </p>
        <p className="font-['Poppins',Helvetica] font-normal text-[#666666] text-sm mb-2">
          Txn ID : 123456789012345
        </p>
        <p className="font-['Poppins',Helvetica] font-normal text-[#666666] text-sm">
          Date : 29 Dec &apos;25 8:10 PM
        </p>
      </section>

      <div className="flex gap-4 mb-8">
        <Button className="flex-1 h-11.25 rounded-lg border border-[#60096a] font-['Poppins',Helvetica] font-semibold text-[#710b7c] text-sm hover:bg-[#60096a]/10">
          Explore more
        </Button>
        <Button className="flex-1 h-11.25 rounded-lg bg-[linear-gradient(90deg,rgba(110,11,120,1)_0%,rgba(179,17,197,1)_100%)] font-['Poppins',Helvetica] font-semibold text-white text-sm hover:opacity-90">
          Track Order
        </Button>
      </div>
    </aside>
  );
};
