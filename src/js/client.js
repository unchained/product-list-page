class Client {
// eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {
    this.initAnimations();
  }

  initAnimations() {
    const filters = $('#filters');

    TweenMax.set(filters, {
      xPercent: -100,
    });

    $('.product-list__filtration-genre')
      .click(function () {
        TweenMax.to(filters, 0.25, {
          xPercent: '0',
          ease: Power2.easeOut,
        });
      });

    $('.filter-item')
      .click(function () {
        TweenMax.to(filters, 0.25, {
          xPercent: -100,
          ease: Power2.easeOut,
        });
      });
  }
}

// eslint-disable-next-line no-unused-vars
const instance = new Client();
