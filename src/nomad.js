export const nomad = (tag, attrs, ...children) => {
  if (typeof tag === 'function') return tag();
  if (typeof tag === 'string') {
    const fragments = document.createDocumentFragment();
    const element = document.createElement(tag);
    children.forEach(child => {
       if (child instanceof HTMLElement) { 
         fragments.appendChild(child);
       } else if (typeof child === 'string'){
         const textnode = document.createTextNode(child);
         fragments.appendChild(textnode);
       } else {
         console.log('not appendable', child);
       }
    })
    element.appendChild(fragments);
    Object.assign(element, attrs);
    return element;
  }
}

export const jlog = target => JSON.stringify(target, null, 2);