import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        dialogRef.current.close(); // ปิด dialog หลังจาก login สำเร็จ
    };

    // Use ref to control the dialog
    const dialogRef = useRef(null);

   /* const openModal = () => {
        reset(); // Reset form and errors when opening the modal
        dialogRef.current.showModal(); // เปิด dialog
    };*/

    const closeModal = () => {
        dialogRef.current.close(); // ปิด dialog
        reset(); // Reset form and errors when closing the modal
    };

    return (
        <div>
            {/* ปุ่มสำหรับเปิด modal 
            <button onClick={openModal} className="btn">
                Open Login Modal
            </button>
            */}
            <dialog ref={dialogRef} id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* ปุ่มสำหรับปิด modal */}
                        <button 
                            type="button"
                            onClick={closeModal} 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                        
                        <h3 className="font-bold text-lg">Login</h3>

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
                            <button 
                                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p>
                                Not registered? 
                                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login;
