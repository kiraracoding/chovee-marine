import SideItems from './SideItems';


function SideSection({ items }) {

    return (
        <>
        <section>
        <div className='flex flex-col'>
        {items.map((items, idx) => (
                    <SideItems key={idx} {...items}/>
                ))}
        </div>
        </section>
        </>
    );
}

export default SideSection