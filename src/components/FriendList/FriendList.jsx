import { FriendListItem } from "./FriendListItem";
import "./FriendList.css";

export const FriendList = ({ friends} ) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
            <li className="list" key={friend.id}>
                    <FriendListItem friend={friend} />
            </li>
            ))}
        </ul>
    );
}