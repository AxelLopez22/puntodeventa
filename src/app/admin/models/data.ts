import { Categorias, Cliente, Products } from "./models";

export const categorias: Categorias[] = [
    {
        idCategoria: 1,
        nombre: "Combos Personales",
        productos: [
            {
                id: 1,
                nombre: "Combo Economico",
                descripcion: "1 Piezas de pollo (Muslo o pierna), Ensalada, Arroz, Pan,  Coca-cola",
                img: "combo-especial.png",
                idCategoria : 1,
                precio: 4.01
            },
            {
                id: 2,
                nombre: "Combo Normal",
                descripcion: "2 Piezas de pollo, Ensalada, Pan,  Coca-cola",
                img: "combo-especial.png",
                idCategoria : 1,
                precio: 5.80
            },
            {
                id: 3,
                nombre: "Combo Especial",
                descripcion: "2 Piezas de pollo, Ensalada, Papas Fritas, Pan,  Coca-cola",
                img: "combo-especial.png",
                idCategoria : 1,
                precio: 5.91
            },
            {
                id: 4,
                nombre: "Combo Super",
                descripcion: "3 Piezas de pollo, Ensalada, Papas Fritas, Pan,  Coca-cola",
                img: "combo-super.png",
                idCategoria : 1,
                precio: 7.01
            }
        ]
    },
    {
        idCategoria: 2,
        nombre: "Combos Familiares",
        productos: [
            {
                id: 5,
                nombre: "Combo Familiar",
                descripcion: "6 Piezas de pollo, 2 Ensalada, 2 Papas Fritas, 2 Panes, 2 Coca-cola",
                img: "combo-familiar.png",
                idCategoria : 2,
                precio: 14.64
            },
            {
                id: 6,
                nombre: "Combo Gran Familiar",
                descripcion: "6 Piezas de pollo, 3 Ensalada, 3 Papas Fritas, 3 Panes, 3 Coca-cola",
                img: "gran-familiar.png",
                idCategoria : 2,
                precio: 18
            },
            {
                id: 7,
                nombre: "Combo Super Familar",
                descripcion: "12 Piezas de pollo, 2 Ensalada, 2 Papas Fritas, 2 Panes, 2 Coca-cola",
                img: "super-familiar.png",
                idCategoria : 2,
                precio: 27.12
            }
        ]
    },
    {
        idCategoria: 3,
        nombre: "Lights",
        productos: [
            {
                id: 8,
                nombre: "1/4 Tip Top Asado",
                descripcion: "1 Orden de frijoles molidos, 1 Orden de cebollas encurtidas o ensalada criolla, 2 Tortillas, 1 Coca-cola",
                img: "asado-1-cuarto.png",
                idCategoria : 3,
                precio: 5.92
            },
            {
                id: 9,
                nombre: "1/2 Tip Top Asado",
                descripcion: "1 Orden de frijoles molidos, 1 Orden de cebollas encurtidas o ensalada criolla, 3 Tortillas, 1 Coca-cola",
                img: "asado-1-medio.png",
                idCategoria : 3,
                precio: 7.05
            },
            {
                id: 10,
                nombre: "Tip Top Asado Entero",
                descripcion: "3 Orden de frijoles molidos, 3 Orden de cebollas encurtidas o ensalada criolla, 6 Tortillas, 3 Coca-cola",
                img: "asado-entero.png",
                idCategoria : 3,
                precio: 13.60
            },
            {
                id: 11,
                nombre: "Tip Top Tender",
                descripcion: "1 Orden de frijoles molidos, 1 Orden de cebollas encurtidas o ensalada criolla, 2 Tortillas, 1 Coca-cola",
                img: "ensalada.png",
                idCategoria : 3,
                precio: 6.46
            },
            {
                id: 12,
                nombre: "Ensalada Tip Top",
                descripcion: "Ensalada de lechuga con filete 100% Pechuga Tip Top, Aderezo Favorito, 1 Coca-cola",
                img: "ensalada.png",
                idCategoria : 3,
                precio: 6.46
            }
        ]
    },
    {
        idCategoria: 4,
        nombre: "Para Disfrutar",
        productos: [
            {
                id: 13,
                nombre: "Enrollado Tip Top",
                descripcion: "1 Enrollado Tip Top, Papas Fritas, 1 Coca-cola",
                img: "enrollado.png",
                idCategoria : 4,
                precio: 5.10
            },
            {
                id: 14,
                nombre: "Burrito Tip Top",
                descripcion: "1 Burrito Tip Top, Papas Fritas, 1 Coca-cola",
                img: "burrito.png",
                idCategoria : 4,
                precio: 4.81
            },
            {
                id: 15,
                nombre: "Surtido Veracruz",
                descripcion: "6 Piezas de alitas picantes, 5 Tostones, 5 Daditos de queso, 1 Ensalada Criolla, 3 Salchichas Parrilleras, 1 Coca-cola",
                img: "surtido.png",
                idCategoria : 4,
                precio: 10.87
            },
            {
                id: 16,
                nombre: "Tip Burger Tender",
                descripcion: "Filete a la plancha, Papas Fritas, 1 Coca-cola",
                img: "burger.png",
                idCategoria : 4,
                precio: 6.33
            },
            {
                id: 17,
                nombre: "Tip Burger Clasica",
                descripcion: "Torta de pollo, Papas Fritas, 1 Coca-cola",
                img: "burger.png",
                idCategoria : 4,
                precio: 5.50
            },
            {
                id: 18,
                nombre: "Tip Sandwich",
                descripcion: "Filete empanizado, Papas Fritas, 1 Coca-cola",
                img: "sandwich.png",
                idCategoria : 4,
                precio: 6.05
            }
        ]
    },
    {
        idCategoria: 5,
        nombre: "Combos Infantiles",
        productos: [
            {
                id: 19,
                nombre: "Tradicional 1",
                descripcion: "1 Pieza de pollo Tip Top(Muslo o pierna), Papas Fritas, Muffin, Coca-cola",
                img: "tradicional1.png",
                idCategoria : 5,
                precio: 4.95
            },
            {
                id: 20,
                nombre: "Tradicional 2",
                descripcion: "1 Pieza de pollo Tip Top(Muslo o pierna), Ensalada, Muffin, Coca-cola",
                img: "tradicional2.png",
                idCategoria : 5,
                precio: 4.95
            },
            {
                id: 21,
                nombre: "Fajitas",
                descripcion: "4 Fajitas, Papas Fritas, Muffin, Coca-cola",
                img: "fajitas.png",
                idCategoria : 5,
                precio: 5.91
            },
            {
                id: 22,
                nombre: "Nuggets",
                descripcion: "8 Nuggets, Papas Fritas, Muffin, Coca-cola",
                img: "nuggets.png",
                idCategoria : 5,
                precio: 6.05
            }
        ]
    },
    {
        idCategoria: 6,
        nombre: "Postres",
        productos: [
            {
                id: 23,
                nombre: "Muffin Vainilla",
                descripcion: "Muffin Vainilla(Relleno de dulce de leche)",
                img: "muffin-vainilla.png",
                idCategoria : 6,
                precio: 1.38
            },
            {
                id: 24,
                nombre: "Muffin Chocolate",
                descripcion: "Muffin Chocolate(Relleno de dulce de leche)",
                img: "muffin-chocolate.png",
                idCategoria : 6,
                precio: 1.38
            },
            {
                id: 25,
                nombre: "Tacita de Helado",
                descripcion: "Tacita de Helado",
                img: "tres-leches.png",
                idCategoria : 6,
                precio: 1.65
            },
            {
                id: 26,
                nombre: "Tres Leches",
                descripcion: "Tres Leches",
                img: "tres-leches.png",
                idCategoria : 6,
                precio: 1.65
            },
            {
                id: 27,
                nombre: "Cuatro Leches",
                descripcion: "Cuatro Leches",
                img: "cuatro-leches.png",
                idCategoria : 6,
                precio: 1.65
            }
        ]
    },
    {
        idCategoria: 7,
        nombre: "Extras",
        productos: [
            {
                id: 28,
                nombre: "Papas Cheddar",
                descripcion: "Papas Cheddar",
                img: "papitas.png",
                idCategoria : 7,
                precio: 50
            },
            {
                id: 29,
                nombre: "Papas Fritas",
                descripcion: "Papas Fritas",
                img: "papitas.png",
                idCategoria : 7,
                precio: 1.71
            }, 
            {
                id: 30,
                nombre: "Daditos de queso frito",
                descripcion: "Daditos de queso frito",
                img: "daditos-queso.png",
                idCategoria : 7,
                precio: 2.02
            },
            {
                id: 31,
                nombre: "Tostones",
                descripcion: "Tostones",
                img: "tostones.png",
                idCategoria : 7,
                precio: 2.51
            },
            {
                id: 32,
                nombre: "Tortillas fritas",
                descripcion: "Tortillas fritas",
                img: "tortillas-fritas.png",
                idCategoria : 7,
                precio: 1.11
            },
            {
                id: 33,
                nombre: "Frijoles Molidos",
                descripcion: "Frijoles Molidos",
                img: "frijoles.png",
                idCategoria : 7,
                precio: 1.02
            },
            {
                id: 34,
                nombre: "Ensalada Criolla",
                descripcion: "Ensalada Criolla",
                img: "criolla.png",
                idCategoria : 7,
                precio: 1.02
            },
            {
                id: 35,
                nombre: "Arroz",
                descripcion: "Arroz",
                img: "arroz.png",
                idCategoria : 7,
                precio: 0.80
            },
            {
                id: 36,
                nombre: "Ensalada",
                descripcion: "Ensalada de repollo",
                img: "ensalada-repollo.png",
                idCategoria : 7,
                precio: 1.02
            },
            {
                id: 37,
                nombre: "Cebollitas",
                descripcion: "Cebollitas Dulces y Picantes",
                img: "cebollitas.png",
                idCategoria : 7,
                precio: 1.02
            },
            {
                id: 38,
                nombre: "Coca-cola",
                descripcion: "Coca-cola 2 LTS",
                img: "coca.png",
                idCategoria : 7,
                precio: 2.32
            }
        ]
    }
]

