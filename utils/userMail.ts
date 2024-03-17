import handlebars from "handlebars";
import { userTemplate } from "./template/user";

export function compileUserTemplate(user: string) {
  const template = handlebars.compile(userTemplate);
  const htmlBody = template({
    user: user,
  });

  return htmlBody;
}
