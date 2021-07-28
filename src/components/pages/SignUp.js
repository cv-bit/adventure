import React from 'react';
import '../../App.css';

export default function SignUp() {
    return (
        <>
            <form action="action_page.php" className='sign-up'>
                <div className="container">
                    <h1>SIGN UP</h1>
                    <p>to hear about our latest packages</p>
                    
                    <label for="email"><b>Email: </b></label>
                    <input type="text" placeholder="Enter Email" name="email" required></input>
                    <div class="clearfix">
                        <button type="submit" class="signupbtn">SIGN UP</button>
                    </div>
                </div>
            </form>
        </>
    );
}