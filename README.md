# DOM Selector Action Block

## Example Usage

	curl -v -X OPTIONS http://block-dom-selector.herokuapp.com
	
	curl -i -X POST -d '{"inputs":[{"attribute":"href","selector":".entry .title a","url":"http://www.reddit.com/r/malefashionadvice/comments/142js9/first_time_wearing_a_sweaterare_these_jeans_too/"}]}' -H "Content-Type: application/json" http://block-dom-selector.herokuapp.com