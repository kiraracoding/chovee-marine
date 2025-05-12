import { Link } from 'react-router-dom';

function SignupPage() {


    return (
        <>
        <div className='h-[1000px] w-full flex flex-col justify-center items-center'>
            <p>HELLO THIS IS SIGN-UP PAGE</p>
            <p>ALREADY HAVE AN ACCOUNT?
                <Link to="/login" className='hover:underline'>Login here!</Link>
            </p>
        </div>   
            
        </>
    );
}

export default SignupPage;