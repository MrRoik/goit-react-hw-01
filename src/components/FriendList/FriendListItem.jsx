import clsx from "clsx";
import "./FriendList.css";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    const statusClasses = clsx('status', {
        'is-online': isOnline,
        'is-offline': !isOnline,
    });

    return (
        <div className="item">
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
            <p className={statusClasses}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}