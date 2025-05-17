import { Link } from 'react-router-dom';
import placeholderImg from "../assets/placeholder.png"
import CartSection from "../components/CartSection.jsx";
import SideSection from "../components/SideSection.jsx";

function SavedCart() {

const mainSavedCartItems = [
    {name: "Saved Item 1", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    {name: "Saved Item 2", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    {name: "Saved Item 3", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    {name: "Saved Item 4", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    {name: "Saved Item 5", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    {name: "Saved Item 6", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    {name: "Saved Item 7", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    {name: "Saved Item 8", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    {name: "Saved Item 9", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    {name: "Saved Item 10", price: "2.00", image: placeholderImg, quantity: "24", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
];

const sideShopCartItems = [
    {name: "Cart Item 1", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
    {name: "Cart Item 2", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
    {name: "Cart Item 3", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
    {name: "Cart Item 4", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
    {name: "Cart Item 5", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
    {name: "Cart Item 6", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
    {name: "Cart Item 7", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
    {name: "Cart Item 8", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
    {name: "Cart Item 9", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
    {name: "Cart Item 10", price: "3.00", image: placeholderImg, btntxt: "REMOVE"},
];

return (
    <>
    <div className="h-[95px] w-full"></div>

    <div className="w-full flex flex-col items-center">
        
        <div className="w-[870px]">
            <h1 className="pt-15 pb-10 text-3xl font-bold">SAVED ITEMS</h1>
            <div className="flex flex-col h-[100px] justify-around">
                <button className="py-1 bg-gray-400 border-1 w-[130px] hover:bg-gray-600">LIST VIEW ↓</button>
                <button className="py-1 bg-gray-400 border-1 w-[130px] hover:bg-gray-600">ALL ↓</button>
            </div>

            <div>
                <CartSection items={mainSavedCartItems}/>
            </div>

        </div>

        <div className="fixed right-0 w-[260px] h-[calc(100vh-95px)] flex flex-col items-center bg-gray-200 overflow-y-auto z-50">
            <h1 className="pb-3 pt-10 font-bold text-xl">SHOPPING CART</h1>
            <Link to="/shopping-cart">
                <button className="mb-5 border-1 px-3 py-1 text-sm bg-gray-400 hover:bg-white">VIEW ALL</button>            
            </Link>
            <SideSection items={sideShopCartItems} />
        </div>

    </div>
    </>
);
}

export default SavedCart