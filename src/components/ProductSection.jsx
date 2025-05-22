import ProductCard from "./ProductCard";

function ProductSection({ title, products }) {


    return (
        <>
        <section className="w-[1130px] pt-10 pb-10">
            <h2 className="text-2xl mb-4 pb-5 font-bold">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {products.map((product, idx) => (
                    <ProductCard key={idx} {...product}/>
                ))}
            </div>
            <div className="text-right mt-2 pt-5">
                <button className="text-sm hover:underline">SEE ALL &gt;&gt;</button>
            </div>
        </section>
        </>
    );
}

export default ProductSection