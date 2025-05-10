import truckIcon from '../assets/cargo-truck.png';
import collabIcon from '../assets/collaboration.png';
import insuranceIcon from '../assets/health-insurance.png';
import speedIcon from '../assets/speedometer.png';
import ProductSection from '../components/ProductSection';
import placeholderImg from '../assets/placeholder.png';
import bannerPlaceholder from '../assets/banner-placeholder.jpg';

function HomePage() {

    const bestSellers = [
        {name: "Item Name1", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name2", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name3", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name4", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name5", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name6", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name7", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name8", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name9", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name10", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ];

    const currentDeals = [
        {name: "Deal Item1", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Deal Item2", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Deal Item3", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Deal Item4", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Deal Item5", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Deal Item6", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Deal Item7", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Deal Item8", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Deal Item9", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Deal Item10", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ];

    const recoItems = [
        {name: "Item Name1", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name2", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name3", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name4", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name5", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name6", price: "3.00", quantity: "$0.00/100", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name7", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name8", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name9", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Item Name10", price: "4.00", quantity: "$0.00/200", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},        
    ];

    const bulkPromos = [
        {name: "Bulk Item1", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Bulk Item2", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Bulk Item3", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Bulk Item4", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Bulk Item5", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Bulk Item6", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Bulk Item7", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Bulk Item8", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Bulk Item9", price: "3.00", oldPrice: "5.00", quantity: "$0.00/300", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Bulk Item10", price: "4.00", oldPrice: "6.00", quantity: "$0.00/400", image: placeholderImg, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ];

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

        <div className='w-[1130px]'>
            <ProductSection title="BEST SELLING ITEMS" products={bestSellers}/>
            <ProductSection title="CURRENT DEALS & DISCOUNTS" products={currentDeals}/>
        </div>

        <div className='w-[1130px]'>
            <img className='w-full h-[200px] object-cover' alt="banner advertisement" src={bannerPlaceholder}/>
        </div>

        <div className='w-[1130px]'>
            <ProductSection title="RECOMMENDED FOR YOU" products={recoItems}/>
            <ProductSection title="BULK ORDER PROMOS" products={bulkPromos}/>
        </div>

        <div className='w-[1130px]'>
            <img className='w-full h-[200px] object-cover' alt="banner advertisement" src={bannerPlaceholder}/>
        </div>

        <div className='w-[1130px] mt-20 mb-20'>
            <h1>OTHER SERVICES</h1>
            <div className='flex flex-row justify-between'>
                <div className='border-1 h-[192px] w-[261px] flex justify-center items-center'>CTS TRUCKING</div>
                <div className='border-1 h-[192px] w-[261px] flex justify-center items-center'>INVENTORY MANAGEMENT</div>
                <div className='border-1 h-[192px] w-[261px] flex justify-center items-center'>PROCUREMENT SERVICES</div>
                <div className='border-1 h-[192px] w-[261px] flex justify-center items-center'>WASTE MANAGEMENT</div>
            </div>
        </div>

        </div>
        </>
    )
}

export default HomePage