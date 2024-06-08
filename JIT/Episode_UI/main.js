document.querySelector('.dropdown-btn').addEventListener('mouseover', () => {
    document.querySelector('.dropdown-menu').style.display = 'flex';
  });
  
  document.querySelector('.dropdown-menu').addEventListener('mouseleave', () => {
    document.querySelector('.dropdown-menu').style.display = 'none';
  });