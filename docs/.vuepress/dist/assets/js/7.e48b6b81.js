(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(a,s,e){"use strict";e.r(s);var t=e(0),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("O GraphQL no .NET Core é um pouco diferente da implementação do JavaScript. Mas não tão diferente.")]),a._v(" "),e("p",[a._v("Os seguintes conceitos são semelhantes")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Esquema")]),a._v(": ainda temos a ideia de um esquema. Algo que especifica quais entidades temos, o que podemos consultar, o que podemos fazer mutar e assim por diante")]),a._v(" "),e("li",[e("strong",[a._v("Resolvedor")]),a._v(": ainda temos o conceito de um resolvedor, que é uma parte do código que deve ser invocada quando uma consulta ou mutação é feita.")]),a._v(" "),e("li",[e("strong",[a._v("GQL")]),a._v(": ainda temos a linguagem de consulta GraphQL para definir nosso esquema e também a usamos para construir consultas e mutações para tentar ler/gravar dados")])]),a._v(" "),e("blockquote",[e("p",[a._v("Então, o que é diferente?")])]),a._v(" "),e("p",[a._v("A diferença está na forma como resolvemos uma consulta. A primeira ação que efetuamos ao resolver uma consulta em GraphQL é garantir que o recurso que chamamos exista. Se ele existir, invocaremos a função correspondente. Abaixo está o mesmo pseudocódigo que explica a diferença na abordagem")]),a._v(" "),e("h2",{attrs:{id:"abordagem-do-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abordagem-do-js"}},[a._v("#")]),a._v(" Abordagem do JS")]),a._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// JavaScript")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" resolverObject "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("hello")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("resolver")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("No GQL, solicitaríamos o recurso "),e("code",[a._v("hello")]),a._v(". O núcleo interno encontraria o objeto do resolvedor e invocaria a função "),e("code",[a._v("resolver()")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"abordagem-do-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abordagem-do-c"}},[a._v("#")]),a._v(" Abordagem do C#")]),a._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// C#")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Query")]),a._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GraphQLMetadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetHello")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"World"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("p",[a._v("Acima, temos a abordagem do C# em que temos uma classe "),e("code",[a._v("Query")]),a._v(" e um método que é decorado com uma classe de atributo "),e("code",[a._v("GraphQLMetadata")]),a._v(" e um parâmetro "),e("code",[a._v("hello")]),a._v(" que é o recurso que ele resolve. Invocar nosso método "),e("code",[a._v("GetHello()")]),a._v(" nos forneceria a resposta que buscamos.")]),a._v(" "),e("p",[a._v("Essa é uma explicação muito breve de como o JavaScript e o C# diferem.")])])}),[],!1,null,null,null);s.default=n.exports}}]);