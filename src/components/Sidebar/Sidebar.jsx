import "./sidebar.css"
import { MdFeed, MdGroups, MdWork } from "react-icons/md"
import { BsFillChatDotsFill, BsFillCameraVideoFill, BsBookmarkFill, BsQuestionSquareFill, BsCalendarEventFill, BsBookFill } from "react-icons/bs"
import {Users} from "../../dummyData";
import Closefriend from "../Closefriend/Closefriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarList">
          <li className="sidebarListItem">
            <MdFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatDotsFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <BsFillCameraVideoFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BsBookmarkFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <BsQuestionSquareFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <MdWork className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <BsCalendarEventFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <BsBookFill className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
          <ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
              {Users.map((u) => (
                <Closefriend key={u.id} user={u} />
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  )
}
