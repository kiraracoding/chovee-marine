

function ProductCard({ name, price, oldPrice, quantity, image, description }) {


    return(
        <>
        <div className="border-1 bg-gray-200 h-[300px] w-[200px]">
            <img className="h-[145px] w-[200px]" src={image}/>
            <h3 className="pl-1 pt-1 text-md font-bold uppercase">{name}</h3>
            <p className="pl-1 text-xs font-bold">{quantity} PCS</p>
            <p className=" pl-1 pt-1 text-xs">{description}</p>
            <p className="pt-1 pl-1 text-sm mt-1">
                <span className="font-bold">${price}</span>{" "}
                <span className="line-through text-xs">{oldPrice}</span>
            </p>
            <div className="pt-1 flex flex-row justify-between">
                <div className="border-1 flex flex-row h-[42px] w-[99px]">
                    <p className="h-[35px] w-[47px] text-center pt-2">1</p>
                    <button className="border-1 w-[25px] h-[41px]">+</button>
                    <button className="border-1 w-[25px] h-[41px]">-</button>
                </div>
                <button className="bg-gray-600 text-xs h-[42px] w-[99px]">
                    ADD TO CART
                </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard