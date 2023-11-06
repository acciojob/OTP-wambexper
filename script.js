const codeInputs = document.querySelectorAll('.code');
    for (let i = 0; i < codeInputs.length; i++) {
      codeInputs[i].addEventListener('input', function() {
        if (this.value.length >= this.maxLength) {
          if (i < codeInputs.length - 1) {
            codeInputs[i + 1].focus();
          }
        }
      });

      codeInputs[i].addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && this.value.length === 0) {
          if (i > 0) {
            codeInputs[i - 1].focus();
          }
        }
      });
    }

