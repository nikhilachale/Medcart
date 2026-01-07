import Image from "next/image";
// import { CheckCircleIcon } from "lucide-react";
import { Card, CardContent } from "./Card";
import { JSX } from "react";



export const OrderDetailsSection = (): JSX.Element => {
  return (
    <section className="bg-linear-to-b from-[#037253] to-[#05cd7c] py-8 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-4">
        
        {/* Success Icon with background */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/confirm.png"
            alt="Background"
            fill
            className="object-contain"
          />
        </div>

        {/* Headings */}
        <h2 className="text-white text-sm">
          Great Job
        </h2>

        <h1 className="text-white text-xl md:text-2xl font-semibold">
          Your Order No. 122334455 is Placed
        </h1>

        {/* Description */}
        <p className="text-white text-sm max-w-xl">
          We will notify you once this order gets confirmed and send your
          updates thereafter.
        </p>

        {/* Card */}
        <Card className="max-w-xl w-full rounded-2xl">
          <CardContent className="flex flex-col items-center gap-4 py-6 bg-white">
            <Image
              src="/image-334.png"
              alt="Prescription"
              width={112}
              height={112}
              className="h-28 w-auto"
            />

            <p className="text-sm text-black text-center max-w-md">
              We're reviewing your prescription now to confirm your order.
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};