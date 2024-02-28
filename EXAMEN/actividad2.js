        function elegir() {
            var lista = document.getElementsByClassName("li1");
            var entElegido = Number(document.getElementById("elegido").value - 1);
            document.getElementById("resultado").innerHTML = lista[entElegido].innerHTML;
        }
       function agregar() {
            var listado = document.getElementById("lista");
            var entNuevoElegido = document.createElement("li");
            var entNuevoIns = document.getElementById("entrante").value.toUpperCase();
            var entIns = document.createTextNode(entNuevoIns);
            entNuevoElegido.appendChild(entIns);
            listado.appendChild(entNuevoElegido);
        }
       function borrar() {
            var lista = document.getElementsByTagName("li");
            let entElegidos=Number(document.getElementById("borrar").value-1);
            let elemento=lista[entElegidos];
            document.getElementById("resEliminado").innerHTML= "ELIMINADO ES: " + elemento.innerHTML;
            elemento.parentNode.removeChild(elemento);
        }
        function elegirPP() {
            var lista = document.getElementsByClassName("li2");
            var entElegido = Number(document.getElementById("elegidoPP").value - 1);
            document.getElementById("resultadoPP").innerHTML = lista[entElegido].innerHTML;
        }
       function agregarPP() {
            var listadoPP = document.getElementById("listaPP");
            var plaNuevoElegido = document.createElement("li");
            var plaNuevoIns = document.getElementById("plato").value.toUpperCase();
            var plaIns = document.createTextNode(plaNuevoIns);
            plaNuevoElegido.appendChild(plaIns);
            listadoPP.appendChild(plaNuevoElegido);
        }
       function borrarPP() {
            var listaPP = document.getElementsByClassName("li2");
            let plaElegidos=Number(document.getElementById("borrarPP").value-1);
            let elementoPP=listaPP[plaElegidos];
            document.getElementById("resEliminadoPP").innerHTML= "ELIMINADO ES: " + elementoPP.innerHTML;
            elementoPP.parentNode.removeChild(elementoPP);
        }

        function elegirP() {
            var listaP = document.getElementsByClassName("li3");
            var posElegido = Number(document.getElementById("elegidoP").value - 1);
            document.getElementById("resultadoP").innerHTML = listaP[posElegido].innerHTML;
        }
       function agregarP() {
            var listadoP = document.getElementById("listaP");
            var posNuevoElegido = document.createElement("li");
            var posNuevoIns = document.getElementById("postres").value.toUpperCase();
            var posIns = document.createTextNode(posNuevoIns);
            posNuevoElegido.appendChild(posIns);
            listadoP.appendChild(posNuevoElegido);
        }
       function borrarP() {
            var listaP = document.getElementsByClassName("li3");
            let posElegidos=Number(document.getElementById("borrarP").value-1);
            let elementoP=listaP[posElegidos];
            document.getElementById("resEliminadoP").innerHTML= "ELIMINADO ES: " + elementoP.innerHTML;
            elementoP.parentNode.removeChild(elementoP);
        }
