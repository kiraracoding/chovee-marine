import ProductCard from "../components/ProductCard";

function ProductInfinite({ products }) {


return (
    <>
    <div className="pt-10 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {products.map((product, idx) => (
                    <ProductCard key={idx} {...product}/>
                ))}
    </div>
    </>
);
}

export default ProductInfinite