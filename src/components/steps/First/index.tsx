import { useRef } from "react";
import Field from "../../Field";

export default function FirstStep() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Field name="Name">
        <input
          className="input"
          id="name"
          placeholder="e.g. Stephen King"
          ref={nameRef}
        />
      </Field>
      <Field name="Email Address">
        <input
          className="input"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          ref={emailRef}
          type="email"
        />
      </Field>
      <Field name="Phone Number">
        <input
          className="input"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          ref={phoneRef}
          type="tel"
        />
      </Field>
    </>
  );
}
