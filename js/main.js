document.addEventListener('DOMContentLoaded', function() {
  var lightSwitch = document.querySelector('.switch');

  lightSwitch.addEventListener('click', function() {
    if (this.classList.contains('off')) {
      this.classList.remove('off');
      this.classList.add('on');
    } else {
      this.classList.remove('on');
      this.classList.add('off');
    }
  })

});
