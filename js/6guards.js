var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'my header';
        this.response = 'my response';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'my header';
        this.error = 'my error';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return res.header + res.response;
    }
    return res.header + res.error;
}
var res1 = new MyResponse();
console.log(handle(res1));
