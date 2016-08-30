const prettyPrice = (num) => {
  var n = 2,
      x = 3,
      s = '.',
      c = ','

  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')';

  num = num.toFixed(Math.max(0, ~~n))

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','))
}

export {prettyPrice as default}
