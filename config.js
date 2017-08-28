export default new function() {
	const config = this;

	this.dev = true;
	this.ssl = false;
	this.port = "3000";
	this.staticFolder = "/dist"
	this.type = this.ssl ? "https://" : "http://";
	this.domain = this.type + (this.dev ? "localhost:" + this.port : "film.levelupworlds.com");
	this.staticURL = this.domain + this.staticFolder;
	this.host = this.dev ? "185.22.232.114" : "127.0.0.1";
	this.hosturl = this.type + this.host;
	this.sitename = "Levelup Film";
	this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmaWxtLmxldmVsdXB3b3JsZHMuY29tIiwiaWF0IjoxNTAzODQwNzgzLCJleHAiOjE1MzUzNzY3ODMsImF1ZCI6ImZpbG0ubGV2ZWx1cHdvcmxkcy5jb20iLCJzdWIiOiI3MzI4NTc2MSIsImFwcGxpY2F0aW9uX2lkIjoiNzMyODU3NjEifQ.8TCUlRX7T8c89RsuuWzMbnXUg0HAgSNXAEBrYPpL5J0";
	this.mail = new function() {
		this.port = "3080";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
		this.who = "Марина из Levelup Film";
		this.to = "beatzhitta@gmail.com";
	}
};
