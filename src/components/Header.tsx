type Props = {
  step: number;
};

const steps = [
  {
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing. ",
  },
  {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
  },
];

export default function Header({ step }: Props) {
  return (
    <>
      <div className="title">{steps[step - 1]["title"]}</div>
      <div className="subtitle">{steps[step - 1]["subtitle"]}</div>
    </>
  );
}
