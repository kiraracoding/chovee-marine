import CartItems from '../components/CartItems.jsx';

function CartSection({ items }) {


return (
    <>
    <section>
    <div className='mt-10 mb-10 flex flex-col'>
        {items.map((items, idx) => (
            <CartItems key={idx} {...items}/>
        ))}
    </div>
        
    <p className='pb-20 hover:underline'>BACK TO TOP ↑</p>

    </section>
    </>
);
}

export default CartSection