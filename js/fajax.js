class requests {
    constructor() {
        this._onload = undefined
    } 
    open(method, url) {
        this.method = method;
        this.url = url;
    }
    send(obj = null) {
        this.obj = obj;
        this.responseText = myServer({ method: this.method, url: this.url, obj: this.obj });

        if (this._onload) {
            this._onload.call(this)
        }
    }
    set onload(f) {
        this._onload = f
    }
}