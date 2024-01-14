
export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
    return (
        <div className="item">
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
            <p className="status">{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}