document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            if (buttonText === 'C') {
                display.innerText = '';
            } else if (buttonText === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else if (buttonText === 'X') {
                display.innerText += '*';
            } else if (buttonText === 'cross') {
                if (display.innerText.length > 0) {
                    display.innerText = display.innerText.slice(0, -1);
                }
            } else if (buttonText === '()') {
                // Toggle brackets
                display.innerText += display.innerText.includes('(') && !display.innerText.includes(')') ? ')' : '(';
            } else {
                // Append button text to the right side of display
                if (display.innerText.length < 12) {
                    display.innerText += buttonText;
                }
            }

            // Adjust font size dynamically based on content length
            adjustFontSize(display);
        });
    });

    function adjustFontSize(element) {
        const maxLength = 14; // Max characters to fit in display
        const fontSizeBase = 3; // Base font size in rem
        const contentLength = element.innerText.length;
        let fontSize = `${fontSizeBase}rem`;

        if (contentLength > maxLength) {
            fontSize = `${fontSizeBase - 0.1 * (contentLength - maxLength)}rem`;
        }

        element.style.fontSize = fontSize;
    }
});
