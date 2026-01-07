import Image from "next/image";
import { Card, CardContent } from "../../components/Card";

export const OrderSummarySection = () => {

  
  return (
    <div className="flex gap-4">
      
      <Card className="w-16 h-12 flex items-center justify-center">
      
        <CardContent className="p-0">
          <Image src="/med.png" alt="Product" width={32} height={32} className="h-8" />
        </CardContent>
      </Card>

      <div className="flex flex-col justify-center text-black p-1">
        <p className="font-semibold text-black text-sm">
          Dolo 500 Tablet <br /> Pain killer
        </p>

      </div>
    </div>
  );
};
