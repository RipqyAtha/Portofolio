function scrollToSection(index) {
    currentSection = index;
    const targetPosition = sections[index].offsetTop - headerHeight - 8;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });