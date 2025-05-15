import CartSection from "../components/CartSection";
import placeholderImg from "../assets/placeholder.png"
import Footer from "../components/Footer.jsx";

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


return (
    <>
    <div className="h-full w-full flex flex-col justify-center items-center">
        <h1>THIS IS THE SHOPPING CART</h1>
    </div>

    <Footer />
    </>
);
}

export default ShoppingCart