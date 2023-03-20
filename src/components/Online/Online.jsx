import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightBarusername">{user.username}</span>
    </li>
  );
}
