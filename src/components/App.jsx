import Section from './Section/Section';
import Profile from './Profile/Profile';
import StatisticsList from './StatisticsList/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <div
        style={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <Section title="User profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Stats">
        <StatisticsList stats={data} title="Upload stats" />
      </Section>
      <Section title="Friends List">
        <FriendList friends={friends} />
      </Section>
      <Section title="Transactions">
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
};