export const productos: Products[] = [
    {
        id: 1,
        nombre: "Combo Economico",
        descripcion: "1 Piezas de pollo (Muslo o pierna), Ensalada, Arroz, Pan,  Coca-cola",
        img: "combo-especial.png",
        idCategoria : 1,
        precio: 4.01
    },
    {
        id: 2,
        nombre: "Combo Normal",
        descripcion: "2 Piezas de pollo, Ensalada, Pan,  Coca-cola",
        img: "combo-especial.png",
        idCategoria : 1,
        precio: 5.80
    },
    {
        id: 3,
        nombre: "Combo Especial",
        descripcion: "2 Piezas de pollo, Ensalada, Papas Fritas, Pan,  Coca-cola",
        img: "combo-especial.png",
        idCategoria : 1,
        precio: 5.91
    },
    {
        id: 4,
        nombre: "Combo Super",
        descripcion: "3 Piezas de pollo, Ensalada, Papas Fritas, Pan,  Coca-cola",
        img: "combo-super.png",
        idCategoria : 1,
        precio: 7.01
    }
    ,
    {
        id: 5,
        nombre: "Combo Familiar",
        descripcion: "6 Piezas de pollo, 2 Ensalada, 2 Papas Fritas, 2 Panes, 2 Coca-cola",
        img: "combo-familiar.png",
        idCategoria : 2,
        precio: 14.64
    },
    {
        id: 6,
        nombre: "Combo Gran Familiar",
        descripcion: "6 Piezas de pollo, 3 Ensalada, 3 Papas Fritas, 3 Panes, 3 Coca-cola",
        img: "gran-familiar.png",
        idCategoria : 2,
        precio: 18
    },
    {
        id: 7,
        nombre: "Combo Super Familar",
        descripcion: "12 Piezas de pollo, 2 Ensalada, 2 Papas Fritas, 2 Panes, 2 Coca-cola",
        img: "super-familiar.png",
        idCategoria : 2,
        precio: 27.12
    }
    ,
    {
        id: 8,
        nombre: "1/4 Tip Top Asado",
        descripcion: "1 Orden de frijoles molidos, 1 Orden de cebollas encurtidas o ensalada criolla, 2 Tortillas, 1 Coca-cola",
        img: "asado-1-cuarto.png",
        idCategoria : 3,
        precio: 5.92
    },
    {
        id: 9,
        nombre: "1/2 Tip Top Asado",
        descripcion: "1 Orden de frijoles molidos, 1 Orden de cebollas encurtidas o ensalada criolla, 3 Tortillas, 1 Coca-cola",
        img: "asado-1-medio.png",
        idCategoria : 3,
        precio: 7.05
    },
    {
        id: 10,
        nombre: "Tip Top Asado Entero",
        descripcion: "3 Orden de frijoles molidos, 3 Orden de cebollas encurtidas o ensalada criolla, 6 Tortillas, 3 Coca-cola",
        img: "asado-entero.png",
        idCategoria : 3,
        precio: 13.60
    },
    {
        id: 11,
        nombre: "Tip Top Tender",
        descripcion: "1 Orden de frijoles molidos, 1 Orden de cebollas encurtidas o ensalada criolla, 2 Tortillas, 1 Coca-cola",
        img: "img-example.jpg",
        idCategoria : 3,
        precio: 6.46
    },
    {
        id: 12,
        nombre: "Ensalada Tip Top",
        descripcion: "Ensalada de lechuga con filete 100% Pechuga Tip Top, Aderezo Favorito, 1 Coca-cola",
        img: "ensalada.png",
        idCategoria : 3,
        precio: 6.46
    }
    ,
    {
        id: 13,
        nombre: "Enrollado Tip Top",
        descripcion: "1 Enrollado Tip Top, Papas Fritas, 1 Coca-cola",
        img: "enrollado.png",
        idCategoria : 4,
        precio: 5.10
    },
    {
        id: 14,
        nombre: "Burrito Tip Top",
        descripcion: "1 Burrito Tip Top, Papas Fritas, 1 Coca-cola",
        img: "burrito.png",
        idCategoria : 4,
        precio: 4.81
    },
    {
        id: 15,
        nombre: "Surtido Veracruz",
        descripcion: "6 Piezas de alitas picantes, 5 Tostones, 5 Daditos de queso, 1 Ensalada Criolla, 3 Salchichas Parrilleras, 1 Coca-cola",
        img: "surtido.png",
        idCategoria : 4,
        precio: 10.87
    },
    {
        id: 16,
        nombre: "Tip Burger Tender",
        descripcion: "Filete a la plancha, Papas Fritas, 1 Coca-cola",
        img: "burger.png",
        idCategoria : 4,
        precio: 6.33
    },
    {
        id: 17,
        nombre: "Tip Burger Clasica",
        descripcion: "Torta de pollo, Papas Fritas, 1 Coca-cola",
        img: "burger.png",
        idCategoria : 4,
        precio: 5.50
    },
    {
        id: 18,
        nombre: "Tip Sandwich",
        descripcion: "Filete empanizado, Papas Fritas, 1 Coca-cola",
        img: "sandwich.png",
        idCategoria : 4,
        precio: 6.05
    }
    ,
    {
        id: 19,
        nombre: "Tradicional 1",
        descripcion: "1 Pieza de pollo Tip Top(Muslo o pierna), Papas Fritas, Muffin, Coca-cola",
        img: "tradicional1.png",
        idCategoria : 5,
        precio: 4.95
    },
    {
        id: 20,
        nombre: "Tradicional 2",
        descripcion: "1 Pieza de pollo Tip Top(Muslo o pierna), Ensalada, Muffin, Coca-cola",
        img: "tradicional2.png",
        idCategoria : 5,
        precio: 4.95
    },
    {
        id: 21,
        nombre: "Fajitas",
        descripcion: "4 Fajitas, Papas Fritas, Muffin, Coca-cola",
        img: "fajitas.png",
        idCategoria : 5,
        precio: 5.91
    },
    {
        id: 22,
        nombre: "Nuggets",
        descripcion: "8 Nuggets, Papas Fritas, Muffin, Coca-cola",
        img: "nuggets.png",
        idCategoria : 5,
        precio: 6.05
    }
    ,
    {
        id: 23,
        nombre: "Muffin Vainilla",
        descripcion: "Muffin Vainilla(Relleno de dulce de leche)",
        img: "muffin-vainilla.png",
        idCategoria : 6,
        precio: 1.38
    },
    {
        id: 24,
        nombre: "Muffin Chocolate",
        descripcion: "Muffin Chocolate(Relleno de dulce de leche)",
        img: "muffin-chocolate.png",
        idCategoria : 6,
        precio: 1.38
    },
    {
        id: 25,
        nombre: "Tacita de Helado",
        descripcion: "Tacita de Helado",
        img: "tres-leches.png",
        idCategoria : 6,
        precio: 1.65
    },
    {
        id: 26,
        nombre: "Tres Leches",
        descripcion: "Tres Leches",
        img: "tres-leches.png",
        idCategoria : 6,
        precio: 1.65
    },
    {
        id: 27,
        nombre: "Cuatro Leches",
        descripcion: "Cuatro Leches",
        img: "cuatro-leches.png",
        idCategoria : 6,
        precio: 1.65
    }
    ,
    {
        id: 28,
        nombre: "Papas Cheddar",
        descripcion: "Papas Cheddar",
        img: "img-example.jpg",
        idCategoria : 7,
        precio: 50
    },
    {
        id: 29,
        nombre: "Papas Fritas",
        descripcion: "Papas Fritas",
        img: "papitas.png",
        idCategoria : 7,
        precio: 1.71
    }, 
    {
        id: 30,
        nombre: "Daditos de queso frito",
        descripcion: "Daditos de queso frito",
        img: "daditos-queso.png",
        idCategoria : 7,
        precio: 2.02
    },
    {
        id: 31,
        nombre: "Tostones",
        descripcion: "Tostones",
        img: "tostones.png",
        idCategoria : 7,
        precio: 2.51
    },
    {
        id: 32,
        nombre: "Tortillas fritas",
        descripcion: "Tortillas fritas",
        img: "tortillas-fritas.png",
        idCategoria : 7,
        precio: 1.11
    },
    {
        id: 33,
        nombre: "Frijoles Molidos",
        descripcion: "Frijoles Molidos",
        img: "frijoles.png",
        idCategoria : 7,
        precio: 1.02
    },
    {
        id: 34,
        nombre: "Ensalada Criolla",
        descripcion: "Ensalada Criolla",
        img: "criolla.png",
        idCategoria : 7,
        precio: 1.02
    },
    {
        id: 35,
        nombre: "Arroz",
        descripcion: "Arroz",
        img: "arroz.png",
        idCategoria : 7,
        precio: 0.80
    },
    {
        id: 36,
        nombre: "Ensalada",
        descripcion: "Ensalada de repollo",
        img: "ensalada-repollo.png",
        idCategoria : 7,
        precio: 1.02
    },
    {
        id: 37,
        nombre: "Cebollitas",
        descripcion: "Cebollitas Dulces y Picantes",
        img: "cebollitas.png",
        idCategoria : 7,
        precio: 1.02
    },
    {
        id: 38,
        nombre: "Coca-cola",
        descripcion: "Coca-cola 2 LTS",
        img: "coca.png",
        idCategoria : 7,
        precio: 2.32
    }
    
]

