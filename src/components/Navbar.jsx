import { useState } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../assets/nav-logo.png';
import hamMenu from '../assets/ham-menu.png';
import closeIcon from '../assets/close-btn.png';
import searchIcon from '../assets/search.png';
import profilepicPlaceholder from '../assets/profilepic-placeholder.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return(
        <div className='fixed top-0 left-0 w-full shadow z-50'>
        <div className='bg-gray-300 pr-2 flex flex-row items-center justify-between h-[50px]'>
            
            <div className='flex flex-row'>
                <img className='h-[50px] w-[135px]' src={navLogo} alt="company logo"/>
            </div>

            <div className='flex flex-row items-center border-2 rounded-lg overflow-hidden h-10 w-[60%] md:w-[35%]'>
                <input 
                type="text" 
                placeholder='Search for a product'
                className='px-4 py-2 w-full outline-none'
                />
                <button className='bg-gray-500 h-9 hover:bg-gray-600 px-3 flex items-center justify-center'>
                    <img src={searchIcon} alt="search icon" className='w-6 h-5'/>
                </button>
            </div>
            
            <div className='hidden md:flex flex-row w-[400px] justify-between items-center pl-2'>
                <p>HOME</p>
                <p>PRODUCTS</p>
                <p>SHOPPING CART</p>
                <p>SETTINGS</p>
            </div>

            <div className='md:hidden flex'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img 
                        src={isOpen ? closeIcon : hamMenu}
                        alt="hamburger menu"
                        className='h-5 w-6 ml-2'
                    />
                </button>
            </div>

            {isOpen && (
                <div className='absolute top-[50px] right-0 w-full bg-gray-100 flex flex-col items-center py-2 md:hidden z-10 shadow-md'>
                    <p className="py-1">HOME</p>
                    <p className="py-1">PRODUCTS</p>
                    <p className="py-1">SHOPPING CART</p>
                    <p className="py-1">SETTINGS</p>
                </div>
            )}
        </div>

        <div className='bg-gray-400 h-[45px] pr-2 pl-2 flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center hover:underline'>
                <button onClick={() => setIsActive(!isActive)}>SHOW ALL &gt;&gt;</button>
            </div>

            {isActive && (
                <div className='absolute pl-10 pt-10 top-[95px] left-0 w-[400px] h-[850px] justify-around bg-gray-600 flex flex-col z-10 shadow-md'>
                    
                    <div className='flex flex-row w-full pb-5'>
                        <img className='h-[70px] w-[70px]' src={profilepicPlaceholder}/>
                        <div className='pl-5 flex flex-col justify-between'>
                            <h1 className='text-xl'>HELLO, GUEST</h1>
                            <button className='border-1 rounded-md p-1 text-md bg-white'>LOG-IN OR SIGN-UP</button>
                        </div>
                    </div>

                    <div className='pb-3'>
                        <h1 className='pb-1 text-md'>MY ACCOUNT</h1>
                        <p className='text-xs'>MY SHOPPING CART</p>
                        <p className='text-xs'>MY ORDERS</p>
                        <p className='text-xs'>ORDER HISTORY</p>
                        <p className='text-xs'>ACCOUNT INFORMATION</p>
                        <p className='text-xs'>CONTACT INFORMATION</p>
                        <p className='text-xs'>PAYMENT METHOD</p>
                    </div>

                    <div className='pb-3'>
                        <h1 className='pb-1 text-md'>PRODUCT CATEGORIES</h1>
                        <p className='text-xs'>BEVERAGES</p>
                        <p className='text-xs'>DAIRY & POULTRY</p>
                        <p className='text-xs'>DRY STORE</p>
                        <p className='text-xs'>LIQUID STORE</p>
                        <p className='text-xs'>SWEET & SNACKS</p>
                        <p className='text-xs'>FRESH MEAT</p>
                        <p className='text-xs'>FRESH FRUITS</p>
                        <p className='text-xs'>FRESH VEGETABLES</p>
                        <p className='text-xs'>FROZEN GOODS</p>
                        <p className='text-xs'>CABIN STORE</p>
                        <p className='text-xs'>BONDED STORE</p>
                        <p className='text-xs'>MEDICAL SUPPLIES</p>
                        <p className='text-xs'>EMERGENCY EQUIPMENTS</p>
                    </div>

                    <div className='pb-3'>
                        <h1 className='pb-1 text-md'>OTHER SERVICES</h1>
                        <p className='text-xs'>TRUCKING SERVICES</p>
                        <p className='text-xs'>PROCUREMENT SERVICES</p>
                        <p className='text-xs'>WASTE MANAGEMENT</p>
                    </div>

                    <div className='pb-3'>
                        <h1 className='pb-1 text-md'>SETTINGS</h1>
                        <p className='text-xs'>NOTIFICATIONS</p>
                        <p className='text-xs'>LANGUAGE</p>
                        <p className='text-xs'>CURRENCY</p>
                        <p className='text-xs'>ACCESSIBILITIES</p>
                    </div>

                    <h1 className='pb-3 text-md'>PRIVACY AND POLICY</h1>
                    <h1 className='pb-3 text-md'>TERMS AND CONDITIONS</h1>
                    <h1 className='pb-3 text-md'>FAQs</h1>
                    <h1 className='pb-3 text-md'>CONTACT US</h1>

                </div>
            )}

            <div className='hidden lg:flex flex-row pl-5 w-[550px] justify-between'>
                <p className='text-s'>TRUCKING SERVICES</p>
                <p className='text-s'>PROCUREMENT SERVICES</p>
                <p className='text-s'>WASTE MANAGEMENT</p>
            </div>
            <div className='pl-5 flex flex-row w-[250px] justify-around'>
                <Link to="/login">
                    <button className='p-1 border-1 rounded-lg bg-gray-500'>LOG-IN/SIGN-UP</button>
                </Link>
                <button>EN</button>
                <button>$$</button>
            </div>
        </div>

        </div>
    )
}

export default Navbar