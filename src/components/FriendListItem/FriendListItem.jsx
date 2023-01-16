import PropTypes from 'prop-types';
import scss from './FriendListItem.module.scss';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const online = isOnline ? scss.online : scss.offline;

  return (
    <>
      <span className={online}></span>
      <img className={scss.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={scss.name}>{name}</p>
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
