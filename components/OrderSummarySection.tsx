import { Card, CardContent } from "./Card";

export const OrderSummarySection = () => {
  return (
    <div className="flex gap-4">
      <Card className="w-16 h-12 flex items-center justify-center">
        <CardContent className="p-0">
          <img src="/med.png" alt="Product" className="w-8 h-8 object-contain" />
        </CardContent>
      </Card>

      <div className="text-black">
        <p className="font-semibold text-sm">
          Dolo 500 Tablet <br /> Pain killer
        </p>

      </div>
    </div>
  );
};