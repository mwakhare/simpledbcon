var mocha = require('mocha'),
	chai = require('chai');
//var chaiHttp = require ('chai-http');

var server = require ('../app2');
var tbleUserModule = require ("../tblUserModule");

var should = chai.should();

//chai.use (chaiHttp);

describe('User Table Model', function(){
	describe('Function: tblUserGetOne()', function(){
		it('should have all properties and return correct id', function( done )
		{
			tbleUserModule.tblUserGetOne (3, function(err,rows,fields){
				if( !err ) {
					rows.should.be.a('array');
					rows[0].should.have.property('id');
					rows[0].should.have.property('user_info');
					rows[0].should.have.property('id').equal(3);
					done ();
				}
			});
		});
	});
});

describe('User Table Model', function(){
	describe('Function: tblUserGetAll ()', function(){
		it('should have all properties and return all User records', function( done )
		{
			tbleUserModule.tblUserGetAll (function(err, rows, fields){
				if( !err ) {
					rows.should.be.a('array');
					
					rows[0].should.have.property('id');
					rows[0].should.have.property('user_info');
					
					done ();
				}
			});
		});
	});
});

describe('User Table Model', function(){
	describe('Function: tblUserGetAll ()', function(){
		it('this is pending test case');
	});
});

// describe('Users', function() 
// {
//   it ('should list ALL users on /users GET', function (done) 
//   {
//       chai.request (server)
//         .get('/users')
//         .end (function (err, res)
//         {
//           res.should.have.status (200);
//           done ();
//         });
//   });
//   it('should list a SINGLE user on /users/<id> GET');
//   it('should add a SINGLE blob on /users POST');
//   it('should update a SINGLE blob on /users/<id> PUT');
//   it('should delete a SINGLE blob on /users/<id> DELETE');
// });



