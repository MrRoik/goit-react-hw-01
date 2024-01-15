import { FriendListItem } from "./FriendListItem";
//import "./FriendList.css";
import css from "./FriendList.module.css"

export const FriendList = ({ friends} ) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => (
            <li className={css.list} key={friend.id}>
                    <FriendListItem friend={friend} />
            </li>
            ))}
        </ul>
    );
}