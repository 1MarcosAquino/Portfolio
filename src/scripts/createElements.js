function createElement(tagName, content = null, attributes = {}) {
    const element = document.createElement(tagName);

    if (typeof attributes === 'object') {
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
    }

    if (content) {
        if (typeof content === 'string') {
            element.textContent = content;
        } else if (content instanceof Node) {
            element.appendChild(content);
        } else {
            console.error('O conteúdo fornecido não é suportado.');
        }
    }

    return element;
}

export { createElement };
