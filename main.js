// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(largo, ancho) {
  return largo * ancho;
}

console.log("Solución 1: ");
console.log(calcularAreaRectangulo(7, 4)); // Resultado: 28
console.log("-----------------------------");
console.log("Solución 2: ");
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log("-----------------------------");
console.log("Solución 3: ");
console.log(calcularAreaRectangulo(10, 2)); // Resultado: 20
/*
Pensé este ejercicio usando la fórmula básica de área (base x altura).
Bastaba con multiplicar los dos argumentos y retornarlos para despues mostrarlos por consola    .
*/


// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
    let acc = 0;
    let enPalabra = false;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== ' ' && !enPalabra) {
            enPalabra = true;
            acc++;
        } else if (cadena[i] === ' ') {
            enPalabra = false;
        }
}

    return acc;
}

console.log("Solución 1:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log("-----------------------------");
console.log("Solución 2:");
console.log(contarPalabras("El sol brilla muy fuerte hoy")); // Resultado: 6
console.log("-----------------------------");
console.log("Solución 3:");
console.log(contarPalabras("  JavaScript    es     poderoso  ")); // Resultado: 3
/*
Para este ejercicio usé un booleano llamado `enPalabra` para detectar cuándo empieza una nueva palabra:
si el carácter actual no es un espacio y no estoy ya en una palabra, entonces es el inicio de una nueva palabra, y sumo al acumulador.
Cuando hay espacios, `enPalabra` vuelve a false para permitir detectar la siguiente palabra.
Esta lógica evita contar espacios múltiples como nuevas palabras.
*/

// 3. Contar vocales en una cadena
function contarVocales(cadena) {
    let acc = 0;
    const vocales = 'aeiouAEIOU';

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            acc++;
        }
    }

    return acc;
}

console.log("Solución 1:");
console.log(contarVocales("JavaScript")); // Resultado: 3
console.log("-----------------------------");
console.log("Solución 2:");
console.log(contarVocales("Hola Mundo")); // Resultado: 4
console.log("-----------------------------");
console.log("Solución 3:");
console.log(contarVocales("Inteligencia Artificial")); // Resultado: 11
/*
Para este ejercicio, definí un string con todas las vocales tanto mayusculas y minusculas (case sensitive).
Luego recorrí la cadena carácter por carácter usando un for.
En cada vuelta, verifiqué si el carácter actual está en la lista de vocales con includes().
Si está, sumo uno al acumulador.
*/


