import { users } from './data/users';
import { User } from './components/User/User';
import { UsersList } from './components/UsersList/UsersList';
import { Section } from './components/Section/Section';

function App() {
  return (
    <>
      <Section>
        <User user={users[0]} />
      </Section>

      <Section title="List of users">
        <UsersList users={users} />
      </Section>
    </>
  );
}

export default App;
