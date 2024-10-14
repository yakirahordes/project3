class requests {

    constructor() {
        this._onload = undefined
    }
    
    open(method, url) {
        this.method = method;
        this.url = url;
        
    }
    send(obj=null) {
        this.obj = obj;
        
        this.responseText = myServer({method:this.method, url:this.url, obj:this.obj});
        debugger

        if (this._onload) {
            this._onload.call(this)
        }
        console.log('this.responseText: ', this.responseText);

    }

    set onload(f) {
        this._onload = f
    }   

}