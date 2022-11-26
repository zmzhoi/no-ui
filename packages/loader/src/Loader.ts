import { classes } from './utils/classes';
import { html } from './utils/html';
import { styles } from './utils/styles';

export type LoaderType = 'box';

export default class Loader {
  public type: LoaderType;
  private styleId: string;
  private timer: NodeJS.Timeout | undefined;
  private loaderDom: HTMLDivElement | undefined;
  private styleDom: HTMLStyleElement | undefined;
  private containerDom: HTMLElement;

  constructor(type: LoaderType, container?: HTMLElement) {
    this.type = type;
    this.styleId = `noui-${type}-loader-${Date.now()}`;
    this.containerDom = container || document.body;
  }

  private injectStyle() {
    const { styleId, type } = this;

    if (this.styleDom) {
      return;
    }

    this.styleDom = document.createElement('style');
    this.styleDom.id = styleId;
    this.styleDom.appendChild(document.createTextNode(styles[type]));
    document.head.appendChild(this.styleDom);
  }

  private clearStyle() {
    if (this.styleDom) {
      document.head.removeChild(this.styleDom);
      this.styleDom = undefined;
    }
  }

  private render(message: string) {
    if (this.loaderDom) {
      return;
    }

    const template = document.createElement('template');
    template.innerHTML = html[this.type];
    this.loaderDom = template.content.firstChild as HTMLDivElement;
    this.loaderDom.classList.add(classes[this.type], 'enter');
    (this.loaderDom.querySelector('.message') as HTMLDivElement).innerHTML = message;

    this.injectStyle();
    this.containerDom.appendChild(this.loaderDom);
  }

  private unmount() {
    if (!this.loaderDom) {
      return;
    }

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.loaderDom.classList.add('exit');
    this.timer = setTimeout(() => {
      if (this.loaderDom) {
        this.containerDom.removeChild(this.loaderDom);
        this.loaderDom = undefined;
        this.clearStyle();
      }
    }, 350);
  }

  show(message = 'Loading...'): void {
    if (window === undefined) {
      return;
    }

    this.render(message);
  }
  hide(): void {
    if (window === undefined) {
      return;
    }

    this.unmount();
  }
}
