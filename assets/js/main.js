{

  /**
   * ------------------------------------------------------------------------
   * offcanvas
   * ------------------------------------------------------------------------
   */

  const Selector = {
    TARGET      : '[data-toggle-offcanvas]',
    BODY        : '[data-body-offcanvas]',
    BG          : '#js-offcanvas-bg',
    LOWER_LAYER : 'footer,main'
  };

  const Default = {
    current_scrollY: null
  };


  /**
   * ------------------------------------------------------------------------
   * Event
   * ------------------------------------------------------------------------
   */

  $(Selector.TARGET).on('click', e => {
    if ($(Selector.BODY).attr('aria-hidden') === 'true') {
      settingOpen(e);
    } else {
      settingClose();
    }
  });

  $(Selector.BODY).on('click', 'a',  () => {
    settingClose();
  });

  $(Selector.BG).on('click',  e => {
    e.preventDefault();
    settingClose();
  });


  /**
   * ------------------------------------------------------------------------
   * Function
   * ------------------------------------------------------------------------
   */

  function settingOpen(e) {
    e.preventDefault();
    $(Selector.BODY).attr({'aria-hidden': 'false', 'tabindex': '1'});
    $(Selector.TARGET).attr({'aria-expanded': 'true', 'aria-label': '閉じる'});
    $(Selector.BG).css({
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, .5)',
      overflow: 'hidden',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '998'
    });
    $(Selector.LOWER_LAYER).attr({'aria-hidden': 'true'});
    Default.current_scrollY = $(window).scrollTop();
    $('body').css({
      position: 'fixed',
      width: '100%',
      top: -1 * Default.current_scrollY
    });
  }

  function settingClose() {
    $(Selector.BODY).attr({'aria-hidden': 'true', 'tabindex': '-1'});
    $(Selector.TARGET).attr({'aria-expanded': 'false', 'aria-label': '開く'});
    $(Selector.BG).attr({style: ''});
    $(Selector.LOWER_LAYER).removeAttr('aria-hidden');
    $('body').attr({style: ''});
    $('html, body').prop({scrollTop: Default.current_scrollY});
  }

}



