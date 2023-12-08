
import React from 'react';
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function MyFooter() {
  return (
    <Footer container className="bg-gray-800 text-white">
      <div className="w-full py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
              className="text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <FooterTitle title="About" className="text-gray-400" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="hover:text-gray-300">Flowbite</FooterLink>
                <FooterLink href="#" className="hover:text-gray-300">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" className="text-gray-400" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="hover:text-gray-300">Github</FooterLink>
                <FooterLink href="#" className="hover:text-gray-300">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" className="text-gray-400" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="hover:text-gray-300">Privacy Policy</FooterLink>
                <FooterLink href="#" className="hover:text-gray-300">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider className="my-8 border-gray-700" />
        <div className="w-full flex flex-col sm:flex-row justify-between items-center">
          <FooterCopyright href="#" by="PetFashion" year={2023} className="text-gray-400"/>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <FooterIcon href="#" icon={BsFacebook} className="text-xl hover:text-gray-300" />
            <FooterIcon href="#" icon={BsInstagram} className="text-xl hover:text-gray-300" />
            <FooterIcon href="#" icon={BsTwitter} className="text-xl hover:text-gray-300" />
            <FooterIcon href="#" icon={BsGithub} className="text-xl hover:text-gray-300" />
            <FooterIcon href="#" icon={BsDribbble} className="text-xl hover:text-gray-300" />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
