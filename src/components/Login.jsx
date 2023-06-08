import React from 'react';

function Login(props) {
    return (
       <form>
        <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="email" className='form-control' />
        </div>
       </form>
    );
}

export default Login;