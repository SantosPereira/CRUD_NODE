// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><link rel=stylesheet href=../css/style_form.css><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js integrity=sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0 crossorigin=anonymous></script><style>\r\n        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap');\r\n\r\n        div{\r\n            padding: 15px;\r\n            /* text-align: center; */\r\n        }\r\n    </style><title>Formulário</title></head><body><div class=container><h1>Cadastro</h1><form action=/alunos method=POST><div class=form-group><div class=form-group><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "></div><div class=form-group><input type=text name=nome placeholder=Nome" +
    marko_attr("value", data.nome) +
    "></div><div class=form-group><input type=email name=emai placeholder=E-mail" +
    marko_attr("value", data.email) +
    "></div><div class=form-group><select name=curso value><option value" +
    marko_attr("selected", data.curso == "") +
    " disabled></option><option value=ads" +
    marko_attr("selected", data.curso == "ads") +
    ">ADS - Análise e Desenvolvimento de Sistemas</option><option value=ipi" +
    marko_attr("selected", data.curso == "ipi") +
    ">IPI - Informática para Internet</option><option value=qualidade" +
    marko_attr("selected", data.curso == "qualidade") +
    ">Qualidade</option></select></div><div class=form-group><a href=/  type=reset class=\"btn btn-danger\">Cancelar</a> <button type=submit class=\"btn btn-success\">Salvar</button></div></div></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
