export const AddProduct = ({ onAddProduct }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onAddProduct}
        className="bg-green-400 hover:bg-yellow-100 rounded-full w-8 h-8  flex items-center justify-center text-lg"
      >
        <span>+</span>
      </button>
    </div>
  );
};
