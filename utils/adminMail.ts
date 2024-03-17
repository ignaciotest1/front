import handlebars from "handlebars";
import { adminTemplate } from "./template/admin";

export function compileAdminTemplate() {
  const template = handlebars.compile(adminTemplate);
  const htmlBody = template();

  return htmlBody;
}
