import CartSection from '../components/CartSection.jsx';
import placeholderImg from '../assets/placeholder.png';

function ProductPage() {

    const shoppingCartItems = [
        {name: "Cart Item 1", price: "3.00", image: placeholderImg},
        {name: "Cart Item 2", price: "6.00", image: placeholderImg},
        {name: "Cart Item 3", price: "9.00", image: placeholderImg},
        {name: "Cart Item 4", price: "12.00", image: placeholderImg},
        {name: "Cart Item 5", price: "15.00", image: placeholderImg},
        {name: "Cart Item 6", price: "18.00", image: placeholderImg},
        {name: "Cart Item 7", price: "21.00", image: placeholderImg},
        {name: "Cart Item 8", price: "24.00", image: placeholderImg},
        {name: "Cart Item 9", price: "27.00", image: placeholderImg},
        {name: "Cart Item 10", price: "30.00", image: placeholderImg},
    ];

return (
    <>
    <div className="h-[95px]"></div>
    <div className="w-full flex flex-row justify-between">

        <div className="fixed h-[850px] w-[350px] flex flex-col justify-between">
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">BEVERAGES</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">DAIRY AND POULTRY</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">DRY STORE</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">LIQUID STORE</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">SWEET & SNACKS</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">FRESH MEAT</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">FRESH FRUITS</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">FRESH VEGETABLES</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">FROZEN GOODS</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">CABIN STORE</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">BONDED STORE</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">MEDICAL EQUIPMENTS</h2>
            <h2 className="text-l border-1 h-[66px] flex justify-center items-center hover:bg-gray-200">EMERGENCY EQUIPMENTS</h2>
        </div>

        <div className="w-[1130px]">
            <div className="flex flex-row">
                <h1>SHOWING SEARCH RESULTS FOR "KEYWORDS"</h1>
                <div>
                    <p>SORT BY:</p>
                    <button className="border-1">RELEVANCE ↓</button>
                </div>
            </div>
        </div>

        <div className="border-1 w-[280px] flex flex-col items-center max-h-screen overflow-y-auto">
            <div className='w-full flex flex-col justify-center items-center pt-10 pb-5'>
                <h1 className="text-xl font-bold pb-2">SHOPPING CART</h1>
                <h2 className="text-md pb-2">SUBTOTAL: $0.00</h2>
                <button className='border-1 mt-2 px-5 py-2 hover:bg-gray-400'>GO TO CART</button>
            </div>
            <div>
                <CartSection items={shoppingCartItems}/>
            </div>
        </div>

    </div>
    </>
);
}

export default ProductPage