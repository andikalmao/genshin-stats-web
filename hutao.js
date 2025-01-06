const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

menuButton.addEventListener('click', () => {
  const isExpanded = dropdownMenu.style.width !== '0px' && dropdownMenu.style.width !== '';
  if (isExpanded) {
    dropdownMenu.style.width = '0';
  } else {
    dropdownMenu.style.display = 'flex';
    dropdownMenu.style.width = '1000px';
  }

  menuButton.classList.add('shake');
        setTimeout(() => {
          menuButton.classList.remove('shake');
        }, 500);
});