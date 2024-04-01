import logo from "../assets/logo.png";
import { MdOutlineWindow, MdStackedBarChart } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa"
import { GoPeople } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineUsers } from "react-icons/hi"
import { PiWechatLogoLight } from "react-icons/pi";
import Overview from "../overview.svg"
import calendar from "../calendar.svg"
import document from "../document.svg"
import logout from "../logout.svg"
import pat from "../pat.svg"
import messages from "../messages.svg"
import octagon from "../octagon.svg"
const Sidebar = () => {
    return (
        <div className="h-full min-w-[230px] ">

            <div className="menuitems flex flex-col h-full  tracking-wide justify-between h-screen pr-6">
                <div className="flex flex-col gap-6">
            <div className="logo flex gap-4 items-center justify-center pb-10">
                <img src={logo} alt="" />
                <p className="font-semibold text-2xl tracking-wider boldfont text-[#020D3B]"> MyClinic </p>
            </div>
                    <div className="icon_text flex gap-3 hover:text-[#2D56FD] "> <img src={Overview} size={24} /> <p className="font-semibold text-responsive-base">Overview</p> </div>
                    <div className="icon_text flex gap-3 hover:text-[#2D56FD] "> <img src={calendar} size={24} /> <p className="font-semibold text-responsive-base">Appointment</p> </div>
                    <div className="icon_text flex gap-3 hover:text-[#2D56FD] "> <img src={pat} size={24} /> <p className="font-semibold text-responsive-base">Patients</p> </div>
                    <div className="icon_text flex gap-3 hover:text-[#2D56FD] "> <img src={document} size={24} /> <p className="font-semibold text-responsive-base">Documents</p> </div>
                    <div className="icon_text flex gap-3 hover:text-[#2D56FD] "> <img src={messages} size={24} /> <p className="font-semibold  text-responsive-base">Messages</p> </div>
                </div>

                <div className="bottommenu flex flex-col gap-6">
                    <div className="icon_text flex gap-3 hover:text-[#2D56FD] "> <img src={octagon} size={24} /> <p className="font-semibold text-responsive-base">Profile</p> </div>
                    <div className="icon_text flex gap-3 hover:text-[#2D56FD] "> <IoSettingsOutline size={24} /> <p className="font-semibold text-responsive-base">Settings</p> </div>
                    <div className="icon_text flex gap-3 hover:text-[#2D56FD] "> <FaRegMoon size={24} /> <p className="font-semibold text-responsive-base">Dark Mode</p> </div>
                    <div className="icon_text flex gap-3 py-8 border-t  border-opacity-[35%] border-[#2D56FD] hover:text-[#2D56FD] "> <img src={logout} size={24} /> <p className="font-semibold text-lg">Logout</p> </div>
                </div>
            </div>
        </div >
    );
}

export default Sidebar;