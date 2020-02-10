import React from 'react';
import ReactDOM from 'react-dom';

const getPropsFromAttributes = function(attributes) {
    const props = {};

    for (const attr of attributes) {
        if (attr.name.includes('data-'))
            props[attr.name.slice(5)] = attr.value;
    }

    return props;
};

const renderModuleOnElement = function(Module, element) {
    const props = element.hasAttributes() ? getPropsFromAttributes(element.attributes) : {};

    ReactDOM.render(<Module {...props} />, element);
};

const renderModuleOnElements = function(Module, elements) {
    if (!Array.isArray(elements) && elements instanceof HTMLElement) {
        renderModuleOnElement(Module, elements);
    }

    for (const element of elements) {
        renderModuleOnElement(Module, element);
    }
};

export default renderModuleOnElements;