import CartItems from './CartItems';


function CartSection({ items }) {

    return (
        <>
        <section>
        <div className='flex flex-col'>
        {items.map((items, idx) => (
                    <CartItems key={idx} {...items}/>
                ))}
        </div>
        </section>
        </>
    );
}

export default CartSection