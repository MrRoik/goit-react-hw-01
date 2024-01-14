import { FriendListItem } from "./FriendListItem";


export const FriendList = () => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
            <li key={friend.id}>
                    <FriendListItem friend={friend} />
            </li>
            <li key={friend.id}>
                    <FriendListItem friend={friend} />
            </li>
            <li key={friend.id}>
                    <FriendListItem friend={friend} />
            </li>
            <li key={friend.id}>
                    <FriendListItem friend={friend} />
            </li>
            <li key={friend.id}>
                    <FriendListItem friend={friend} />
            </li>
            ))}
        </ul>
    );
}