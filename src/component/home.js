import React from 'react';
import { useNavigate } from 'react-router';
import { isAuthenticate } from './authenticate';

const Home = ({ user ,product }) => {
    const auth = isAuthenticate();
    console.log(auth)
    const perpage = 1;
    const start = 0;
    const end = perpage;
    const navigate = useNavigate()
        const signout = () => {
            localStorage.clear(auth)
            navigate("/signin")
        }
    return (
        <div>
            <button onClick={signout}>dang xuat</button>
            home
            {user.map((item, index) => {
                if (index >= start && index < end) {
                    return <div key={index}>
                        <div>{item.name}</div>
                    </div>
                }
            })}

        </div>
    );
}

export default Home;
