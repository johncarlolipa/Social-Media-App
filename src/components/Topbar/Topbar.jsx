import "./topbar.css";
import { BsSearch, BsFillPersonFill, BsFillChatFill,  } from "react-icons/bs";
import { RiNotification2Fill } from "react-icons/ri";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Social Media</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <BsSearch className="searchIcon"/>
                    <input placeholder="Search anything" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <BsFillPersonFill />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsFillChatFill />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <RiNotification2Fill  />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}