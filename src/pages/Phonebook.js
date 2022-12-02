import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './Phonebook.module.css';

export default function Phonebook() {
  return (
    <div className={css.container}>
      <h1 className={css.titlePhonebook}>Phonebook</h1>
      <Form />
      <Filter />
      <h2 className={css.contactList}>Contacts</h2>
      <ContactList />
    </div>
  );
}
