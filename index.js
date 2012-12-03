var fs = require('fs');
var jquery = fs.readFileSync('./vendor/jquery.min.js').toString();
var jsdom = require('jsdom');
var Block = require('node-webpipe').Block;

var block = new Block()
  .name('DOM Selector')
  .description('Outputs selected content from a HTML DOM.')
  .input('url', 'string', 'The location of the document to inspect.')
  .input('selector', 'string', 'A jQuery-compatible DOM selector.')
  .input('attribute', 'string', 'A HTML element attribute.')
  .output('content', 'string', 'The selected content from the document.')
	
block.handle(function(inputs, callback) {
  getContent(inputs, function (content) {
    callback(false, { 
			content: content 
		});
  });
});

block.listen();

var getContent = function (inputs, callback) {
  jsdom.env({
    html: inputs.url,
    src: [jquery],
    done: function (errors, window) {
      var $ = window.$;
      var $element = null;

      if (errors) {
        callback('');
      }

      $element = $(inputs.selector)

      if (inputs.attribute) {
        callback($element.attr(inputs.attribute));
      } else {
        callback($element.html())
      }
    }
  });
};