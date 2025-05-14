import CartSection from '../components/CartSection.jsx';
import placeholderImg from '../assets/placeholder.png';
import ProductInfinite from '../components/ProductInfinite.jsx';

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

    const infiniteItems = [
        {name: "Item Name1", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name2", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name3", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name4", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name5", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name6", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name7", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name8", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name9", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name10", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name11", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name12", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name13", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name14", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name15", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name16", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name17", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name18", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name19", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name20", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name21", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name22", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name23", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name24", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name25", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name26", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name27", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name28", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name29", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name30", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name31", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name32", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name33", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name34", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name35", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name36", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name37", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name38", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name39", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name40", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name41", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name42", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name43", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name44", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name45", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name46", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name47", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name48", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name49", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name50", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ];

return (
    <>
    <div className="h-[95px]"></div>
    <div className="flex flex-row justify-between">

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

        <div className='w-[350px]'></div>

        <div className="flex-1 max-w-[1130px] mx-auto px-4">
            <div className="pt-15 flex flex-row w-full justify-between">
                <h1 className='text-xl'>SHOWING SEARCH RESULTS FOR "KEYWORDS"</h1>
                <div className='flex flex-row w-[200px] justify-between items-center'>
                    <p>SORT BY:</p>
                    <button className="border-1 px-2 bg-gray-200">RELEVANCE ↓</button>
                </div>
            </div>
            <ProductInfinite products={infiniteItems} />
        </div>

        <div className='w-[280px]'></div>

        <div className=" fixed right-0 top-[95px] h-[calc(100vh-95px)] border-1 w-[280px] border-black-200 bg-white flex flex-col items-center overflow-y-auto z-50">
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