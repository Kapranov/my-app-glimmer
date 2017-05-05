import Component from "@glimmer/component";

export default class MyAppGlimmer extends Component {
  title = 'Hello Ember London';
  new_title: string;

  constructor(options) {
    super(options);

    this.new_title = 'Rew Hello Ember London';
  }

  clickMe() {
    console.log('clicked');
  }
}
