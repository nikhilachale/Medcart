
import { Button } from "../components/ui/button";

import { OrderConfirmationSection } from "../components/OrderConfirmationSection ";
import { OrderDetailsSection } from "../components/OrderDetailsSection";
import { OrderSidebar } from "../components/OrderSidebar";

export default function Page() {
  return (
    <div className="bg-white w-full relative">
      {/* Hide OrderConfirmationSection on small screens */}
      <div className="hidden lg:block">
        <OrderConfirmationSection />
      </div>

      {/* Stack vertically on small screens, side by side on large screens */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 ">
        <div className="w-full lg:flex-1">
          <OrderDetailsSection />
        </div>

        <OrderSidebar />
      </div>
    </div>
  );
}