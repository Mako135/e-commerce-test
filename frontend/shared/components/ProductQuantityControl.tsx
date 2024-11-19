import { Minus, Plus } from "lucide-react";

interface ProductQuantityControl {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ProductQuantityControl = ({
  quantity,
  onIncrease,
  onDecrease,
}: ProductQuantityControl) => {
  return (
    <div className="grid grid-cols-3">
      <button
        onClick={onDecrease}
        className="bg-black px-3 py-1 rounded-l-lg flex items-center justify-center"
      >
        <Minus color="#fff" />
      </button>
      <span className="px-4 flex items-center justify-center">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="bg-black px-3 py-1 rounded-r-lg flex items-center justify-center"
      >
        <Plus color="#fff" />
      </button>
    </div>
  );
};

export default ProductQuantityControl;
