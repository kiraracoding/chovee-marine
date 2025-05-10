import truckIcon from '../assets/cargo-truck.png';
import collabIcon from '../assets/collaboration.png';
import insuranceIcon from '../assets/health-insurance.png';
import speedIcon from '../assets/speedometer.png';
import ProductCard from '../components/ProductCard';

function HomePage() {


    return (
        <>
        <div className='flex flex-col items-center'>
        <div className="flex flex-col h-[450px] items-center justify-center">
            <div className='pb-20 flex flex-col items-center'>
                <h1 className="pb-7 text-5xl text-center w-[650px]">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</h1>
            <p className="w-[600px] text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac aliquet odio mattis. Class aptent taciti 
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            
            <div className="w-[1000px] flex flex-row justify-around">
                <div className="flex flex-row">
                    <img className='h-10 pr-2' src={speedIcon}/>
                    <p className='text-xs'>Torem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-row">
                    <img className='h-10 pr-2' src={insuranceIcon}/>
                    <p className='text-xs'>Torem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-row">
                    <img className='h-10 pr-2' src={truckIcon}/>
                    <p className='text-xs'>Torem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-row">
                    <img className='h-10 pr-2' src={collabIcon}/>
                    <p className='text-xs'>Torem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>

        <div className='pb-5 h-[400px] flex flex-col justify-around w-[1130px]'>
            <h1>SHOP BY CATEGORY</h1>
            <div className='flex flew-row justify-between w-[1130px]'>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>BEVERAGES</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>DAIRY & POULTRY</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>DRY STORE</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>LIQUID STORE</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>SWEET & SNACKS</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>FRESH MEAT</div>
            </div>
            <div className='flex flew-row justify-between w-[1130px]'>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>FRESH FRUITS & VEGETABLES</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>FROZEN GOOD</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>CABIN STORE</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>BONDED STORE</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>MEDICAL EQUIPMENTS</div>
                <div className='w-[164px] h-[132px] border-1 flex justify-center items-center text-center'>EMERGENCY EQUIPMENTS</div>
            </div>
            <p className='self-end'>BROWSE ALL CATEGORIES &gt;&gt;</p>
        </div >

        <div className='w-[1130px] h-[600px]'>

        </div>

        </div>
        
        </>
    )
}

export default HomePage