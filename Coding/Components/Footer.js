
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
    
       <div className="footer-section p-10 m-10 w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h3 className="">About Us</h3>
          <ul >
            <li >Mission and Vision</li>
            <li>Our Story</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="footer-section">
            <h3 className="">Contact Us</h3>
            <ul>
              <li>Customer Support</li>
              <li>Email</li>
              <li>Phone Number</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="">Ordering</h3>
            <ul>
              <li>How It Works</li>
              <li>Delivery Zones</li>
              <li>Payment Methods</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="">Legal</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="">Download Our App</h3>
            <ul>
              <li>Link to App Store</li>
              <li>Link to Google Play</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="">Partnerships</h3>
            <ul>
              <li>Become a Partner</li>
              <li>Restaurant Sign-Up</li>
              <li>Driver Opportunities</li>
            </ul>
          </div>
         
          <div className="footer-section">
            <h3 className="">Newsletter</h3>
            <ul>
              <li>Sign up for updates</li>
              <li>Special offers and promotions</li>
            </ul>
          </div>
        </div>
    
  );
};

export default Footer;
