module.exports = {

  'User Registration Form' : function (client) {
    client
      .url('http://localhost:3000/')
      .pause(1000);

    // expect element to be present in 1000ms
    client.expect.element('body').to.be.present.before(1000);

    client.expect.element('#title').text.to.contain('User Registration Form');

    client.expect.element('#userName').to.be.present;
    client.expect.element('#userName').to.be.an('input');

    client.expect.element('#email').to.be.present;
    client.expect.element('#email').to.be.an('input');

    client.expect.element('button').to.be.present;
    client.expect.element('button').text.to.equal('Next');

    client.end();
  },

  'Clicking Next button' : function(client) {
    client
      .url('http://localhost:3000/')
      .pause(1000);

    client.setValue('#userName', 'John Doe');
    client.setValue('#email', 'john.doe@example.com');
    client.click('button');
    client.pause(1000);

    client.expect.element('#title').text.to.contain('Verify Registration Information');

    client.expect.element('#userName').to.be.present;
    client.expect.element('#userName').to.be.a('div');

    client.expect.element('#email').to.be.present;
    client.expect.element('#email').to.be.a('div');

    client.expect.element('button[id=edit]').to.be.present;
    client.expect.element('button[id=register]').to.be.present;

    client.end();
  },

  'Editing registration info' : function(client) {
    client
      .url('http://localhost:3000/')
      .pause(1000);

    client.setValue('#userName', 'John Doe');
    client.setValue('#email', 'john.doe@example.com');
    client.click('button');
    client.pause(1000);

    client.expect.element('#title').text.to.contain('Verify Registration Information');

    client.expect.element('button[id=edit]').to.be.present;
    client.click('button[id=edit]');
    client.pause(1000);

    client.expect.element('#title').text.to.contain('User Registration Form');

    client.end();
  }

}
