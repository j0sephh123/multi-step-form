import ThankYouIcon from "../../../assets/images/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <div className="thankYou">
      <img src={ThankYouIcon} />
      <div className="thankYou__title">Thank you!</div>
      <p className="thankYou__text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
