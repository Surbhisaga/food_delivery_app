import * as Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const signupSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .error((errors) => {
      console.log(errors);
      errors.forEach((err) => {
        if (err.code === "string.empty") {
          err.message = "Email is require field";
        } else if (err.code === "string.email") {
          err.message = "please entera valid email";
        }
      });
      return errors;
    }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-z0-9@#]{3,30}$"))
    .error((errors) => {
      errors.forEach((err) => {
        if (err.code === "string.empty") {
          err.message = "password is require field";
        } else if (err.code === "string.pattern.field") {
          err.message = "password must be characters , number or @#";
        }
      });
      return errors;
    }),
  reapet_password: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .error((errors) => {
      errors.forEach((err) => {
        if (err.code === "string.empty") {
          err.message = "password is require field";
        } else if (err.code === "any.only") {
          err.message = "password and repeat peassword do not match";
        }
      });
      return errors;
    }),
});

export const signupResolver = joiResolver(signupSchema);
