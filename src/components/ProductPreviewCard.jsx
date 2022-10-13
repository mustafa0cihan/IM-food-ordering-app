import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {
  const addProduct = () => {
    onAddProduct(product);
  };

  return (
    <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center flex flex-col">
      <img
        className="object-none h-48 w-96"
        src={product.imageUrl}
        alt={product.name}
      />
      <h2 className="pb-2 text-lg">{product.name}</h2>
      <p className="mb-2 h-20 line-clamp-4  overflow-hidden">
        {product.desciption}
      </p>
      <AddProduct onAddProduct={addProduct} />
    </div>
  );
};
