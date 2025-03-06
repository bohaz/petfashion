import clientIcon from '../assets/svg icons/Cliente.svg';
import animalsIcon from '../assets/svg icons/Animales.svg';
import medallaIcon from '../assets/svg icons/Medalla.svg';
import walkIcon from '../assets/svg icons/Perro.svg';
import BookingButton from './BookingButton';

const CustomerSatisfactionStats = () => (
  <section className="bg-orange text-white px-2 py-14 lg:px-28 lg:py-28">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 lg:mb-14">Estatus de Clientes Satisfechos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="p-4 border border-white rounded-lg flex gap-3 items-center justify-center">
          <div className="bg-softOrange p-2 rounded-md">
            <img src={clientIcon} alt="Clientes Atendidos" className="w-9 h-9" />
          </div>
          <div className="text-left">
            <p className="text-2xl font-bold">100+</p>
            <p className="text-sm">Clientes Atendidos</p>
          </div>

        </div>
        <div className="p-4 border border-white rounded-lg flex gap-3 items-center justify-center">
          <div className="bg-softOrange p-2 rounded-md">
            <img src={animalsIcon} alt="Perritos Atendidos" className="w-9 h-9" />
          </div>
          <div className="text-left">
            <p className="text-2xl font-bold">500+</p>
            <p className="text-sm">Perritos Atendidos</p>
          </div>

        </div>
        <div className="p-4 border border-white rounded-lg flex gap-3 items-center justify-center">
          <div className="bg-softOrange p-2 rounded-md">
            <img src={medallaIcon} alt="Años de experiencia" className="w-9 h-9" />
          </div>
          <div className="text-left">
            <p className="text-2xl font-bold">5+</p>
            <p className="text-sm">Años de experiencia</p>
          </div>

        </div>
        <div className="p-4 border border-white rounded-lg flex gap-3 items-center justify-center">
          <div className="bg-softOrange p-2 rounded-md">
            <img src={walkIcon} alt="Miles Walked" className="w-9 h-9" />
          </div>
          <div className="text-left">
            <p className="text-2xl font-bold">5/5</p>
            <p className="text-sm">Reseñas</p>
          </div>

        </div>
      </div>
      <div className="mt-14 lg:mt-10">
        <BookingButton
          sx={{
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid white',
            hoverBackgroundColor: '#f5f5f5',
          }}
        />
      </div>

    </div>
  </section>
);

export default CustomerSatisfactionStats;
