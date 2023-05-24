class ExtendedClock extends Clock {
  constructor({ template }, ms = 1000) {
    super({template});
    this.ms = ms;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.ms);
  }
}

let clock = new ExtendedClock({ template: "h:m:s" }, 10000);
clock.start();
