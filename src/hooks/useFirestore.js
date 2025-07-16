import { useState } from "react";
import {
  addContactForm,
  addFreeContactData,
  addNewsletterEmail,
  addQuoteForm,
} from "../firebase/firestoreFuncs";

const useFirestore = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addFreeContact = async ({
    fName,
    lName,
    phoneNo,
    email,
    message,
    IGHandle,
    business,
  }) => {
    setIsLoading(true);
    const result = await addFreeContactData({
      fName,
      lName,
      phoneNo,
      email,
      message,
      IGHandle,
      business,
    });
    setIsLoading(false);
    if (result) return "success";
    if (!result) return "error";
  };
  const addContact = async ({ fName, lName, phoneNo, email, message }) => {
    setIsLoading(true);
    const result = await addContactForm({
      fName,
      lName,
      phoneNo,
      email,
      message,
    });
    setIsLoading(false);
    if (result) return "success";
    if (!result) return "error";
  };

  const addQuoteContact = async (data) => {
    setIsLoading(true);
    const result = await addQuoteForm(data);
    setIsLoading(false);
    if (result) return "success";
    if (!result) return "error";
  };

  const addEmail = async ({ newsletterEmail }) => {
    setIsLoading(true);
    const result = await addNewsletterEmail({ email: newsletterEmail });
    console.log({ result, email: newsletterEmail });
    setIsLoading(false);
    if (result) return "success";
    if (!result) return "error";
  };

  return {
    isLoading,
    addFreeContact,
    addContact,
    addQuoteContact,
    addEmail,
  };
};

export default useFirestore;
