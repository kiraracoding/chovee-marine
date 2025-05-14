

function CartItems({name, price, image}) {


    return (
        <>
        <div className="pt-5 pb-5">
            <img className="h-[140px] w-[179px]" src={image}/>
        <h1 className="pl-1 pt-1 text-md font-bold uppercase">{name}</h1>
        <p>1 X {price} = $0.00</p>

        <div className="pt-1 flex flex-row justify-between">
            <div className="border-1 flex flex-row h-[42px] w-[99px]">
                <p className="h-[35px] w-[47px] text-center pt-2">1</p>
                <button className="border-1 w-[25px] h-[41px]">+</button>
                <button className="border-1 w-[25px] h-[41px]">-</button>
            </div>
            <button className="bg-gray-400 text-xs h-[42px] w-[80px] hover:bg-gray-600">
                REMOVE
            </button>
        </div>
        </div>  
        </>
    );
}

export default CartItems