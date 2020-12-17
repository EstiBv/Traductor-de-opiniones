# `Traductor de opiniones`

`Realizado durante en el proceso de aprendizaje de React, con la integración de eventos, concretamente en la aplicación de Lifting (para pasar datos de componentes hijas a madres) `

---

Ejercicio creado con [React-js](https://reactjs.org/).

---

A partir de un formulario simple con un textarea se escribe una frase y en un párrafo a parte se refleja el resultado de la traducción.

El componente formulario (componente TextInput,)
simplemente se encarga de recoger los cambios de la usuaria y enviarlo al componente madre (componente App) que los guarda en un atributo y fuerza el repintado.
El componente del párrafo (componente Translator) recoge el texto que le pasan por props, lo traduce y muestra en un párrafo.

---

![FireShot Capture 148 - Traductor de opiniones - estibv github io](https://user-images.githubusercontent.com/70572595/102503853-718d2880-4080-11eb-9e36-fd25fb81faf6.png)
![FireShot Capture 153 - Traductor de opiniones - estibv github io](https://user-images.githubusercontent.com/70572595/102503862-7356ec00-4080-11eb-9987-276027c78fbf.png)

### `Arrancar proyecto`

```
$ npm install create-react-app
$ npm start
```

---

Puedes ver el resultado en el enlace de la sección **_About_** del proyecto o pinchar aquí [Traductor de opiniones](https://estibv.github.io/Traductor-de-opiniones/#/)
