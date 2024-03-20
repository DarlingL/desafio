"use strict";

  // Importaçao frameworks
  const request = require('supertest');
  const expect = require('chai').expect;
  var joiAssert = require('joi-assert');


  //Schema
  const {
    schemaAPI,
  } = require("../schemas/schema");

  // Config
  const request_timeout = 200000;
  const URL = process.env.NODE_ENV;

  // Paths
  const PATH_API = "/api"

describe("Desafio ", function() {
    it("Retorno da API randomuser.me ",function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(PATH_API)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
        expect(res.status).to.be.eql(200);
        joiAssert(res.body, schemaAPI);
        done(err);
        });
    });
})
