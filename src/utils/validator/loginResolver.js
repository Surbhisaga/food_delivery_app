import * as Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }).message("Please enter valid email"),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-z0-9@#]{3,30}$"))
    .message("Please enter valid password")
});

export const loginResolver = joiResolver(loginSchema);
