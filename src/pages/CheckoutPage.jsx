import { Link } from 'react-router-dom';
import ReviewSection from '../components/ReviewSection.jsx';
import placeholderImg from "../assets/placeholder.png";
import Footer from "../components/Footer.jsx";

function CheckoutPage() {

    const reviewItems = [
        {name: "Review Item 1", price: "4.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
        {name: "Review Item 1", price: "4.00", image: placeholderImg, quantity: "24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."},
    ];

return (
    <>
    <div className="w-full h-[95px]"></div>
    <div className="h-full w-full flex flex-col items-center">
        <div className="w-[870px]">
            <h1 className="text-3xl pt-15 pb-5 font-bold">CHECKOUT</h1>
            <h2 className='pt-5 text-xl'>REVIEW ITEMS</h2>
            <div>
                <ReviewSection items={reviewItems} />
            </div>

            <div className='pt-5'>
                <h1 className='text-3xl font-bold pb-2 pt-5'>DELIVERY INFORMATION</h1>

                <div className='flex'>
                    <p>RETURNING CUSTOMER?</p>
                    <Link to="login">
                        <p className='pl-2 font-bold hover:underline'>LOGIN HERE</p>
                    </Link>
                </div>

                <div>
                    <div>
                        <p>FIRST NAME *</p>
                        <input type="text" className='border-1 h-[45px] w-[370px]' />
                    </div>

                </div>

            </div>
        </div>
    </div>
    </>
);
}

export default CheckoutPage