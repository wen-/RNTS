export default class BaseActions {
  //parent = {};
  props: any;
  constructor(props: any) {
    this.props = props;
    this.mounteProperties(Object.getPrototypeOf(this));
  }

  mounteProperties(properties: any) {
    Object.getOwnPropertyNames(properties).forEach((key) => {
      if (key === 'constructor') { return; }
      // @ts-ignore
      Object.defineProperty(this.props, key, { value: this[key] });
    });
  }
}