export const selectVisibleContacts = (state) => {
    const filter = state.contacts.filter.toLowerCase();
    return state.contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };