import Image from "next/image";
import { CheckCircle2Icon } from "lucide-react";
import { Card, CardContent } from "../../components/Card";

export const OrderDetailsSection = () => {
  return (
    <section className="bg-linear-to-b from-[#037253] to-[#05cd7c] py-8 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
        <CheckCircle2Icon className="w-24 h-24 md:w-32 md:h-32 text-white" />

        <h2 className="text-white text-sm">Great Job</h2>
        <h1 className="text-white text-xl font-semibold">
          Your Order No. 122334455 is Placed
        </h1>

        <p className="text-white text-sm max-w-xl">
          We will notify you once this order gets confirmed.
        </p>

        <Card className="max-w-xl w-full">
          <CardContent className="flex flex-col items-center gap-4 py-6">
            <Image src="/pes.png" alt="Prescription" width={112} height={112} className="h-28" />
            <p className="text-sm text-center">
              We're reviewing your prescription now.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
