import CartItems from '../components/CartItems.jsx';

function ReviewSection ( { items }) {


return (
    <>
    <section className='flex flex-col items-end'>
        <div className='mt-5 flex flex-col'>
        {items.map((items, idx) => (
            <CartItems key={idx} {...items}/>
        ))}
    </div>
    <p className='hover:underline'>VIEW ALL &gt;&gt;</p>
    </section>
    </>
);
}

export default ReviewSection