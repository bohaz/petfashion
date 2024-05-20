function Booking() {
  return (
    <div
      className="p-4 pb-10 pt-10 flex flex-col gap-5 items-center bg-contain bg-center bg-pink-100"
      ref={ref}
    >
      <div>
        <h1>Antes de Agendar</h1>
        <p>
          No usamos bozal ni sedación.
          La idea principal es brindar BIENESTAR,
          para lo cual la mascota debe tolerar la manipulación.
        </p>
        <p>
          No recibimos mascotas con pulgas y/o garrapatas.
          La mascota debe ponerse al día con su comprimido o pipeta antiparasitaria.
        </p>
        <p>
          No rapamos mascotas.
          Nos enfocamos en prestar un servicio saludable acorde a la raza.
        </p>
      </div>
    </div>
  );
}

export default Booking;
