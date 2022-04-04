# Mind +

![alt Mind +](https://media4.giphy.com/media/fsbKeqwwkmE6LodM3T/giphy.gif?cid=ecf05e47swya8ihdvhllhj95v40x4oduqf9fopovvyd0r7dg&rid=giphy.gif&ct=g)



## 
Esta aplicacion esta enfocada en darle una visión realista al usuario acerca de su avance psicologico cuando esta inmerso en un momento de la vida en el cual su inteligencia emocional se ve deteriorada o inestable por diversas causas, permitira que de manera individual y en respuesta a sus experiencias en el dia a dia, pueda contrastar los cambios que se presentan en el mediano plazo, de esta manera atenderemos un proceso que en la gran mayoria de los pacientes se pasa alto, el hecho de que el avance para la mejora emocional si se esta llevando a cabo, pero no se logra percibir.


#
## Functional Description

 - Opcion de escribir una nota diaria referente a tu estado emocional o a como a pasado tu dia. 

 - Recibir una frase motivadora todos los dias.

 - Verificar tu progreso en un periodo de tiempo determinado.

 - Encontrar ideas acerca de ejercicios que ayudaran a que tu proceso sea mas optimo.

 - Encontrar ayuda con enlaces a centros especializados.

 - Tener acceso a notas guardadas despues de un tiempo determinado.

### Use Cases

![alt Main Views](use-cases.png)

### Flow Chart

![alt Main Views](flowChart.png)


#### User Interface (UI)
##### Main Views

![alt Main Views](menu.png)


## Technical Description

### Blocks

![alt Main Views](blocks.png)

### Data Model

#### Schemas

user
- name (string, required, min length 2)
- username (string, required, min length)
- email (string, required, unique)
- password (string, required, min length 8)
- notes ([note])

note
- text (String, required, min length 10)
- mood (String, required)
- date (Date, required)

quotes
- text (String, required)

#### ER Diagram

![alt Main Views](SchemasDiagram.png)