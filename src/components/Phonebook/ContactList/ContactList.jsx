export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}</span> <span>{number}</span>
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
