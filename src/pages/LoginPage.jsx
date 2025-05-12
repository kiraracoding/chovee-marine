import { Link } from 'react-router-dom';

function LoginPage() {


    return(
        <div className='flex flex-col h-full justify-center'>
        <div className='h-[700px] w-full flex flex-col justify-between items-center'>
            <h1 className='text-4xl'>LOG-IN</h1>

            <div className='flex flex-col'>
                <h2 className='text-xl pb-2'>EMAIL ADDRESS</h2>
                <input className='p-2 mb-5 border-1 w-[400px]' type="text" placeholder='TYPE YOUR EMAIL ADDRESS HERE...'/>
                <h2 className='text-xl pb-2'>PASSWORD</h2>
                <input className='p-2 mb-5 border-1 w-[400px]' type="text" placeholder='TYPE YOUR PASSWORD HERE...'/>
                <button className='mt-5 mb-10 p-3 border-1 w-[400px]'>LOG-IN</button>

                <p className='hover:underline'>FORGOT PASSWORD?</p>
                <p>DONT HAVE AN ACCOUNT? 
                    <Link to="/signup" className='hover:underline'> SIGN-UP NOW!</Link>
                </p>
            </div>

            <h2>OR</h2>
            <div className='flex flex-col h-[100px] justify-around items center'>
                <button className='p-2 border-1 w-[400px]'>CONTINUE WITH GOOGLE</button>
                <button className='p-2 border-1 w-[400px]'>CONTINUE WITH FACEBOOK</button>
            </div>
            
        </div>
        </div>
    );
}

export default LoginPage;