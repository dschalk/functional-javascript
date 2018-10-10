#lang 'sweet.js';

export syntax class = function (ctx) {
  let name = ctx.next().value;
  let bodyCtx = ctx.of(ctx.next().value);

  let constructor;
  let methods = [];
  for (let item of bodyCtx) {
    if (item.isIdentifier() && item.val() === 'constructor') {
      constructor = #`function ${name} ${bodyCtx.next().value} ${bodyCtx.next().value}`;
    } else {
      methods.push(#`
        ${name}.prototype.${item} = function ${bodyCtx.next().value} ${bodyCtx.next().value};
      `);
    }
  }
  return methods.reduce(function (acc, method) {
    return acc.concat(method);
  }, constructor);
}
