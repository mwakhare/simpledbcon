var mocha = require('mocha'),
	chai = require('chai');

var tbleUserModule = require ("../tblUserModule");

var should = chai.should();

describe('User Model', function(){
	describe('Function: tblUserGetOne()', function(){
		it('should have all properties and return correct id', function( done )
		{
			tbleUserModule.tblUserGetOne (1, function(err,rows,fields){
				if( !err ) {
					rows.should.be.a('array');
					rows[0].should.have.property('id');
					//rows[0].should.have.property('name');
					rows[0].should.have.property('id').equal(1);
					done();
				}
			});
		});
	});
});


