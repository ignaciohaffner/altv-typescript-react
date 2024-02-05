import React from 'react';
import { HiNewspaper } from 'react-icons/hi2';

const News = () => {
    return (
        <>
            <div className=" rounded-md rounded-l-none bg-gradient-to-r from-[#0B0A11DE] to-[#0F0F16DE] bg-opacity-80 h-[470px] w-[778px]">
                <div className="flex flex-col">
                    <div className="flex">
                        <HiNewspaper className="text-3xl text-[#F6C957] mt-6 ml-4" />
                        <p className="text-white text-3xl font-bold ml-2 mt-6">Noticias</p>
                    </div>

                    <div className="flex flex-row h-[250px] w-[700px] m-5 ">
                        <div className="mr-5">
                            <img
                                className="h-[300px] w-[438px] object-cover rounded-lg"
                                src="https://s3-alpha-sig.figma.com/img/5f37/aca3/357d6b77e2fb82027bc606328f478d95?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jaxKQwYV~rAfMAMzZhr0oA06wZLDYnJTHTzrFchQ240Ojrj-N14Jy6o-r9nJIb3crsfVwN98cpbsgfipwZRZHvpY2odq32s1UiAt7g1nlQ4PLI7bg2x9E2R~jtS3QSdRXvW65z1lGpdn2osv6MgkRUsCVOXXbmuY4eOrD2EOvYrTslEPbog2xfNHkcvziEWrNfBmcznfNQqE1wnMBhWA8Jj3QpuK~a-r5gQy3jcxUL90CFH~qgLREJNaJPmjgORS9JQbNr0z7~Fy8Xe4dobOrL9xksepNS8lsg-6E1wq50cg402EHti~eCmdGHiU5dg20UXrPeCvdtHHZ4sny0HbBA__"
                                alt=""
                            />
                        </div>
                        <div className="flex gap-y-9 flex-col">
                            <div>
                                <img
                                    className="h-[131px] object-cover rounded-lg"
                                    src="https://s3-alpha-sig.figma.com/img/0dd0/85e5/354103150fcc1e38b41880f182bccf85?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L1fYKxpAOK221yh9I0kl6BdPrxZ5ZuMpmLsKJGJgmAr8Cs6BPejIsVrBUXi-Y8o6CE9kzm6IXirwLz--rY1U6X53GXU-TDaBxCeHAE-OBR0b88W0rXOUjCAi7kW7okQGFe6ZyNeAGerFAkHRJdhSB0UKvXyHdAqMl8eGbuRqZVBHRNevzupIMQ81msEP0k9ybBV2iXxFnAymlo3sjqt7Q0q0mPxthcdXNE36Fmq-JG1wSq~za-uooi4qjkYUlgaauB9aLX~bs0Q9rXDp3ijdSVYCcVs2sqlAc6N328fmAAlsqpEdDGrGvlWN2vPNcwjjexrWfIHn-H3T6RC5haVEiA__"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="h-[131px] object-cover rounded-lg"
                                    src="https://s3-alpha-sig.figma.com/img/2c84/3abb/3a02f805a3b15f42cf992ad44ff48879?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=foKa~Es61BABw1Hd7Q1u~naDbdbAC1QpcHZf3Biqdk8O9H9j7-icIRsU1rUsuyWz5RMCuFey24pxKxo9L8Win1Z1bNgGrdjnO4jU7jmumrcTiF~VDk25il-SZupidZ5ITZ6OxmyHT73bh3vLjtReBbEZIRsTpII0umRWTHqLegdzLxetDtKRCnQclhFKOuLZ65peI0hEMKvpF6NnmJzt2EEA9ZWz0zOmaWlivwBfuCh0SA1llS2bNvhcCyxhlASRMTdydoBHCreadi9tW6LOau9KfYyWs6BSKDwpluSmaCEzObHxU4pvoNu737A7J1wzKX-GNWjnZQP~Ic9FdQthvQ__"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3  mt-[110px] absolute right-[350px]">
                            <div className="w-[20px] h-[20px] bg-gradient-to-r from-[#F6C957] to-[#E69568] rotate-45"></div>
                            <div className="w-[20px] h-[20px] border-2 border-[#48485E2B] rotate-45"></div>
                            <div className="w-[20px] h-[20px] border-2 border-[#48485E2B] rotate-45"></div>
                        </div>
                    </div>
                    <p className="text-white text-2xl font-bold ml-5 mt-10">Carreras nocturnas</p>
                </div>
            </div>
        </>
    );
};

export default News;
