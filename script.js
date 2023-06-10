//your JS code here. If required.
    function updateWindowSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const sizeText = `Width: ${width} Height: ${height}`;
      document.getElementById('sizeText').textContent = sizeText;
    }

window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
 setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 3000);