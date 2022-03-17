import joi from "joi";

const schema = joi.object({
  url: joi.string().uri().required(),
});

export default schema;
