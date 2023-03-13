module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Funcionou !!!",
        input: event,
      },
      null,
      2
    ),
  };
};
