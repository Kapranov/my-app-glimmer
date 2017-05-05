import Component from '@glimmer/component';

export default class LondonGlimmer extends Component {
  private portland: any;

  constructor(options) {
    super(options);

    this.portland = "Ember Portland";
  }

  async getReddit() {
  }
};
