var chai = require ('chai');
var chaiHttp = require ('chai-http');
var server = require ('../app2');
var should = chai.should ();

chai.use (chaiHttp);

describe('Users', function() 
{
  it ('should list ALL users on /v1/users GET', function (done) 
  {
      chai.request (server)
        .get ('/v1/users')
        .end (function (err, res)
        {
          res.should.have.status (200);
          res.should.be.json;
          res.body.should.be.a ('array');
          done ();
        });
  });
  it('should list a SINGLE user on /v1/users/<id> GET');
  it('should add a SINGLE blob on /v1/users POST');
  it('should update a SINGLE blob on /v1/users/<id> PUT');
  it('should delete a SINGLE blob on /v1/users/<id> DELETE');
});

