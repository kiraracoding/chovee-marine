import footerLogo from '../assets/footer-logo.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';

function Footer() {

    return(
        <>
        <div className="bg-gray-500 w-full h-[450px] flex flex-col justify-center items-center">
            <div className='flex flex-row w-[1130px] justify-between'>
                <div className='flex flex-row'>
                    <img className='h-[180px] w-[220px] mr-20' src={footerLogo} />
                    <div className='flex flex-col '>
                        <h1>CALL US</h1>
                        <p>+63987654321</p>
                        <br/>
                        <h1>EMAIL US</h1>
                        <p>choveetruck.gmail.com</p>
                        <p>chovee.marinesupple@gmail.com</p>
                    </div>
                </div>
                
                <div className='flex flex-col h-[180px] w-[220px]'>
                    <h1 className='pb-4'>FOLLOW US</h1>
                    <div className='flex flex-row justify-between'>
                        <img className='h-[60px]' src={facebookIcon}/>
                        <img className='h-[60px]' src={instagramIcon}/>
                        <img className='h-[60px]' src={twitterIcon}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-gray-700 h-[50px] w-full flex justify-center items-center'>
            <p className='text-white'>© 2025, Chovee Logistics.com, Inc. All Rights Reserved</p>
        </div>

        </>
    );
}

export default Footer