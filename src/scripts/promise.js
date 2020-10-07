const promise = value =>
  new Promise((res, rej) => {
    try {
      res(value)
    } catch (error) {
      rej(error)
    }
  })

  export default promise