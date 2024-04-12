import { MdLogout } from "react-icons/md";

// TODO implemenhter la fonctionnalité de déconnexion plus tard

const Logout = () => {
    return (
        <>
        <img src={"/pp1.jpg"} alt="profil picture" className='w-10 h-10 rounded-full border border-gray-800' />

        <div className="cursor-pointer flex items-center justify-center p-2 rounded-lg bg-glass mt-auto border border-gray-800 transition-colors duration-200 hover:backdrop-blur-2xl ">
            <MdLogout size={20} />
        </div>
        </>
    );
};

export default Logout;