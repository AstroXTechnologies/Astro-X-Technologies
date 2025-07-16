import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

const FREE_CONTACTS_COLLECTION = "free_contacts";
const CONTACTS_COLLECTION = "contacts";
const QUOTE_CONTACTS_COLLECTION = "quote_contacts";
const NEWSLETTER_COLLECTION = "newsletters";

export const addFreeContactData = async ({
  fName,
  lName,
  phoneNo,
  email,
  message,
  IGHandle,
  business,
}) => {
  try {
    await addDoc(collection(db, FREE_CONTACTS_COLLECTION), {
      fName,
      lName,
      phoneNo,
      email,
      message,
      IGHandle,
      business,
    });

    return true;
  } catch (error) {
    return false;
  }
};
export const addContactForm = async ({
  fName,
  lName,
  phoneNo,
  email,
  message,
}) => {
  try {
    await addDoc(collection(db, CONTACTS_COLLECTION), {
      fName,
      lName,
      phoneNo,
      email,
      message,
    });
    return true;
  } catch (error) {
    return false;
  }
};
export const addQuoteForm = async (data) => {
  console.log(data);
  try {
    await addDoc(collection(db, QUOTE_CONTACTS_COLLECTION), data);
    return true;
  } catch (error) {
    return false;
  }
};

export const addNewsletterEmail = async ({ email }) => {
  try {
    await addDoc(collection(db, NEWSLETTER_COLLECTION), {
      email,
    });
    return true;
  } catch (error) {
    return false;
  }
};
