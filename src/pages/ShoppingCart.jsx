import CartSection from "../components/CartSection";
import placeholderImg from "../assets/placeholder.png"
import Footer from "../components/Footer.jsx";
import SideSection from "../components/SideSection.jsx";

function ShoppingCart() {

    const mainShoppingCartItems = [
        {name: "Cart Item 1", price: "4.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Cart Item 2", price: "8.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Cart Item 3", price: "12.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Cart Item 4", price: "16.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Cart Item 5", price: "20.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Cart Item 6", price: "24.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Cart Item 7", price: "28.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Cart Item 8", price: "32.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Cart Item 9", price: "36.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Cart Item 10", price: "40.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    ];

    const sideSavedItems = [
        {name: "Saved Item 1", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
        {name: "Saved Item 2", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
        {name: "Saved Item 3", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
        {name: "Saved Item 4", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
        {name: "Saved Item 5", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
        {name: "Saved Item 6", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
        {name: "Saved Item 7", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
        {name: "Saved Item 8", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
        {name: "Saved Item 9", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
        {name: "Saved Item 10", price: "3.00", image: placeholderImg, btntxt: "ADD TO CART"},
    ];


return (
    <>
    <div className="h-[95px] w-full"></div>

    <div className="w-full flex flex-row justify-center">
        
        <div className="w-[870px]">
            <h1 className="pt-15 pb-10 text-3xl font-bold">YOUR SHOPPING CART</h1>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col h-[100px] justify-around">
                    <button className="py-1 bg-gray-400 border-1 w-[130px] hover:bg-gray-600">LIST VIEW ↓</button>
                    <button className="py-1 bg-gray-400 border-1 w-[130px] hover:bg-gray-600">ALL ↓</button>
                </div>
                <div className='mr-10 flex flex-col items-end h-[100px] justify-around'>
                    <h1 className='pb-4 font-bold text-2xl'>SUBTOTAL: $0.00</h1>
                    <button className='bg-gray-200 p-2 mb-4 w-[250px] border-1 hover:bg-gray-400'>PROCEED TO CHECKOUT</button>
                </div>
            </div>

            <div>
                <CartSection items={mainShoppingCartItems}/>
            </div>

        </div>

        <div className="fixed right-0 w-[260px] h-[calc(100vh-95px)] flex flex-col items-center bg-gray-200 overflow-y-auto z-50">
            <h1 className="pt-10 font-bold text-xl">SAVED ITEMS</h1>
            <SideSection items={sideSavedItems}/>
        </div>

    </div>
    </>
);
}

export default ShoppingCart