document.addEventListener('DOMContentLoaded', function() {
    const buttonFan = document.querySelector('#buttonFan');
    buttonFan.addEventListener('click', function() {
      const ceilingFan = document.querySelector('#ceilingFan');
      ceilingFan.emit('rotateFan');
    });
  });
  