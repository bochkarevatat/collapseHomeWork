export default class Collapse {
  constructor(parentEl) {
    this.parentEl = parentEl;
    // this.button = document.querySelector('.btn');
    // this.openTexr = document.querySelector('.open-text');
    this.events = this.events.bind(this);
  }

  static get markup() {
    return `
    <div class="border">
      <button type="button" class="btn">Collapse</button>
      <div class="open-text">
        <p></p>     
      </div>
    </div>
    <div class="fon">
      <button type="button" class="btnCopy">Copy</button>
    </div>
    `;
  }

  static get border() {
    return '.border';
  }

  static get button() {
    return '.btn';
  }

  static get fon() {
    return '.fon';
  }

  static get openText() {
    return '.open-text';
  }

  bindToDOM() {
    this.parentEl.innerHTML = Collapse.markup;
    this.border = this.parentEl.querySelector(Collapse.border);
    this.button = this.parentEl.querySelector(Collapse.button);
    this.fon = this.parentEl.querySelector(Collapse.fon);
    // console.log(this.border);
    this.openText = this.parentEl.querySelector(Collapse.openText);
    this.button.addEventListener('click', this.events);
  }

  events() {
    this.openText.children[0].textContent = 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32';
    const height = this.openText.scrollHeight;

    if (this.openText.style.height === `${height}px`) {
      this.openText.style = null;
    } else {
      this.openText.style.height = `${height}px`;
    }
  }
}
