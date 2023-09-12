// Pengambilan selector html
const crossbar = document.getElementById('cross-bar');
const navLink = document.getElementById('nav-link');
let screenWidth = screen.width;

// Pengecekan jika window sizenya berubah
window.addEventListener('resize', function() {
  navLink.style.display = 'flex';
})

// Perubahan logo menu
crossbar.addEventListener('click', function() {
  if (crossbar.classList.contains('open')) {
    crossbar.src = './assets/images/bar.png';
    navLink.style.display = 'none';
    crossbar.classList.remove("open");
  } else {
    crossbar.classList.add("open");
    navLink.style.display = 'flex';
    crossbar.src = './assets/images/cross.png';
  }
})
