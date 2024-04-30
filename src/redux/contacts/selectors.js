export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filter.name;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
