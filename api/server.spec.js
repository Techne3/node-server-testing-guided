const request = require('supertest')

const server = require('./server')

it('should set db environment to testing', function(){
    expect(process.env.DB_ENV).toBe('testing')
})

describe('server', function() {
    describe('GET /' , function() {
        // run server
        it('should return 200 OK', function(){
            //make a get requrest to /
            // must add 'return' so that it knows to wait *****
                return request(server)
                .get('/')
                .then(res => {
                    // see the http of response is 200
                    expect(res.status).toBe(200)
                })
        })

        it('should return JSON formatted response', function(){
                return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('should return response an api property with the value "UP" inside the body ', function(){
                return request(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({api: 'up'})
                    expect(res.body.api).toBe('up')
                })
        })




    })
})


// the endpoint returns the correct http status code based on input 
// the endpoint returns the right data format (json)
// the endpoint returns the right data in the body based on input