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
  "slash"         : "<span class='button'>S</span>",
  "hs"            : "<span class='button'>HS</span>",
  "dust"          : "<span class='button'>D</span>",
  "fp"            : "<span class='button'>FP</span>",
  "bp"            : "<span class='button'>BP</span>",
  "fk"            : "<span class='button'>FK</span>",
  "bk"            : "<span class='button'>BK</span>",

  "up"            : "<img class='rotate8' src='/raviolist/img/arrow_a.png' />",
  "upforward"     : "<img class='rotate9' src='/raviolist/img/arrow_a.png' />",
  "forward"       : "<img class='rotate6' src='/raviolist/img/arrow_a.png' />",
  "downforward"   : "<img class='rotate3' src='/raviolist/img/arrow_a.png' />",
  "down"          : "<img class='rotate2' src='/raviolist/img/arrow_a.png' />",
  "downback"      : "<img class='rotate1' src='/raviolist/img/arrow_a.png' />",
  "back"          : "<img class='rotate4' src='/raviolist/img/arrow_a.png' />",
  "upback"        : "<img class='rotate7' src='/raviolist/img/arrow_a.png' />",

  "chdown"        : "<img class='rotate2' src='/raviolist/img/arrow_b.png' />",
  "chdownback"    : "<img class='rotate1' src='/raviolist/img/arrow_b.png' />",
  "chback"        : "<img class='rotate4' src='/raviolist/img/arrow_b.png' />",

  "dpf"           : "<span style='white-space:nowrap;'><img class='rotate6' src='/raviolist/img/arrow_a.png' /><img class='flow rotate2' src='/raviolist/img/arrow_a.png' /><img class='flow rotate3' src='/raviolist/img/arrow_a.png' /></span>",
  "dpb"           : "<span style='white-space:nowrap;'><img class='rotate4' src='/raviolist/img/arrow_a.png' /><img class='flow rotate2' src='/raviolist/img/arrow_a.png' /><img class='flow rotate1' src='/raviolist/img/arrow_a.png' /></span>",

  "qcf"           : "<img class='rotate1' src='/raviolist/img/qcf.png' />",
  "qcb"           : "<img class='rotate3' src='/raviolist/img/qcb.png' />",

  "hcf"           : "<img class='rotate1' src='/raviolist/img/hcf.png' />",
  "hcb"           : "<img class='rotate3' src='/raviolist/img/hcb.png' />",

  "360"           : "<img class='rotate4' src='/raviolist/img/360.png' />",

  "cwing"         : "<img class='rotate2' src='/raviolist/img/hcf.png' />",

};

$('.move_input').input(viewInput);
