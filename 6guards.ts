class MyResponse {
  header: string = 'my header'
  response: string = 'my response'
}

class MyError {
  header: string = 'my header'
  error: string = 'my error'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return res.header + res.response
  }
  return res.header + res.error
}

const res1 = new MyResponse()
console.log(handle(res1))
