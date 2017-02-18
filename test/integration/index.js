import "isomorphic-fetch";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.should();
chai.use(chaiAsPromised);

const getValueFromEndpoint = endpoint =>
  fetch('http://localhost:3000/api/' + (endpoint || ''))
    .then(res => res.text());

describe("API endpoints integration", () => {
  describe("root route returns expected value", () =>
    it("should connect and receive a valid response from backend root route", () =>
      getValueFromEndpoint().should.eventually.equal('Hello, world!')));

  describe("parameter route eventually returns expected value", () =>
    it("should connect and eventually receive a valid response from backend route accepting parameter value", () =>
      getValueFromEndpoint('500').should.eventually.equal('"Delayed response with received value: 500ms"')));
});