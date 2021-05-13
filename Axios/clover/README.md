## Axios
- Sometimes I need to retrieve data from an external API so that it can be available for my webpage
- To Do This I must use the Fetch API but sometimes the built-in fetch API in JS has limitations this is why I use Axios
- Axios can take care of the heavy duty for me because it was created to handle http reqs and resps
- Axios has the power to perform multiple http requests
- i.e. It enables me to make HTTP requests to external resources
- Promise based ∴ uses the format async await


#### Axios making a GET Request to A resource
```js
axios.get('http://localhost:3333/items')
```

#### I can even use Axios when a successful Lifecycle Method is fulfilled aka componentDidMount
```js
componentDidMount() {
  axios.get('http://localhost:3333/elems')
    .then(res => this.setState({elems: res.data}))
    .catch(err => console.log(err))
}
```

#### As you can see just make a call to Axios and it will get the job done for you
