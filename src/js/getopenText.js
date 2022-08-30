export default class Collapse {
    constructor() {
      this.button = document.querySelector('.btn');
      this.openTexr = document.querySelector('.open-text');
    }
  
    events() {
      this.button.addEventListener('click', () => {
        const height = this.openTexr.scrollHeight;
  
        if (this.openTexr.style.height === `${height}px`) {
          this.openTexr.style = null;
        } else {
          this.openTexr.style.height = `${height}px`;
        }
      });
    }
  }