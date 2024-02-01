import React, { useState } from 'react';

const LoginPage = () => {
    const [handleRegister, sethandleRegister] = useState('login');
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;

        if (form.username.length < 4 || form.username.length > 20) {
            alert('Username must be at least 4 characters long');
            isValid = false;
        }

        if (!emailRegex.test(form.email)) {
            alert('Please enter a valid email');
            isValid = false;
        }

        if (form.password.length < 6 || !/[A-Z]/.test(form.password)) {
            alert('Password must be at least 6 characters long and contain at least one uppercase letter');
            isValid = false;
        }

        if (form.password !== form.confirmPassword) {
            alert('Passwords do not match');
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(form);
            alt.emit('register', form);
        }
    };

    return (
        <>
            <div className="bg-[url('https://www.xtrafondos.com/wallpapers/los-santos-gta-v-3229.jpg')] w-screen h-screen bg-no-repeat bg-cover	 ">
                <div className="flex h-[calc(100vh-100px)] items-center justify-center    mx-auto">
                    <div className="w-full max-w-md rounded-md bg-gray-700 bg-opacity-80 p-9">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Three_logo.svg"
                            className="w-16 h-16 mx-auto"
                            alt=""
                        />
                        <p className="font-bold text-center text-xl mt-2 text-white">TEST</p>
                        <p className="text-center text-gray-300">ROLE PLAY</p>
                        <div className="flex flex-row justify-around mt-8 gap-x-4">
                            <p
                                className={`text-center  text-xl 
                                ${
                                    handleRegister === 'login'
                                        ? 'border-yellow-400 border-b-2 text-white'
                                        : 'text-gray-400'
                                }`}
                                onClick={() => {
                                    sethandleRegister('login');
                                }}
                            >
                                Login
                            </p>
                            <p
                                className={`text-center  text-xl 
                                ${
                                    handleRegister === 'register'
                                        ? 'border-yellow-400 border-b-2 text-white'
                                        : 'text-gray-400'
                                }`}
                                onClick={() => {
                                    sethandleRegister('register');
                                }}
                            >
                                Register
                            </p>
                        </div>
                        {handleRegister === 'register' ? (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 mt-5">
                                <input
                                    type="text"
                                    name="username"
                                    className="py-2 pl-2 text-white bg-gray-700 border-2 border-gray-800 rounded-md"
                                    placeholder="Nombre de usuario"
                                    onChange={handleChange}
                                />
                                <p className="text-red-500 text-center">El usuario debe tener minimo 4 caracteres </p>
                                <input
                                    type="text"
                                    name="email"
                                    className="py-2 pl-2 text-white bg-gray-700 border-2 border-gray-800 rounded-md"
                                    placeholder="Correo electronico"
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    className="py-2 pl-2 text-white bg-gray-700 border-2 border-gray-800  rounded-md"
                                    placeholder="Contraseña"
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="py-2 pl-2 text-white bg-gray-700 border-2 border-gray-800  rounded-md"
                                    placeholder="Confirmar Contraseña"
                                    onChange={handleChange}
                                />
                                <button type="submit" className="border-2 rounded-md py-4 bg-yellow-300">
                                    Register
                                </button>
                            </form>
                        ) : (
                            <div className="flex flex-col gap-y-4 mt-5">
                                <input
                                    type="text"
                                    className="py-2 pl-2 text-white bg-gray-700 border-2 border-gray-800 rounded-md"
                                    placeholder="email"
                                />
                                <input
                                    type="password"
                                    className="py-2 pl-2 text-white bg-gray-700 border-2 border-gray-800  rounded-md"
                                    placeholder="password"
                                />

                                <button className="border-2 rounded-md py-4 bg-yellow-300">Login</button>
                                <p className="text-center text-white font-bold ">Restore Password</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
