import { Link } from "react-router-dom"
import ContactForm from "./ContactForm"


const Footer = () => {
    return (
      <footer className="bg-[#f5f5f7] py-8 md:py-12 text-xs text-gray-500">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="border-b border-gray-300 pb-6 md:pb-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-3 md:mb-4">
              Ikatan Alumni MAN 2 Sukabumi (ILMI)
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/organization" className="hover:underline">
                  Organization
                </Link>
              </li>
              <li>
                <Link
                  to="/organization?tab=members"
                  className="hover:underline"
                >
                  Team Members
                </Link>
              </li>
              <li>
                <Link
                  to="/organization?tab=programs"
                  className="hover:underline"
                >
                  Program Kerja
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-3 md:mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="https://instagram.com/ilmi.mandubumi" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-3 md:mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <ContactForm
                  buttonVariant="ghost"
                  buttonClassName="hover:underline p-0 h-auto font-normal text-xs text-gray-500"
                  buttonText="Contact Us"
                />
              </li>
              <li>
                <Link to="https://instagram.com/ilmi.mandubumi" className="hover:underline">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 text-center md:text-left">
          <p>
            Copyright © 2025 Ikatan Alumni MAN 2 Sukabumi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
    )
}

export default Footer