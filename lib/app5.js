"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
var _test = _interopRequireDefault(require("./test4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Tawk {
  constructor(_ref) {
    let {
      position = 'bottom-right'
    } = _ref;
    this.position = this.getPosition(position);
    this.open = false;
    this.initialise();
    this.createStyles();
  }
  getPosition(position) {
    const [vertical, horizontal] = position.split('-');
    return {
      [vertical]: '30px',
      [horizontal]: '30px'
    };
  }
  initialise() {
    (0, _test.default)();
    const container = document.createElement('div');
    container.style.position = 'fixed';
    Object.keys(this.position).forEach(key => container.style[key] = this.position[key]);
    document.body.appendChild(container);
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    const chatIcon = document.createElement('img');
    chatIcon.src = 'assets/chat.svg';
    chatIcon.classList.add('icon');
    this.chatIcon = chatIcon;
    const closeIcon = document.createElement('img');
    closeIcon.src = 'assets/cross.svg';
    closeIcon.classList.add('icon', 'hidden');
    this.closeIcon = closeIcon;
    buttonContainer.appendChild(this.chatIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener('click', this.toggleOpen.bind(this));
    this.messageContainer = document.createElement('div');
    this.messageContainer.classList.add('hidden', 'message-container');
    this.createMessageContainerContent();
    container.appendChild(this.messageContainer);
    container.appendChild(buttonContainer);
  }
  createMessageContainerContent() {
    this.messageContainer.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = "We're not here, drop us an email...";
    const form = document.createElement('form');
    form.classList.add('content');
    const email = document.createElement('input');
    email.required = true;
    email.id = 'email';
    email.type = 'email';
    email.placeholder = 'Enter your email address';
    const message = document.createElement('textarea');
    message.required = true;
    message.id = 'message';
    message.placeholder = 'Your message';
    const btn = document.createElement('button');
    btn.textContent = 'Submit';
    form.appendChild(email);
    form.appendChild(message);
    form.appendChild(btn);
    form.addEventListener('submit', this.submit.bind(this));
    this.messageContainer.appendChild(title);
    this.messageContainer.appendChild(form);
  }
  createStyles() {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = "\n          .icon {\n              cursor: pointer;\n              width: 70%;\n              position: absolute;\n              top: 9px;\n              left: 9px;\n              transition: transform .3s ease;\n          }\n          .hidden {\n              transform: scale(0);\n          }\n          .button-container {\n              background-color: #04b73f;\n              width: 60px;\n              height: 60px;\n              border-radius: 50%;\n          }\n          .message-container {\n              box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);\n              width: 400px;\n              right: -25px;\n              bottom: 75px;\n              max-height: 400px;\n              position: absolute;\n              transition: max-height .2s ease;\n              font-family: Helvetica, Arial ,sans-serif;\n          }\n          .message-container.hidden {\n              max-height: 0px;\n          }\n          .message-container h2 {\n              margin: 0;\n              padding: 20px 20px;\n              color: #fff;\n              background-color: #04b73f;\n          }\n          .message-container .content {\n              margin: 20px 10px ;\n              border: 1px solid #dbdbdb;\n              padding: 10px;\n              display: flex;\n              background-color: #fff;\n              flex-direction: column;\n          }\n          .message-container form * {\n              margin: 5px 0;\n          }\n          .message-container form input {\n              padding: 10px;\n          }\n          .message-container form textarea {\n              height: 100px;\n              padding: 10px;\n          }\n          .message-container form textarea::placeholder {\n              font-family: Helvetica, Arial ,sans-serif;\n          }\n          .message-container form button {\n              cursor: pointer;\n              background-color: #04b73f;\n              color: #fff;\n              border: 0;\n              border-radius: 4px;\n              padding: 10px;\n          }\n          .message-container form button:hover {\n              background-color: #16632f;\n          }\n      ".replace(/^\s+|\n/gm, '');
    document.head.appendChild(styleTag);
  }
  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.chatIcon.classList.add('hidden');
      this.closeIcon.classList.remove('hidden');
      this.messageContainer.classList.remove('hidden');
    } else {
      this.createMessageContainerContent();
      this.chatIcon.classList.remove('hidden');
      this.closeIcon.classList.add('hidden');
      this.messageContainer.classList.add('hidden');
    }
  }
  submit(event) {
    event.preventDefault();
    const formSubmission = {
      email: event.srcElement.querySelector('#email').value,
      message: event.srcElement.querySelector('#message').value
    };
    this.messageContainer.innerHTML = '<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry';
    console.log(formSubmission);
  }
}