function enableCors(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // First parameter is the header we wanna set.
  // Second parameter is the value of that header.
  // * means any other page will be allowed to send requests to this server.
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  // OPTIONS is an automatically sent request which the browser will send when we use
  // Ajax requests where it basically evaluates whether the request it really wanna send
  // will be allowed by the server.
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  // This controls which headers might be added by the client that sends a request.
  // in createTodo() function in todos.js file of decoupled front end project,
  // we set Content-Type header. So we wanna include it here.

  // Now This headers will unlock this API and now we can use the data sent by
  // this API in other servers. So we can use the data send by this server
  // inside the decoupled front end project.

  next();
}

module.exports = enableCors;
