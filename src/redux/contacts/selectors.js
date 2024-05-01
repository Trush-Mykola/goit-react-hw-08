import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filter.name;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector([selectNameFilter, selectContacts], (filterContacts, contacts) =>
  contacts.filter((contact) => contact.name.toLowerCase().includes(filterContacts.trim().toLowerCase()) || contact.number.includes(filterContacts))
);
