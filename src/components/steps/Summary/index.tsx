export default function Summary() {
  return <div className="forthStep">
    <div className="forthStep__content">
      <div className="forthStep__plan">
        <div className="forthStep__plan--label">
          <div className="forthStep__plan--label-item">Arcade (Monthly)</div>
          <div className="forthStep__plan--label-change">Change</div>
        </div>
        <div className="forthStep__plan--price">
          <div className="forthStep__plan--price-value">$9/mo</div>
        </div>
      </div>
      <div className="forthStep__line" />
      <div className="forthStep__addons">
        <div className="forthStep__addons--item">
          <div className="forthStep__addons--item-label">
            Online service
          </div>
          <div className="forthStep__addons--item-price">
            +$1/mo
          </div>
        </div>
        <div className="forthStep__addons--item">
          <div className="forthStep__addons--item-label">
            Larger storage
          </div>
          <div className="forthStep__addons--item-price">
            +$2/mo
          </div>
        </div>
      </div>
    </div>
    <div className="forthStep__footer">
      <div className="forthStep__footer--total">
        Total (per month)
      </div>
      <div className="forthStep__footer--price">
        +$12/mo
      </div>
    </div>
  </div>
}