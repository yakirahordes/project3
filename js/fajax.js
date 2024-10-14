class requests {
    open(method, url) {
        this.method = method;
        this.url = url;
        
    }
    send(obj=null) {
        this.obj = obj;
        this.responseText = myServer({method:this.method, url:this.url, obj:this.obj});
    }
}