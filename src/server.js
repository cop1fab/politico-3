/* eslint-disable eol-last */
import app from './app';

const port = process.env.PORT || 9090;

app.listen(port);

// eslint-disable-next-line no-console
console.log('Server started successfully! app running on port ', port);