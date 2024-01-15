import clsx from "clsx";
//import "./FriendList.css";
import css from "./FriendList.module.css"
import { IoAccessibility } from "react-icons/io5";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    const statusClasses = clsx(css.status, {
        [css.isOnline]: isOnline,
        [css.isOffline]: !isOnline,
    });

    return (
        <div className={css.item}>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
            <p className={statusClasses}>{isOnline ? 'Online' : 'Offline'}</p>
            <p><IoAccessibility className={statusClasses} size="20" /></p>
        </div>
    );
}