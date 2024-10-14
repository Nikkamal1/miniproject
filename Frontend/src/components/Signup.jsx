import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = data => {
        console.log('Submitted data:', data);
        alert('Signup successful!');
        // คุณสามารถเพิ่มการส่งข้อมูลไปยังเซิร์ฟเวอร์ที่นี่
    };

    // ใช้ useRef เพื่อควบคุม modal ของ login
    const loginModalRef = useRef(null);

    const openLoginModal = () => {
        loginModalRef.current.showModal(); // เปิด modal ของ login
    };

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='flex h-screen item-center justify-center '>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <h3 className="font-bold text-lg">Signup</h3>

                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input 
                                    type="text"
                                    placeholder='Enter your fullname'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input 
                                    type="email"
                                    placeholder='Enter your email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input 
                                    type="password"
                                    placeholder='Enter your Password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='flex justify-around mt-4'>
                                {/* ปุ่ม Signup */}
                                <button 
                                    type="submit" // เพิ่ม type="submit" เพื่อให้ฟอร์มถูกส่ง
                                    className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                    Signup
                                </button>
                                <p>
                                    Have account?{" "}
                                    <button
                                        className='underline text-blue-500 cursor-pointer'
                                        onClick={openLoginModal}
                                    >
                                        Login
                                    </button>{" "}
                                </p>
                            </div>
                        </form>

                        {/* Modal สำหรับ Login */}
                        <dialog ref={loginModalRef} id="my_modal_3" className="modal">
                            <Login />
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
