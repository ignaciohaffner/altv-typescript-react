import React, { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
import { WebViewEvents } from '../../../../src/core/shared/webviewEvents';
import { IoMail } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa6';

import News from './News';

const LoginPage = () => {
    const [handleRegister, sethandleRegister] = useState('login');
    const [eventReceived, setEventReceived] = useState(false);

    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [validationForms, setValidationForms] = useState({
        usernameValid: true,
        emailValid: true,
        passwordValid: true,
        confirmPasswordValid: true,
        usernameErrorMessage: '',
        emailErrorMessage: '',
        passwordErrorMessage: '',
        confirmPasswordErrorMessage: '',
    });

    const [loginForm, setLoginForm] = useState({
        loginUsername: '',
        loginPassword: '',
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleChangeRegister = (event) => {
        const { name, value } = event.target;
        let newValidationForms = { ...validationForms };

        switch (name) {
            case 'username':
                if (value.length >= 4 && value.length <= 20) {
                    newValidationForms.usernameValid = true;
                    newValidationForms.usernameErrorMessage = '';
                }
                break;
            case 'email':
                if (emailRegex.test(value)) {
                    newValidationForms.emailValid = true;
                    newValidationForms.emailErrorMessage = '';
                }
                break;
            case 'password':
                if (value.length >= 6 && /[A-Z]/.test(value)) {
                    newValidationForms.passwordValid = true;
                    newValidationForms.passwordErrorMessage = '';
                }
                if (value === registerForm.confirmPassword) {
                    newValidationForms.confirmPasswordValid = true;
                    newValidationForms.confirmPasswordErrorMessage = '';
                }
                break;
            case 'confirmPassword':
                if (value === registerForm.password) {
                    newValidationForms.confirmPasswordValid = true;
                    newValidationForms.confirmPasswordErrorMessage = '';
                }
                break;
            default:
                break;
        }

        setRegisterForm({
            ...registerForm,
            [name]: value,
        });

        setValidationForms(newValidationForms);
    };

    const handleChangeLogin = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;
        let newValidationForms = { ...validationForms };

        if (registerForm.username.length < 4 || registerForm.username.length > 20) {
            newValidationForms.usernameValid = false;
            newValidationForms.usernameErrorMessage = 'El usuario debe estar entre 4 y 20 caracteres.';
            isValid = false;
        }

        if (!emailRegex.test(registerForm.email)) {
            newValidationForms.emailValid = false;
            newValidationForms.emailErrorMessage = 'El usuario no es valido.';
            isValid = false;
        }

        if (registerForm.password.length < 6 || !/[A-Z]/.test(registerForm.password)) {
            newValidationForms.passwordValid = false;
            newValidationForms.passwordErrorMessage = 'La contraseña debe tener minimo 6 caracteres y una mayuscula';
            isValid = false;
        }

        if (registerForm.password !== registerForm.confirmPassword) {
            newValidationForms.confirmPasswordValid = false;
            newValidationForms.confirmPasswordErrorMessage = 'Las contraseñas no coinciden.';
            isValid = false;
        }

        setValidationForms(newValidationForms);

        return isValid;
    };
    const saltRounds = 10;

    function hashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(saltRounds, function (err, salt) {
                if (err) reject(err);
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) reject(err);
                    resolve(hash);
                });
            });
        });
    }

    const handleSubmitRegister = (e) => {
        console.log('checkeo');
        e.preventDefault();
        if (validateForm()) {
            console.log(registerForm);
            hashPassword(registerForm.password).then((hash) => {
                console.log(hash);
                registerForm.password = hash as string;
                alt.emit(WebViewEvents.coreRegister, registerForm);
            });
        }
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        console.log(loginForm);
        alt.emit(WebViewEvents.coreLogin, loginForm);
    };

    alt.on(WebViewEvents.coreRegisterDone, (result: boolean) => {
        if (!result) {
            return;
        }

        if (result) {
            console.log('User created');
            setEventReceived(true);
        }
    });

    // bg-[url('https://cdn.discordapp.com/attachments/1201888388693889095/1203061667232096296/Group_1258_Traceddasda.png?ex=65cfb97d&is=65bd447d&hm=a82c2c257f30a5f1a301ccb2cd87b51f7046981fe40ba913961b4388e5c3a51d&')]

    return (
        <>
            <div className="w-screen h-screen bg-no-repeat bg-cover	 ">
                <div></div>
                <div className="flex h-[calc(100vh-100px)] items-center justify-center  mx-auto">
                    <div className="w-full max-w-md rounded-md  bg-gradient-to-r from-[#100F18E5] to-[#1F1E29E5]  bg-opacity-25 p-9">
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
                                        ? 'border-[#F6C957] border-b-2 text-white'
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
                                        ? 'border-[#F6C957] border-b-2 text-white'
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
                            <form onSubmit={handleSubmitRegister} className="flex flex-col gap-y-3 mt-5">
                                <div
                                    className={`flex border-2 p-2 rounded-md bg-transparent border-[#48485E] ${
                                        validationForms.usernameErrorMessage && `border-red-500`
                                    }`}
                                >
                                    <FaUserCircle
                                        className={`text-2xl mt-2 ml-2 text-[#48485E] ${
                                            validationForms.usernameErrorMessage && `text-red-500`
                                        }`}
                                    />
                                    <input
                                        type="text"
                                        name="username"
                                        className={`py-2 pl-5 outline-none w-full text-white bg-transparent 
                                `}
                                        placeholder="Nombre de usuario"
                                        onChange={handleChangeRegister}
                                    />
                                </div>

                                {validationForms.usernameErrorMessage && (
                                    <p className="text-red-700">{validationForms.usernameErrorMessage}</p>
                                )}
                                <div className="flex border-2 p-2 rounded-md bg-transparent border-[#48485E]">
                                    <IoMail className={`text-2xl mt-2 ml-2 text-[#48485E]${``}`} />

                                    <input
                                        type="text"
                                        name="email"
                                        className="py-2 pl-5 text-white bg-transparent outline-none"
                                        placeholder="Correo electronico"
                                        onChange={handleChangeRegister}
                                    />
                                </div>

                                {validationForms.emailErrorMessage && (
                                    <p className="text-red-700">{validationForms.emailErrorMessage}</p>
                                )}
                                <div className="flex border-2 p-2 rounded-md  border-[#48485E]">
                                    <FaLock className={`text-2xl mt-2 ml-2 text-[#48485E] ${``}`} />

                                    <input
                                        type="password"
                                        name="password"
                                        className="py-2 pl-5 text-white bg-transparent outline-none"
                                        placeholder="Contraseña"
                                        onChange={handleChangeRegister}
                                    />
                                </div>

                                {validationForms.passwordErrorMessage && (
                                    <p className="text-red-700">{validationForms.passwordErrorMessage}</p>
                                )}
                                <div className="flex border-2 p-2 rounded-md bg-transparent border-[#48485E]">
                                    <FaLock className={`text-2xl mt-2 ml-2 text-[#48485E] ${``}`} />

                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="py-2 pl-5 text-white bg-transparent outline-none"
                                        placeholder="Confirmar Contraseña"
                                        onChange={handleChangeRegister}
                                    />
                                </div>

                                {validationForms.confirmPasswordErrorMessage && (
                                    <p className="text-red-700">{validationForms.confirmPasswordErrorMessage}</p>
                                )}
                                <div className="bg-cover rounded-md bg-[url('https://s3-alpha-sig.figma.com/img/7815/128d/b7b9e6a24c19c58342aa148d3a1d44ee?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h1yb8FmYU2kF05RozbRp4zvGYiPTJQtAqpbF9GErd6qMD7zzyQ4pIrlGoS61b861QZapD~a693A7ldXnGePzjWVmGrjY8I3OVNT0siYaO9GyNflR0ZQ~VpeFcLjyk3~pGjmh3PQAO-cUrYGgoY4s6lxyuFhSyxuOzy84N84VvYda3wnVT4b7HYvQdtzaJsAbWhG0DMQl4n79FT792itpluDPfAJ6uEQ~2NtgcVwUs5gOh8ncaPk5qm7tqEK4m5dPtfzBmbe0AHhfyOHTHToa6iwzUTCJXf99HP7z7zIw0RRmtSSufirrDilXvmfKScKO0r5tmNjknOWzebqVXdL2zA__')]">
                                    <button
                                        type="submit"
                                        className="shadow-inner rounded-md text-[#2E2E2E] py-4 bg-opacity-90  font-bold  w-full  bg-[#efb45f]  "
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form className="flex flex-col gap-y-4 mt-5" onSubmit={handleSubmitLogin}>
                                <div
                                    className={`flex border-2 p-2 rounded-md bg-transparent border-[#48485E] ${
                                        validationForms.usernameErrorMessage && `border-red-500`
                                    }`}
                                >
                                    <FaUserCircle
                                        className={`text-2xl mt-2 ml-2 text-[#48485E] ${
                                            validationForms.usernameErrorMessage && `text-red-500`
                                        }`}
                                    />
                                    <input
                                        type="text"
                                        name="loginUsername"
                                        className="py-2 pl-2 text-white bg-transparent outline-none rounded-md"
                                        placeholder="email"
                                        onChange={handleChangeLogin}
                                    />
                                </div>
                                <div
                                    className={`flex border-2 p-2 rounded-md bg-transparent border-[#48485E] ${
                                        validationForms.usernameErrorMessage && `border-red-500`
                                    }`}
                                >
                                    <FaLock className={`text-2xl mt-2 ml-2 text-[#48485E] ${``}`} />

                                    <input
                                        type="password"
                                        name="loginPassword"
                                        className="py-2 pl-2 text-white bg-transparent outline-none  rounded-md"
                                        placeholder="password"
                                        onChange={handleChangeLogin}
                                    />
                                </div>

                                <div className="bg-cover rounded-md bg-[url('https://s3-alpha-sig.figma.com/img/7815/128d/b7b9e6a24c19c58342aa148d3a1d44ee?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h1yb8FmYU2kF05RozbRp4zvGYiPTJQtAqpbF9GErd6qMD7zzyQ4pIrlGoS61b861QZapD~a693A7ldXnGePzjWVmGrjY8I3OVNT0siYaO9GyNflR0ZQ~VpeFcLjyk3~pGjmh3PQAO-cUrYGgoY4s6lxyuFhSyxuOzy84N84VvYda3wnVT4b7HYvQdtzaJsAbWhG0DMQl4n79FT792itpluDPfAJ6uEQ~2NtgcVwUs5gOh8ncaPk5qm7tqEK4m5dPtfzBmbe0AHhfyOHTHToa6iwzUTCJXf99HP7z7zIw0RRmtSSufirrDilXvmfKScKO0r5tmNjknOWzebqVXdL2zA__')]">
                                    <button
                                        type="submit"
                                        className="shadow-inner rounded-md text-[#2E2E2E] py-4 bg-opacity-90  font-bold  w-full  bg-[#efb45f]  "
                                    >
                                        Login
                                    </button>
                                </div>
                                <p className="text-center text-white font-bold ">Restore Password</p>
                            </form>
                        )}
                    </div>
                    <News></News>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
