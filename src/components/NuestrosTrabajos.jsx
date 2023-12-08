import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

// ThumbnailPlugin es un plugin personalizado para keen-slider
const ThumbnailPlugin = (mainRef) => {
  return (slider) => {
    const removeActive = () => {
      slider.slides.forEach(slide => {
        slide.classList.remove('active');
      });
    };

    const addActive = (idx) => {
      slider.slides[idx].classList.add('active');
    };

    const addClickEvents = () => {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          mainRef.current?.moveToIdx(idx);
        });
      });
    };

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
};

const SwiperThumbnails = () => {
  const theme = useTheme();
  const [sliderRef, instanceRef] = useKeenSlider({
    rtl: theme.direction === 'rtl',
    // Otras opciones de configuración para el slider principal
  });

  const [thumbnailRef] = useKeenSlider({
    rtl: theme.direction === 'rtl',
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      // Asegúrate de que el valor de `max-width` esté correctamente definido
      [theme.breakpoints.values.sm]: {
        slides: {
          perView: 3,
          spacing: 8,
        },
      },
    },
  }, [ThumbnailPlugin(instanceRef)]);

  // Renderiza el componente Swiper con las imágenes
  return (
    <>
      <Box ref={sliderRef} className="keen-slider">
        {/* Aquí van los elementos de tu swiper principal */}
      </Box>

      <Box sx={{ mt: 4 }} ref={thumbnailRef} className="keen-slider thumbnail">
        {/* Aquí van los thumbnails que interactúan con el swiper principal */}
      </Box>
    </>
  );
};

export default SwiperThumbnails;
