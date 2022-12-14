import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'Redux/contacts/selectors';
import { getStatusFilter } from 'Redux/contacts/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contacts/operations';
import { fetchContacts } from 'Redux/contacts/operations';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filters = useSelector(getStatusFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const contactsArray = contacts.items;

  const getVisibleContacts = () => {
    // console.log(isLoading);
    if (filters !== '') {
      return contactsArray.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase())
      );
    }
    return contactsArray;
  };

  const dispatch = useDispatch();

  const onDeleteContact = evt => {
    dispatch(deleteContact(evt));
  };
  const visibleContacts = getVisibleContacts(contactsArray, filters);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {isLoading && !error && <p>Request in progress...</p>}
      {visibleContacts.map(({ name, number, id }) => (
        <li className={css.contacts__item} key={id}>
          <p className={css.contacts__name}>{name}</p>
          <p className={css.contacts__number}>{number}</p>
          <button
            type="button"
            className={css.delete__btn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
