import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-24 bg-blueGray-100 rounded-t-10xl mt-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-2/5 px-4 mb-10 md:mb-0">
            <a className="block font-bold text-xl mb-14" href="#">
              <img className="h-12" src="/uinel-assets/logos/uinel-gray-black.svg" alt="" />
            </a>
            <h2 className="text-6xl xl:text-8xl font-medium mb-8">Subscribe now</h2>
            <div className="mb-5">
              <input
                className="w-full xl:w-auto mb-2 xl:mb-0 xl:mr-2 py-3 px-8 bg-blueGray-100 placeholder-gray-700 border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="email"
                placeholder="Enter you Email"
              />
              <button
                className="inline-block py-3 px-10 md:mx-auto w-full xl:w-auto text-xl leading-7 text-white font-medium tracking-tighter font-heading bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                type="button"
              >
                Let's go
              </button>
            </div>
            <p className="text-sm leading-9 text-gray-400">Fusce sodales vitae lorem vitae now tempus.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-10 lg:mb-0">
                <h3 className="font-medium text-xl mb-10">About Uinel</h3>
                <ul>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      About us
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Stories
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Our people
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Founders
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Why Uinel
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      How we compare
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Website
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Idea
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Newsroom
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-10 lg:mb-0">
                <h3 className="font-medium text-xl mb-10">Product &amp; Tools</h3>
                <ul>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Download Uinel
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Sign up free
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Features
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Google integrations
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Microsoft integrations
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Dropbox integrations
                    </a>
                  </li>
                  <li>
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Mobile App
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-10 md:mb-0">
                <h3 className="font-medium text-xl mb-10">Community</h3>
                <ul>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      UI Designers
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      UX Designers
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Graphic Designers
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Events
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                <h3 className="font-medium text-xl mb-10">Support</h3>
                <ul>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Your account
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Hire an experts
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Help center
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      For students
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Manage cookies
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      FAQ's
                    </a>
                  </li>
                  <li className="mb-5">
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Viedos on YT
                    </a>
                  </li>
                  <li>
                    <a className="text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
