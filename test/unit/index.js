const chai = require('chai');

const chaiHttp = require('chai-http');

const expect = require('chai').expect;

const url= 'http://localhost:3000/users';

chai.use(chaiHttp);


describe('get active users  : ',()=>{  
     it('should get active users', (done) => {
        chai.request(url)
          .get('/')
          .end( function(err,res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
          });
      });
    });
    