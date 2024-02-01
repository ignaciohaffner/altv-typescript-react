import React from 'react';
import './CharacterCreation.css';
import { PiUserList } from 'react-icons/pi';
import { IoMdMale } from 'react-icons/io';
import { IoMdFemale } from 'react-icons/io';

const CharacterCreation = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-x-2 bg-black">
                <div className=" m-5  ">
                    <p className="text-white font-bold text-3xl">Create</p>
                    <p className="text-gray-300 text-base ">New Character</p>
                    <div className="mt-5 gap-y-3 flex flex-col">
                        <div className="border-2 border-gray-500  flex align-baseline rounded-md bg-gradient-to-r from-gray-600 to-gray-800 shadow-2xl border-r-transparent bg-opacity-25">
                            <PiUserList className="text-5xl  m-2 border-2 p-2 bg-yellow-900 rounded-md border-yellow-500 text-yellow-500	" />
                            <div className="flex flex-col my-2">
                                <p className="text-gray-900">Name</p>
                                <p className="text-white font-bold">Strike</p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 flex align-baseline rounded-md bg-gradient-to-r from-gray-600 to-gray-800 shadow-2xl border-r-transparent">
                            <PiUserList className="text-5xl  m-2 border-2 p-2 bg-yellow-900 rounded-md border-yellow-500 text-yellow-500	" />
                            <div className="flex flex-col my-2">
                                <p className="text-gray-900">Surname</p>
                                <p className="text-white font-bold">Puto</p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 flex align-baseline rounded-md bg-gradient-to-r from-gray-600 to-gray-800 shadow-2xl border-r-transparent">
                            <IoMdFemale className="text-5xl  ml-5 my-2 border-2 p-2 bg-pink-900 rounded-md border-pink-600 text-pink-600	"></IoMdFemale>
                            <IoMdMale className="text-5xl  my-2 ml-2 border-2 p-2 bg-blue-900 rounded-md border-blue-500 text-blue-500	"></IoMdMale>
                            <div className="flex flex-col my-2 ml-3">
                                <p className="text-gray-900 ">Gender of the character</p>
                                <p className="text-white">Gender</p>
                            </div>
                        </div>

                        <div></div>
                    </div>
                </div>
                <div>strike puto</div>
                <div></div>
            </div>
        </>
    );
};

export default CharacterCreation;
