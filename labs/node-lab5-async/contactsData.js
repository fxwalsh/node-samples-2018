import contactModel from './api/contacts/contactModel';

const contacts = [
  {
    'name': 'Contact 1',
    'address': '123 Test St',
    'phone_number': '132-3212',
    'county': 'Waterford',
    'age': 12,
  },
  {
    'name': 'Contact 2',
    'address': '23 Main St',
    'phone_number': '934-4329',
    'county': 'Wexford',
    'age': 17,
  },
  {
    'name': 'Contact 3',
    'address': '4 Lower St',
    'phone_number': '432-5832',
    'county': 'Waterford',
    'age': 66,
  },
  {
    'name': 'Contact 4',
    'address': '49 Upper Street',
    'phone_number': '934-4290',
    'county': 'Cork',
    'age': 22,
  },
];

export const loadContacts = () => {
  contactModel.find({}).remove(() => {
    contactModel.collection.insert(contacts, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Contact Data: ${err}`);
    } else {
      console.info(`${contacts.length} contacts were successfully stored.`);
    }
  });
});
};