// export const clientes:Cliente[] = [
//     {
//         idCliente: 1,
//         Nombre: "Axel",
//         Apellidos: "Lopez",
//         Celular: null,
//         Correo: "axel.lopez@pcgroupsa.com",
//         Direccion: "",
//         Dni: ""
//     },
//     {
//         idCliente: 2,
//         Nombre: "Stacy",
//         Apellidos: "Ramirez",
//         Celular: null,
//         Correo: "stacy.ramirez@pcgroupsa.com",
//         Direccion: "",
//         Dni: ""
//     },
//     {
//         idCliente: 3,
//         Nombre: "Yasser",
//         Apellidos: "Montiel",
//         Celular: null,
//         Correo: "yasser.montiel@gmail.com",
//         Direccion: "",
//         Dni: ""
//     },
//     {
//         idCliente: 4,
//         Nombre: "Danny",
//         Apellidos: "Caliz",
//         Celular: null,
//         Correo: "danny.caliz@gmail.com",
//         Direccion: "",
//         Dni: ""
//     },
//     {
//         idCliente: 5,
//         Nombre: "Carlos",
//         Apellidos: "Martinez",
//         Celular: null,
//         Correo: "carlos.martinez@gmail.com",
//         Direccion: "",
//         Dni: ""
//     }
// ]