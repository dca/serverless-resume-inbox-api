'use strict';

module.exports.hello = async (event) => {
  let body;

  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'body must be json'
      }),
    };
  }

  if (!body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'body must be json'
      }),
    };
  }

  const resume = {
    name: body.name,
    job: body.job,
    phone: body.phone,
    email: body.email,
    resumeUrl: body.resumeUrl,
    IP: event.requestContext.identity.sourceIp,
  };

  return {
    statusCode: 200,
    body: JSON.stringify({
      resume,
      body,
      input: event,
    }),
  };
};
