import React from 'react';
import { signup } from '../api/authAPI';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { authenticate } from './authenticate';
const Signup = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        signup(data).then((response) => {
            toast.success("đăng ký thành công")
            authenticate(response.data.user)
            console.log(response)
            navigate('/signin')
        }
    )
    .catch((error)=> toast.error('đăng ký thất bại',error.response.data));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <input type="text" {...register('middleName', { required: true, minLength: 3 })} />
                </div>
                <div>
                    <input type="text" {...register('name', { required: true })} />
                </div>
                <div>
                    <input type="email" {...register('email')} />
                </div>

                <div>
                    <input type="password" {...register('password')} />
                </div>
                <button>đăng ký</button>
            </form>
        </div>
    );
}

export default Signup;
