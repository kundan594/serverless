module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Congratulations, WELCOME to the serverless world",
        },
        null,
        2
      ),
    };
  };