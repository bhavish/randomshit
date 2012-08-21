YUI.add('framed', function(Y,NAME) {
  Y.mojito.controllers[NAME] = {
    init: function(config) {
      this.config = config;
    },
    index: function(ac) {
		var data = {
			articles : [
			{url: "http://l1.yimg.com/bt/api/res/1.2/9BFhivzO4XJ2P37eG5xebA--/YXBwaWQ9eW5ld3M7cT04NTt3PTYxMA--/http://media.zenfs.com/en/blogs/motoramic/front-quarter-shelby-tribute.jpg" , desc: "One-off 2013 Shelby GT500 Cobra is an 850-hp tribute to Carroll Shelby"},
			{url: "http://l.yimg.com/bt/api/res/1.2/xWaDDfMFOnmI_l4Pcm1pBg--/YXBwaWQ9eW5ld3M7cT04NTt3PTYzMA--/http://media.zenfs.com/en/blogs/motoramic/1994accordstol.jpg" , desc: "Top 10 list of most-stolen vehicles filled with foreign sedans, American pickups"},
			{url: "http://l1.yimg.com/bt/api/res/1.2/ayZ6A19U7oGyIkDKShjqYQ--/YXBwaWQ9eW5ld3M7cT04NTt3PTYzMA--/http://media.zenfs.com/en/blogs/motoramic/saoutchil.jpg", desc: "1928 Mercedes-Benz 680S Saoutchik Torpedo tops Pebble Beach Concours"},
			{url: "http://l1.yimg.com/bt/api/res/1.2/ayZ6A19U7oGyIkDKShjqYQ--/YXBwaWQ9eW5ld3M7cT04NTt3PTYzMA--/http://media.zenfs.com/en/blogs/motoramic/saoutchil.jpg", desc: "1928 Mercedes-Benz 680S Saoutchik Torpedo tops Pebble Beach Concours"},
				{url: "http://l1.yimg.com/bt/api/res/1.2/9BFhivzO4XJ2P37eG5xebA--/YXBwaWQ9eW5ld3M7cT04NTt3PTYxMA--/http://media.zenfs.com/en/blogs/motoramic/front-quarter-shelby-tribute.jpg" , desc: "One-off 2013 Shelby GT500 Cobra is an 850-hp tribute to Carroll Shelby"},
							{url: "http://l.yimg.com/bt/api/res/1.2/xWaDDfMFOnmI_l4Pcm1pBg--/YXBwaWQ9eW5ld3M7cT04NTt3PTYzMA--/http://media.zenfs.com/en/blogs/motoramic/1994accordstol.jpg" , desc: "Top 10 list of most-stolen vehicles filled with foreign sedans, American pickups"},
								{url: "http://l3.yimg.com/bt/api/res/1.2/OeQPT58NSUKfVJUhMJiM1w--/YXBwaWQ9eW5ld3M7Zmk9aW5zZXQ7aD00MDA7cT04NTt3PTU5MQ--/http://l.yimg.com/os/290/2012/08/19/DSC0976-JPG_021457.jpg" , desc: "A Cobra-powered weekend of race cars at the Rolex Monterey Motorsports Reunion"},
								{url: "http://l1.yimg.com/bt/api/res/1.2/ayZ6A19U7oGyIkDKShjqYQ--/YXBwaWQ9eW5ld3M7cT04NTt3PTYzMA--/http://media.zenfs.com/en/blogs/motoramic/saoutchil.jpg", desc: "1928 Mercedes-Benz 680S Saoutchik Torpedo tops Pebble Beach Concours"},
									{url: "http://l1.yimg.com/bt/api/res/1.2/9BFhivzO4XJ2P37eG5xebA--/YXBwaWQ9eW5ld3M7cT04NTt3PTYxMA--/http://media.zenfs.com/en/blogs/motoramic/front-quarter-shelby-tribute.jpg" , desc: "One-off 2013 Shelby GT500 Cobra is an 850-hp tribute to Carroll Shelby"},
												{url: "http://l.yimg.com/bt/api/res/1.2/xWaDDfMFOnmI_l4Pcm1pBg--/YXBwaWQ9eW5ld3M7cT04NTt3PTYzMA--/http://media.zenfs.com/en/blogs/motoramic/1994accordstol.jpg" , desc: "Top 10 list of most-stolen vehicles filled with foreign sedans, American pickups"}
							
				
			]
		};
	
      ac.done(data);
    }
  };
}, '0.0.1', {requires: ['mojito']});