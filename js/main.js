document.addEventListener('DOMContentLoaded', function() {
  var lightSwitch = document.querySelector('.switch');
  var status = document.querySelector('.status');

  lightSwitch.addEventListener('click', function() {
    if (this.classList.contains('off')) {
      this.classList.remove('off');
      this.classList.add('on');

      document.body.classList.remove('dark');
      document.body.classList.add('light');

      status.innerText = "It's so bright in here!";
    } else {
      this.classList.remove('on');
      this.classList.add('off');

      document.body.classList.remove('light');
      document.body.classList.add('dark');

      status.innerText = "It's so dark in here!";
    }
  })

});
