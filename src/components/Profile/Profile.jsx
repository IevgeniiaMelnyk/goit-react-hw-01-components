import PropTypes from 'prop-types';
import scss from './Profile.module.scss';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={scss.profile}>
      <div className={scss.description}>
        <img src={avatar} alt="User avatar" className={scss.avatar} />
        <p className={scss.name}>{username}</p>
        <p className={scss.tag}>{tag}</p>
        <p className={scss.location}>{location}</p>
      </div>

      <ul className={scss.stats}>
        <li className={scss.list}>
          <span className={scss.label}>Followers</span>
          <span className={scss.quantity}>{stats.followers}</span>
        </li>
        <li className={scss.list}>
          <span className={scss.label}>Views</span>
          <span className={scss.quantity}>{stats.views}</span>
        </li>
        <li className={scss.list}>
          <span className={scss.label}>Likes</span>
          <span className={scss.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
