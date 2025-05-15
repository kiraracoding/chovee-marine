

function CartItems({ image, name, price, quantity, description }) {


return (
    <>
    <div className="flex flex-row mb-10 bg-gray-200 items-center">
        <img className="h-[170px] w-[200px]" src={image}/>
        <div className="pl-10 w-[400px]">
            <h1 className="text-xl pb-2 text-md font-bold uppercase">{name}</h1>
            <h2 className="text-lg pb-5">${price}/{quantity} PCS</h2>
            <p className="text-sm w-[300px]">{description}</p>
        </div>

        <div className="flex flex-col">
            <div className="bg-white border-1 w-[140px] h-[45px] flex flex-row justify-between items-center">
                <p className="w-[75px] text-center">1</p>
                <div>
                    <button className="bg-gray-400 hover:bg-gray-500 h-[44px] w-[30px] border-1">+</button>
                    <button className="bg-gray-400 hover:bg-gray-500 h-[44px] w-[30px] border-1">-</button>
                </div>
            </div>

            <div className="bg-gray-400 hover:bg-gray-500 mt-5 border-1 h-[45px] flex items-center justify-center">REMOVE</div>
        </div>

        <p className="font-bold w-[130px] text-center">$0.00</p>

    </div>
    </>
);
}

export default CartItems