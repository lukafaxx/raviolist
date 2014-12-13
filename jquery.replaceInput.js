jQuery.fn.input = function(spanMatch, checkCase, bound) {

  if (bound === undefined) {
    bound = true;
  }

  bound = bound ? '\\b' : '';
  checkCase = checkCase ? '' : 'i';

  function innerInput(node, pat) {
    var skip = 0;
    if (node.nodeType == 3) {
      var re = new RegExp(bound + pat + bound, checkCase);
      var pos = node.data.search(re);
      if (pos >= 0) {
        var span = document.createElement('span');
        span.innerHTML = spanMatch[pat];
        var middlebit = node.splitText(pos);
        middlebit.splitText(pat.length);
        middlebit.parentNode.replaceChild(span, middlebit);
        skip = 1;
      }
    } else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
      for (var i = 0; i < node.childNodes.length; ++i) {
        i += innerInput(node.childNodes[i], pat);
      }
    }
    return skip;
  }

  return this.each(function() {
    for (var pat in spanMatch) {
      innerInput(this, pat);
    }
  });
};

var viewInput = {

  "punch"         : "<span class='button'>P</span>",
  "pp"            : "<span style='white-space:nowrap;'><span class='button'>P</span><span class='button flow'>P</span></span>",
  "ppp"           : "<span style='white-space:nowrap;'><span class='button'>P</span><span class='button flow'>P</span><span class='button flow'>P</span></span>",

  "kick"          : "<span class='button'>K</span>",
  "kk"            : "<span style='white-space:nowrap;'><span class='button'>K</span><span class='button flow'>K</span></span>",
  "kkk"           : "<span style='white-space:nowrap;'><span class='button'>K</span><span class='button flow'>K</span><span class='button flow'>K</span></span>",

  "lp"            : "<span class='button'>LP</span>",
  "mp"            : "<span class='button'>MP</span>",
  "hp"            : "<span class='button'>HP</span>",
  "lk"            : "<span class='button'>LK</span>",
  "mk"            : "<span class='button'>MK</span>",
  "hk"            : "<span class='button'>HK</span>",
  "fp"            : "<span class='button'>FP</span>",
  "bp"            : "<span class='button'>BP</span>",
  "fk"            : "<span class='button'>FK</span>",
  "bk"            : "<span class='button'>BK</span>",

  "up"            : "<img src='/raviolist/img/8.png' />",
  "upforward"     : "<img src='/raviolist/img/9.png' />",
  "forward"       : "<img src='/raviolist/img/6.png' />",
  "downforward"   : "<img src='/raviolist/img/3.png' />",
  "down"          : "<img src='/raviolist/img/2.png' />",
  "downback"      : "<img src='/raviolist/img/1.png' />",
  "back"          : "<img src='/raviolist/img/4.png' />",
  "upback"        : "<img src='/raviolist/img/7.png' />",

  "chdown"        : "<img src='/raviolist/img/ch2.png' />",
  "chdownback"    : "<img src='/raviolist/img/ch1.png' />",
  "chback"        : "<img src='/raviolist/img/ch4.png' />",

  "dpf"           : "<span style='white-space:nowrap;'><img src='/raviolist/img/6.png' /> <img src='/raviolist/img/2.png' /> <img src='/raviolist/img/3.png' /></span>",
  "dpb"           : "<span style='white-space:nowrap;'><img src='/raviolist/img/4.png' /> <img src='/raviolist/img/2.png' /> <img src='/raviolist/img/1.png' /></span>",

  "qcf"           : "<span style='white-space:nowrap;'><img src='/raviolist/img/2.png' /><img class='flow' src='/raviolist/img/3.png' /><img class='flow' src='/raviolist/img/6.png' /></span>",
  "qcb"           : "<span style='white-space:nowrap;'><img src='/raviolist/img/2.png' /><img class='flow' src='/raviolist/img/1.png' /><img class='flow' src='/raviolist/img/4.png' /></span>",

  "hcf"           : "<span style='white-space:nowrap;'><img src='/raviolist/img/4.png' /><img class='flow' src='/raviolist/img/1.png' /><img class='flow' src='/raviolist/img/2.png' /><img class='flow' src='/raviolist/img/3.png' /><img class='flow' src='/raviolist/img/6.png' /></span>",
  "hcb"           : "<span style='white-space:nowrap;'><img src='/raviolist/img/6.png' /><img class='flow' src='/raviolist/img/3.png' /><img class='flow' src='/raviolist/img/2.png' /><img class='flow' src='/raviolist/img/1.png' /><img class='flow' src='/raviolist/img/4.png' /></span>",

  "360"           : "<span class='button'>360</span>",

  "cwing"         : "<span style='white-space:nowrap;'><img src='/raviolist/img/1.png' /><img class='flow' src='/raviolist/img/2.png' /><img class='flow' src='/raviolist/img/3.png' /><img class='flow' src='/raviolist/img/6.png' /><img class='flow' src='/raviolist/img/9.png' /></span>",

};

$('.move_input').input(viewInput);
