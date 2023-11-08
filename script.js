//your JS code here. If required.
 const codes = document.querySelectorAll('.code');
      for (let i = 0; i < codes.length; i++) {
        codes[i].addEventListener('input', function() {
          if (this.value.length === this.maxLength) {
            codes[i + 1].focus();
          }
        });
        codes[i].addEventListener('keydown', function(e) {
          if (e.key === 'Backspace' && this.value.length === 0) {
            codes[i - 1].focus();
          }
        });
      }
    