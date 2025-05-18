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
    <div className=" w-full flex flex-col items-center">
        <div className="w-[870px]">
            <h1 className="text-3xl pt-15 pb-5 font-bold">CHECKOUT</h1>
            <h2 className='pt-5 text-xl'>REVIEW ITEMS</h2>
            <div>
                <ReviewSection items={reviewItems} />
            </div>

            <div className='pt-10'>
                <h1 className='text-3xl font-bold pb-2 pt-5'>DELIVERY INFORMATION</h1>

                <div className='flex'>
                    <p>RETURNING CUSTOMER?</p>
                    <Link to="login">
                        <p className='pl-2 font-bold hover:underline'>LOGIN HERE</p>
                    </Link>
                </div>

                <div className='w-full pt-10 pb-10 flex flex-row justify-between'>
                    <div>
                        <p>FIRST NAME *</p>
                        <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                        <p>SHIP NAME *</p>
                        <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                        <p>PORT *</p>
                        <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                        <p>EMAIL ADDRESS *</p>
                        <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                    </div>

                    <div>
                        <p>FIRST NAME *</p>
                        <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                        <p>SHIP NAME *</p>
                        <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                        <p>PORT *</p>
                        <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                        <p>EMAIL ADDRESS *</p>
                        <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                    </div>
                </div>
            </div>
            
            <h1 className='text-3xl font-bold pb-2 pt-5'>PAYMENT METHOD</h1>
            <div className='flex flex-row justify-between pb-10'>
                <div className='flex flex-col pt-5'>
                    <div className='pb-3'>
                        <input type="radio" id="paymentChoice1" name="paycheck" />
                        <label className='pl-2' for="paymentChoice1">PAYCHECK</label>
                    </div>
                    <div className='pb-3'>
                        <input type="radio" id="paymentChoice2" name="cod" />
                        <label className='pl-2' for="paymentChoice1">CASH ON DELIVERY</label>
                    </div>
                    <div className='pb-3'>
                        <input type="radio" id="paymentChoice3" name="paypal" />
                        <label className='pl-2' for="paymentChoice1">PAYPAL</label>
                    </div>
                    <div className='pb-3'>
                        <input type="radio" id="paymentChoice4" name="bank" />
                        <label className='pl-2' for="paymentChoice1">BANK TRANSFER</label>
                    </div>
                    <div className='pb-3'>
                        <input type="radio" id="paymentChoice5" name="credit/debit" />
                        <label className='pl-2' for="paymentChoice1">CREDIT/DEBIT CARD</label>
                    </div>
                </div>

                <div className='pt-5'>
                    <p>EMAIL ADDRESS *</p>
                    <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                    <p>CARDHOLDER NAME *</p>
                    <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                    <p>CARD NUMBER *</p>
                    <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[370px]' />
                    <div className='flex flex-row items-between justify-between'>
                        <div>
                            <p>EXPIRATION DATE *</p>
                            <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[235px]' />
                        </div>
                        <div className='flex flex-col'>
                            <p>CVC *</p>
                            <input type="text" className='mb-5 mt-2 border-1 h-[45px] w-[112px]' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="fixed right-0 w-[260px] h-[calc(100vh-95px)] flex flex-col items-center bg-gray-200 overflow-y-auto z-50">
            <h1 className="pb-5 pt-10 font-bold text-2xl">ORDER SUMMARY</h1>
            <div className='mb-10'>
                <h2 className='pb-2'>COUPON CODE</h2>
                <input className='border-1 bg-white h-[35px]' type="text" />
            </div>
            <div className='flex flex-row w-full justify-between px-5 pb-2'>
                <h3>SUBTOTAL</h3>
                <p>$0.00</p>
            </div>
            <div className='flex flex-row w-full justify-between px-5 pb-2'>
                <h3>TAX (10%)</h3>
                <p>$0.00</p>
            </div>
            <div className='flex flex-row w-full justify-between px-5 pb-2'>
                <h3>COUPON DISCOUNT</h3>
                <p>$0.00</p>
            </div>
            <div className='flex flex-row w-full justify-between px-5 pb-2'>
                <h3>DELIVERY COST</h3>
                <p>$0.00</p>
            </div>
            <div className='flex flex-row w-full justify-between py-5 px-5 pb-2'>
                <h3 className='font-bold text-xl'>TOTAL</h3>
                <p className='font-bold text-xl'>$0.00</p>
            </div>
            <button className='mt-5 border-1 w-[200px] h-[45px] rounded-md bg-gray-400 hover:bg-gray-600'>PAY NOW</button>
        </div>
    </div>
    
    </>
);
}

export default CheckoutPage