// 4. Encontrar el palíndromo
function esPalindromo(cadena) {
    const texto = cadena.toLowerCase();
    const longitud = texto.length;

    for (let i = 0; i < Math.floor(longitud / 2); i++) {
        if (texto[i] !== texto[longitud - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log("Solución 1:");
console.log(esPalindromo("neuquen")); // true
console.log("-----------------------------");
console.log("Solución 2:");
console.log(esPalindromo("reconocer")); // true
console.log("-----------------------------");
console.log("Solución 3:");
console.log(esPalindromo("javascript")); // false

/*
Para resolver el ejercicio, pensé en comparar la palabra desde los extremos hacia el centro.
Si en algún momento una letra del inicio no coincide con su correspondiente desde el final, sé que no es palíndromo.
Hice esto usando un bucle `for` hasta la mitad del string.
Convierto todo a minúsculas primero para evitar errores por diferencia de mayúsculas.
*/

// 5. Crear un programa para convertir la edad de un perro a años humanos
function edadCanina() {
    const edad = parseInt(prompt("Ingrese la edad de su perro:"));
    const edadHumana = edad * 7;
    console.log(`Tu perro tiene ${edadHumana} años humanos`);
}

console.log("Solución 1:");
edadCanina();
console.log("-----------------------------");
console.log("Solución 2:");
edadCanina();
console.log("-----------------------------");
console.log("Solución 3:");
edadCanina();

/*
Para este ejercicio decidí pedir la edad al usuario usando prompt,
lo cual permite interactuar desde el navegador. Después multiplico por 7
para convertir la edad a años humanos. No uso return, ya que la función
solamente imprime el resultado como pide la consigna.
Además, uso parseInt para asegurarme de que el valor ingresado sea un número entero.
*/

// 6. Convertir la primera letra de cada palabra en mayúscula
function capitalizarPalabras(cadena) {
    const palabras = cadena.split(" ");
    let resultado = "";

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (palabra.length > 0) {
            resultado += palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
        }
        if (i !== palabras.length - 1) resultado += " ";
    }

    return resultado;
}

console.log("Solución 1:");
console.log(capitalizarPalabras("hola mundo desde javascript")); // "Hola Mundo Desde Javascript"
console.log("-----------------------------");
console.log("Solución 2:");
console.log(capitalizarPalabras("buenas noches a todos")); // "Buenas Noches A Todos"
console.log("-----------------------------");
console.log("Solución 3:");
console.log(capitalizarPalabras("este es el ejercicio seis")); // "Este Es El Ejercicio Seis"

/*
Para resolver este ejercicio, primero separé la cadena en palabras con split(" "),
luego usé un bucle for para recorrer cada palabra, poner en mayuscula la primera letra
y unir el resto todo en minúscula. Luego fui armando la frase completa usando un acumulador.
Al final, devolví el resultado uniendo las palabras ya transformadas.
Usé toUpperCase() y slice() para manipular las letras.
*/



// 7. Generar los primeros N números de la sucesión de Fibonacci
function fibonacci(n) {
    const resultado = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        resultado.push(a);
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }

    return resultado;
}

console.log("Solución 1:");
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log("-----------------------------");
console.log("Solución 2:");
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log("-----------------------------");
console.log("Solución 3:");
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/*
Para resolver este ejercicio, cada número siguiente es la suma de los dos anteriores. Por eso usé dos variables (a y b)
para llevar el control de los dos últimos valores. En cada iteración del for, agrego el valor actual (a) al array y actualizo a y b.
Así voy generando la sucesión hasta alcanzar la cantidad n solicitada.
*/


// 8. Lista de Productos
const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
    { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
    { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
    { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

// 1. Mostrar nombre y precio de cada producto
console.log("Solución 1:");
productos.forEach(p => {
    console.log(`Producto: ${p.nombre}, Precio: $${p.precio}`);
});
console.log("///////////////////////////");

// 2. Crear un array con solo los nombres
console.log("Solución 2:");
const nombres = productos.map(p => p.nombre);
console.log(nombres);
console.log("///////////////////////////");

// 3. Filtrar productos electrónicos con stock mayor a 20
console.log("Solución 3:");
const electronicosConStock = productos.filter(p => p.categoria === 'electrónica' && p.stock > 20);
console.log(electronicosConStock);
console.log("///////////////////////////");

// 4. Encontrar el producto con id 3
console.log("Solución 4:");
const productoId3 = productos.find(p => p.id === 3);
console.log(productoId3);
console.log("///////////////////////////");

// 5. Calcular valor total del inventario (precio * stock)
console.log("Solución 5:");
const totalInventario = productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
console.log(`Valor total del inventario: $${totalInventario}`);
console.log("///////////////////////////");

/*
Para resolver este ejercicio usé métodos de array modernos:
- `forEach` para recorrer cada producto e imprimir nombre y precio.
- `map` para transformar el array original en uno solo con nombres.
- `filter` para obtener los electrónicos con stock mayor a 20, usando condiciones lógicas.
- `find` para buscar por ID exacto.
- `reduce` para sumar el valor total multiplicando precio por stock, acumulando en una variable.
*/



// 9. Estudiantes y Calificaciones
const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
    { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
    { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
    { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

// 1. Mostrar nombre y edad de cada estudiante
console.log("Solución 1:");
estudiantes.forEach(est => {
    console.log(`Nombre: ${est.nombre}, Edad: ${est.edad}`);
});
console.log("///////////////////////////");

// 2. Crear array de objetos con nombre y promedio
console.log("Solución 2:");
const promedio = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
const estudiantesPromedios = estudiantes.map(est => ({
    nombre: est.nombre,
    promedio: promedio(est.calificaciones)
}));
console.log(estudiantesPromedios);
console.log("///////////////////////////");

// 3. Obtener estudiantes con promedio > 7.5
console.log("Solución 3:");
const destacados = estudiantesPromedios.filter(e => e.promedio > 7.5);
console.log(destacados);
console.log("///////////////////////////");

// 4. Encontrar estudiante llamado 'María'
console.log("Solución 4:");
const maria = estudiantes.find(est => est.nombre === 'María');
console.log(maria);
console.log("///////////////////////////");

// 5. Calcular edad promedio de los estudiantes
console.log("Solución 5:");
const edadPromedio = estudiantes.reduce((acc, est) => acc + est.edad, 0) / estudiantes.length;
console.log(`Edad promedio: ${edadPromedio}`);
console.log("///////////////////////////");

/*
Este ejercicio lo abordé separando cada operación con arrays. Para mostrar nombre y edad usé `forEach`.
Para el promedio de calificaciones hice una función auxiliar `promedio
luego usé `map` para crear un array con nombre y promedio de cada estudiante.
Después filtré los que tienen promedio mayor a 7.5.
Con `find` busqué directamente a "María".
Finalmente, para la edad promedio, sumé todas las edades con `reduce`y dividí por la cantidad de estudiantes.
*/



// 10. Películas
const peliculas = [
    { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
    { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
    { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
    { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
    { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

// 1. Mostrar título y año de cada película
console.log("Solución 1:");
peliculas.forEach(p => {
    console.log(`Título: ${p.titulo}, Año: ${p.año}`);
});
console.log("///////////////////////////");

// 2. Crear array de títulos en mayúsculas
console.log("Solución 2:");
const titulosMayus = peliculas.map(p => p.titulo.toUpperCase());
console.log(titulosMayus);
console.log("///////////////////////////");

// 3. Obtener películas de drama con rating mayor a 8.5
console.log("Solución 3:");
const dramasTop = peliculas.filter(p => p.genero === 'drama' && p.rating > 8.5);
console.log(dramasTop);
console.log("///////////////////////////");

// 4. Encontrar película estrenada en 2014
console.log("Solución 4:");
const peli2014 = peliculas.find(p => p.año === 2014);
console.log(peli2014);
console.log("///////////////////////////");

// 5. Calcular la duración total de todas las películas
console.log("Solución 5:");
const duracionTotal = peliculas.reduce((acc, p) => acc + p.duracion, 0);
console.log(`Duración total: ${duracionTotal} minutos`);
console.log("///////////////////////////");

/*
Usé `forEach` para mostrar datos básicos,`map` para transformar los títulos a mayúsculas, y `filter` para aplicar condiciones sobre el género y rating.
También practiqué `find` buscando por año, y `reduce` para sumar la duración de todas las películas.
Organizar el código con nombres descriptivos y console.log claros me ayudó a verificar cada paso sin errores.
En general, fue muy útil para afianzar la manipulación de colecciones en JavaScript.
*/
