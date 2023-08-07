  const carousels = document.querySelectorAll('.carousel-wrapper');
  const prevButtons = document.querySelectorAll('.prev-button');
  const nextButtons = document.querySelectorAll('.next-button');

  carousels.forEach((carousel, index) => {
    let currentIndex = 0;
    const boxCount = 3;

    function moveCarousel(direction) {
      const totalBoxes = carousel.querySelectorAll('.box').length;
      const maxIndex = Math.ceil(totalBoxes / boxCount) - 1;

      if (direction === 'prev') {
        currentIndex = Math.max(0, currentIndex - 1);
      } else if (direction === 'next') {
        currentIndex = Math.min(maxIndex, currentIndex + 1);
      }

      carousel.style.transform = `translateX(-${currentIndex * (100 / boxCount)}%)`;
    }

    prevButtons[index].addEventListener('click', () => moveCarousel('prev'));
    nextButtons[index].addEventListener('click', () => moveCarousel('next'));
  });

