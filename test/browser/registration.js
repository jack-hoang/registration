module.exports = {
  'User Registration Form' : function (client) {
    client
      .url('http://localhost:3000/')
      .pause(1000);

    // expect element to be present in 1000ms
    client.expect.element('body').to.be.present.before(1000);

    client.assert.containsText("#app", "User Registration Form");

    client.end();
  }
}
