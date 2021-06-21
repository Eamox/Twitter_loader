looker.plugins.visualizations.add({
  create: function(element, config) {

  },
  updateAsync: function(data, element, config, queryResponse, details, done) {

    post = data[0][queryResponse.fields.dimensions[0].name].value;

    var block;
    if (block = document.getElementsByTagName('iframe')[0]) {
      var current = block.getAttribute('src')
	if (current.includes(post)) {
        return true
      }
    };
    var body = document.getElementsByTagName('body')[0];
    body.innerHTML = "";
    var di = document.createElement('div');
    di.innerHTML = `<iframe border=0 frameborder=0 height=250 width=550
 src="https://twitframe.com/show?url=https://twitter.com/Australia/status/${post}"></iframe> 
`;
    body.appendChild(di);
  }
})
