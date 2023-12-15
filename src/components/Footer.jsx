import React from 'react';
import {
  Footer,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si'; // Importando el icono de Google Maps

function MyFooter() {
  return (
    <Footer container className="bg-gray-800 text-white">
      <div className="w-full py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          {/* Sección de información y enlaces */}
          <div>
            <FooterTitle title="Pet Fashion" className="text-gray-400" />
            <FooterLinkGroup col>
              <FooterLink href="about" className="hover:text-gray-300">Quienes somos</FooterLink>
              <FooterLink href="servicios" className="hover:text-gray-300">Nuestros servicios</FooterLink>
              <FooterLink href="trabajos" className="hover:text-gray-300">Nuestros trabajos</FooterLink>
              <FooterLink href="contact" className="hover:text-gray-300">Contáctanos</FooterLink>
            </FooterLinkGroup>
          </div>

          {/* Sección de localización y redes sociales */}
          <div>
            <FooterTitle title="Visítanos" className="text-gray-400" />
            <FooterLink href="#" className="hover:text-gray-300">
            Calle Santa Luisa #51, Isla Negra
            </FooterLink>
            <div className="mt-4 flex space-x-6">
              <FooterIcon href="#" icon={BsFacebook} className="text-xl hover:text-gray-300" />
              <FooterIcon href="@pet_fashion17" icon={BsInstagram} className="text-xl hover:text-gray-300" />
              <FooterIcon href="https://maps.app.goo.gl/RP3MHQ3pyWAoQ2Qq6" icon={SiGooglemaps} className="text-xl hover:text-gray-300" /> {/* Icono de Google Maps */}
            </div>
          </div>
        </div>

        {/* Divider y derechos de autor */}
        <FooterDivider className="my-8 border-gray-700" />
        <div>
        <p className="text-gray-400 text-center mx-auto">
  © 2023 Pet Fashion. Todos los derechos reservados.
</p>

        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
