import Component from '@glimmer/component';

export default class HelloWorld extends Component {
  constructor(args) {
    console.log('HelloWorld Set Constructor', args);
    super(args);
  }
};
