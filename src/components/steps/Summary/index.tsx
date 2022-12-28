type Props = {
  onChangeClick: () => void;
};

export default function Summary({ onChangeClick }: Props) {
  return (
    <div className="summary">
      <div className="summary__content">
        <div className="summary__plan">
          <div className="summary__plan--label">
            <div className="summary__plan--label-item">Arcade (Monthly)</div>
            <div
              onClick={onChangeClick}
              className="summary__plan--label-change"
            >
              Change
            </div>
          </div>
          <div className="summary__plan--price">
            <div className="summary__plan--price-value">$9/mo</div>
          </div>
        </div>
        <div className="summary__line" />
        <div className="summary__addons">
          <div className="summary__addons--item">
            <div className="summary__addons--item-label">Online service</div>
            <div className="summary__addons--item-price">+$1/mo</div>
          </div>
          <div className="summary__addons--item">
            <div className="summary__addons--item-label">Larger storage</div>
            <div className="summary__addons--item-price">+$2/mo</div>
          </div>
        </div>
      </div>
      <div className="summary__footer">
        <div className="summary__footer--total">Total (per month)</div>
        <div className="summary__footer--price">+$12/mo</div>
      </div>
    </div>
  );
}
