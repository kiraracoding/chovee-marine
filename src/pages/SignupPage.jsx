import { Link } from 'react-router-dom';

function SignupPage() {


    return (
        <>
        <div className='h-full flex flex-col justify-center'>
        <div className='h-[700px] w-full flex flex-col justify-between items-center'>
            <h1 className='pb-10 text-4xl'>SIGN-UP</h1>
            <div className='flex flex-col'>
                <h2 className='text-xl pb-2'>FIRST NAME</h2>
                <input className='p-2 mb-5 border-1 w-[400px]' type='text' placeholder='TYPE YOUR FIRST NAME HERE...'/>
                <h2 className='text-xl pb-2'>LAST NAME</h2>
                <input className='p-2 mb-5 border-1 w-[400px]' type='text' placeholder='TYPE YOUR LAST NAME HERE...'/>
                <h2 className='text-xl pb-2'>EMAIL ADDRESS</h2>
                <input className='p-2 mb-5 border-1 w-[400px]' type='text' placeholder='TYPE YOUR EMAIL ADDRESS HERE...'/>
                <h2 className='text-xl pb-2'>PASSWORD</h2>
                <input className='p-2 mb-5 border-1 w-[400px]' type='text' placeholder='TYPE YOUR PASSWORD HERE...'/>
                <h2 className='text-xl pb-2'>RETYPE YOUR PASSWORD</h2>
                <input className='p-2 mb-5 border-1 w-[400px]' type='text' placeholder='RETYPE YOUR PASSWORD HERE...'/>
                <button className='mt-5 mb-10 p-3 border-1 w-[400px] hover:bg-gray-400'>SUBMIT</button>
                <p>ALREADY HAVE AN ACCOUNT?
                    <Link to="/login" className='hover:underline'> LOGIN HERE</Link>
                </p>
            </div>
        </div>
        </div>   
            
        </>
    );
}

export default SignupPage;