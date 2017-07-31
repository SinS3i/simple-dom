import { Document } from 'simple-dom';

export var document = (function (){
  if (typeof window !== 'undefined' && window.document) {
    return window.document;
  }
  return new Document();
}());

export function element(tagName, attrs) {
  var el = document.createElement(tagName);
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  for (var i=2; i<arguments.length; i++) {
    el.appendChild(arguments[i]);
  }
  return el;
}

export function fragment() {
  var frag = document.createDocumentFragment();
  for (var i=0; i<arguments.length; i++) {
    frag.appendChild(arguments[i]);
  }
  return frag;
}

export function text(s) {
  return document.createTextNode(s);
}

export function comment(s) {
  return document.createComment(s);
}

export function html(s) {
  return document.createRawHTMLSection(s);
}
