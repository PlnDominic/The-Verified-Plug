import { DEFAULT_WA_LINK, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="vp-footer">
      <div className="vp-footer-top">
        <div className="vp-footer-brand">
          <div className="vp-footer-brand-name">
            The Verified Plug
            <span className="vp-footer-brand-sub">China &rarr; Ghana</span>
          </div>
          <p className="vp-footer-desc">
            Vehicles and general goods, sourced and shipped from China to Ghana. Handled end to end.
          </p>
        </div>

        <div className="vp-footer-cols">
          <div>
            <h4 className="vp-footer-col-title">Explore</h4>
            <ul className="vp-footer-links">
              <li><a href="#cars" className="vp-footer-link">What we source</a></li>
              <li><a href="#how" className="vp-footer-link">Good to know</a></li>
              <li><a href="#request" className="vp-footer-link">Request a car</a></li>
            </ul>
          </div>
          <div>
            <h4 className="vp-footer-col-title">Get in touch</h4>
            <ul className="vp-footer-links">
              <li><a href={DEFAULT_WA_LINK} target="_blank" rel="noopener" className="vp-footer-link">WhatsApp us</a></li>
              <li><a href={PHONE_TEL_HREF} className="vp-footer-link">{PHONE_DISPLAY}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="vp-footer-bottom">
        <span>&copy; {year} The Verified Plug. All rights reserved.</span>
        <span>Ghana &middot; strictly by pre-order</span>
      </div>
    </footer>
  );
}
