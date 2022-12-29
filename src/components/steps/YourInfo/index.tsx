import { useEffect, useRef, useState } from "react";
import Field from "../../Field";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePhone = (phone: string) =>
  phone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);

const validateName = (name: string) => name.length > 2 && name.length < 51;

/**
 *
 * @returns name between 2 and 50
 * // email regex
 * // phone regex
 */

type Props = {
  shouldGetValues: boolean;
  getValues: any;
};

export default function YourInfo({ shouldGetValues, getValues }: Props) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (shouldGetValues) {
      console.log(validateName(name));
      if (!validateName(name)) {
        setNameError(true);
        return;
      }

      getValues({
        name,
        email,
        phone,
      });

      setName("");
      setEmail("");
      setPhone("");
    }
  }, [shouldGetValues]);

  return (
    <>
      <Field hasError name="Name">
        <input
          className={`input ${true ? "input__error" : ""}`}
          id="name"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Field>
      <Field hasError={false} name="Email Address">
        <input
          className="input"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field>
      <Field hasError={false} name="Phone Number">
        <input
          className="input"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Field>
    </>
  );
}
