import { Profile } from 'components/Profile/Profile';
import user from 'path/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'path/data.json';
import { FriendList } from './Friendlist/Friendlist';
import friends from 'path/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'path/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload Stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
