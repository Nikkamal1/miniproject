import React from 'react'
import icon_PNU from "../../public/icon_PNU.png"
function Footer() {
  return (
    <>
    <br/>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <footer className="footer bg-base-200 text-base-content p-10">
          <aside>
            <img src={icon_PNU} alt="PNU Logo" className="w-36 h-auto" />
          
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
      </div>
    </>
  )
}

export default Footer
