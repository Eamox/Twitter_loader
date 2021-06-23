looker.plugins.visualizations.add({
    create: function(element, config) {
	var twit = document.createElement('script')
      twit.innerHTML=`window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));`
	element.appendChild(twit)
	var container = document.createElement('div')
	container.id="tweet-container"
	element.appendChild(container)
	console.log(twttr)

  },
  updateAsync: function(data, element, config, queryResponse, details, done) {

    post = data[0][queryResponse.fields.dimensions[0].name].value;
     
      
      twttr.ready(function(){
	  console.log('loaded');
	  twttr.widgets.createTweet(post,document.getElementById('tweet-container')).then(function(el){console.log(el)})
      })
						
  }})
