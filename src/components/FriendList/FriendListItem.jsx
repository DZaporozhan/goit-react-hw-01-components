import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? 'green' : 'red';

  return (
    <li className="item">
      <span className={status}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.proTotype = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
};

export default FriendListItem;
