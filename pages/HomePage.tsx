import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeatureCard from "../components/ui/FeatureCard";

const HomePage: React.FC = () => {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();

    const onRoomIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 5) return;
        setRoomId(String(e.target.value))
    }

    const handleRoomConnect = () => {
        if (!roomId) return;
        if (roomId.length > 5) return;

        navigate(`/video-call?roomID=${roomId}`);
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={"/images/favicon.png"} alt="Logo" width={50} height={40} className="mr-2" />
                        <span className="text-2xl font-bold text-gray-800">SeeYou</span>
                    </div>
                    <nav>
                        <ul className="hidden md:flex space-x-4">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                            Connect with anyone, anywhere
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                            High-quality video meetings for teams and individuals
                        </p>
                        <div className="p-2 flex flex-col md:flex-row justify-center items-center gap-y-5 md:gap-y-0 md:gap-x-4">
                            <div>
                                <Link to="/video-call" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
                                    New meeting
                                </Link>
                            </div>
                            <div className="flex gap-x-1">
                                <input onChange={onRoomIdChange} className="py-2 px-2 outline-none border border-blue-300 rounded" value={roomId} type="text" name="roomId" id="roomId" placeholder="Enter Room ID" />
                                <button onClick={handleRoomConnect} className={`py-3 px-4 ${roomId?"text-blue-600 hover:bg-blue-100 cursor-pointer": "text-gray-400"} text-xl rounded-full`}>Join</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose SeeYou?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon="🔒"
                                title="Secure Meetings"
                                description="End-to-end encryption for all your video calls"
                            />
                            <FeatureCard
                                icon="🌐"
                                title="Works Everywhere"
                                description="Join from any device, anywhere in the world"
                            />
                            <FeatureCard
                                icon="🤝"
                                title="Easy Collaboration"
                                description="Share screens, chat, and work together seamlessly"
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <span className="text-2xl font-bold">SeeYou</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300">
                                Privacy
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Terms
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 text-center text-gray-400 text-sm">© 2025 SeeYou. All rights reserved.</div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;