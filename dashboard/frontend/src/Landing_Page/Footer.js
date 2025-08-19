import React from "react";
import Logo from "./Media/Logo.png";
import sentra from "./Media/SENTRA.png"

function Footer() {
  return (
    <div className="footer row">
      <div className="col p-4">
        <img className="" src={Logo} height={110} width={100}></img>
        <img src={sentra} height={30} width={150}></img>
        <p>© 2010 - 2025, Sentra Broking Ltd. All rights reserved.</p>
        <div>
            <i class="fa-brands fa-github mx-2"></i>
            <i class="fa-brands fa-linkedin mx-2"></i>
            <i class="fa-brands fa-instagram mx-2"></i>
            <i class="fa-brands fa-x-twitter mx-2"></i>
        </div>
      </div>
      <div className="col p-4">
        <h5>Account</h5>
        <a href="" className="links">
          Open demat account
        </a>
        <br />
        <br />
        <a href="" className="links">
          Minor demat account
        </a>
        <br />
        <br />
        <a href="" className="links">
          NRI demat account
        </a>
        <br />
        <br />
        <a href="" className="links">
          Commodity
        </a>
        <br />
        <br />
        <a href="" className="links">
          Dematerialisation
        </a>
        <br />
        <br />
        <a href="" className="links">
          Fund transfer
        </a>
        <br />
        <br />
        <a href="" className="links">
          MTF
        </a>
        <br />
        <br />
        <a href="" className="links">
          Referral program
        </a>
      </div>
      <div className="col p-4">
        <h5>Support</h5>
        <a href="">Contact us</a>
        <br />
        <br />
        <a href="">Support portal</a>
        <br />
        <br />
        <a href="">How to file a complaint?</a>
        <br />
        <br />
        <a href="">Status of your complaints</a>
        <br />
        <br />
        <a href="">Bulletin</a>
        <br />
        <br />
        <a href="">Circular</a>
        <br />
        <br />
        <a href="">Z-Connect blog</a>
        <br />
        <br />
        <a href="">Downloads</a>
      </div>
      <div className="col p-4">
        <h5>Company</h5>
        <a href="">About</a>
        <br />
        <br />
        <a href="">Philosophy</a>
        <br />
        <br />
        <a href="">Press & media</a>
        <br />
        <br />
        <a href="">Careers</a>
        <br />
        <br />
        <a href="">Sentra Cares (CSR)</a>
        <br />
        <br />
        <a href="">Sentra.tech</a>
        <br />
        <br />
        <a href="">Open source</a>
      </div>
      <div className="col p-4">
        <h5>Quick links</h5>
        <a href="">Upcoming IPOs</a>
        <br />
        <br />
        <a href="">Brokerage charges</a>
        <br />
        <br />
        <a href="">Market holidays</a>
        <br />
        <br />
        <a href="">Economic calendar</a>
        <br />
        <br />
        <a href="">Calculators</a>
        <br />
        <br />
        <a href="">Markets</a>
        <br />
        <br />
        <a href="">Sectors</a>
      </div>
      <div className="footer_para px-5 mt-3 mb-1">
        <h8>
          Sentra Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.:
          INZ000031633 CDSL/NSDL: Depository services through Sentra Broking
          Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
          Sentra Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.:
          INZ000038238 Registered Address: Sentra Broking Ltd., #153/154, 4th
          Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@sentra.com, for DP related to dp@sentra.com. Please ensure
          you carefully read the Risk Disclosure Document as prescribed by SEBI
          | ICF
          <br/>
          <br/>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances 
          <br/>
          <br/>
          Smart Online Dispute Resolution | Grievances
          <br/>
          <br/>
           Redressal Mechanism Investments in securities market are
          subject to market risks; read all the related documents carefully
          before investing.
          <br/>
          <br/>
           Attention investors: Stock brokers can accept
          securities as margins from clients only by way of pledge in the
          depository system w.e.f September 01, 2020. Update your e-mail and
          phone number with your stock broker / depository participant and
          receive OTP directly from depository on your e-mail and/or mobile
          number to create pledge. Check your securities / MF / bonds in the
          consolidated account statement issued by NSDL/CDSL every month.
          <br/>
          <br/>
          India's largest broker based on networth as per NSE. NSE broker
          factsheet 
          <br/>
          <br/>
          "Prevent unauthorised transactions in your account. Update
          your mobile numbers/email IDs with your stock brokers. Receive
          information of your transactions directly from Exchange on your
          mobile/email at the end of the day. Issued in the interest of
          investors. KYC is one-time exercise while dealing in securities
          markets - once KYC is done through a SEBI registered intermediary
          (broker, DP, Mutual Fund etc.), you need not undergo the same process
          again when you approach another intermediary. Dear Investor, If you
          are subscribing to an IPO, there is no need to issue a cheque. Please
          write the Bank account number and sign the IPO application form to
          authorize your bank to make payment in case of allotment. In case of
          non allotment the funds will remain in your bank account. As a
          business we don't give stock tips, and have not authorized anyone to
          trade on behalf of others. If you find anyone claiming to be part of
          Sentra and offering such services, please create a ticket here.
        </h8>
      </div>
      <div className=" row px-5 link-item-list mb-2">
        <div className="col link-item">NSE</div>
        <div className="col link-item">BSE</div>
        <div className="col link-item">MCX</div>
        <div className="col link-item">Terms & conditions</div>
        <div className="col link-item">Policies & procedures</div>
        <div className="col link-item">Privacy policy</div>
        <div className="col link-item">Disclosure</div>
        <div className="col link-item">For investor's attention</div>
        <div className="col link-item">Investor charter</div>
      </div>
    </div>
  );
}

export default Footer;
