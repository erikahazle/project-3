var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/babypassdb';

module.exports = {
  'url': mongoUri
};
