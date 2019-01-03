const app = require('./app');
const port = 3000;
const db = require('./helpers/Connection');
const constant = require('./helpers/Constants');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db.connect(constant.DB_SERVER, function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.',err)
        process.exit(1)
    } else {
        app.listen(port, () => console.log('Server listening on port '+port+'!'));
    }
});
