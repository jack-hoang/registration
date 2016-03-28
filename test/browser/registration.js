module.exports = {
  'User Registration Form' : function (client) {
    client
      .url('http://localhost:3000/')
      .pause(1000);

    // expect element to be present in 1000ms
    client.expect.element('body').to.be.present.before(1000);

    client.assert.containsText('#app', 'User Registration Form');

    client.expect.element('#userName').to.be.present;
    client.expect.element('#userName').to.be.an('input');

    client.expect.element('#email').to.be.present;
    client.expect.element('#email').to.be.an('input');

    client.expect.element('button[type=submit]').to.be.present;
    client.expect.element('button[type=submit]').text.to.equal('Register');

    client.end();
  },

  'Submit User Registration Form' : function(client) {
    client
      .url('http://localhost:3000/')
      .pause(1000);

    client.setValue('#userName', 'John Doe');
    client.setValue('#email', 'john.doe@example.com');
    client.click('button[type=submit]');
    client.pause(1000);

    client.assert.containsText('#app', 'Verify User information');

    client.expect.element('#userName').to.be.present;
    client.expect.element('#userName').to.be.a('div');

    client.expect.element('#email').to.be.present;
    client.expect.element('#email').to.be.a('div');

    client.expect.element('button[id=edit]').to.be.present;
    client.expect.element('button[id=confirm]').to.be.present;

    client.end();
  }

}
