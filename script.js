function focusNext(currentInput) {
    const maxLength = parseInt(currentInput.getAttribute('maxlength'));
    const nextInputId = parseInt(currentInput.id.split('-')[1]) + 1;

    if (currentInput.value.length === maxLength && nextInputId <= 6) {
        document.getElementById('code-' + nextInputId).focus();
    }
}

function focusPrev(currentInput) {
    const prevInputId = parseInt(currentInput.id.split('-')[1]) - 1;

    if (event.key === 'Backspace' && prevInputId >= 1) {
        currentInput.value = '';
        document.getElementById('code-' + prevInputId).focus();
    }
}