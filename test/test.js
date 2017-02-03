var mocha = require('mocha'),
	chai = require('chai');

var tbleUserModule = require ("../tblUserModule");

var should = chai.should();

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




