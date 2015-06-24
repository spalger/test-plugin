module.exports = function (kibana) {
  return new kibana.Plugin({
    exports: {
      app: {
        title: 'Test Plugin App',
        icon: 'http://placebacon.net/400/300',

        main: 'plugins/test-plugin/app'
      }
    }
  });
};