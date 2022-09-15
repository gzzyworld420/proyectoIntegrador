// declaramos una variable la cual va a contener un objeto literal el cual dentro contendra un array el cual contendra objetos literales con sus respectivos atributos
const db = {
    usersList: [
        {
            userId: 1,
            username: "Mike Thurston",
            email: "MThurston@gmail.com",
            contrasenia: "9999",
            fecha: "1999-05-06",
            dni: "87324876",
            profilePicture: "https://via.placeholder.com/150x150",
            posts: 3,
            followers: 150,
            following: 300,
            commentDetallePost:"Looks better in black"
            

        },
        {
            userId: 1,
            username: "Segundo Benito",
            email: "sbenito@udesa.edu.ar",
            contrasenia: "0999",
            fecha: "2002-10-04",
            dni: "87324876",
            posts: 1,
            followers: 90,
            following: 7,
            commentDetallePost:"How much for a size 12?"
            
        },
        {
            userId: 3,
            username: "Martin Hernandez",
            email: "",
            contrasenia: "",
            foto: "",
            fecha: "",
            dni: "",
            commentDetallePost:"Adding these to my shopping list"


        },
        {
            userId: 4,
            username: "Lucia Perez",
            email: "",
            contrasenia: "",
            foto: "",
            fecha: "",
            dni: "",
            commentDetallePost:"Are they available in China?"


        },
        {
            userId: 5,
            username: "Gaston Sanchez",
            email: "",
            contrasenia: "",
            foto: "",
            fecha: "",
            dni: "",
            commentDetallePost:"Beautiful finish!"


        },
    ],
    postsList: [
        {
            postId: 1,
            username: "Mike Thurston",
            description: "New Jordans out now!",
            userId: 1,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/AndyAllan.ashx",
            imagen: "https://nicolediverdice.files.wordpress.com/2015/04/vegan-black.png?w=400&h=333",
            comment1:"I love these",
            comment2:"great choice",
            
        },
        {
            postId: 2,
            username: "Mike Thurston",
            description: "New Jordans out now!",
            userId: 1,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/AndyAllan.ashx",
            imagen: "https://image.goat.com/750/attachments/product_template_pictures/images/072/682/079/original/895937_00.png.png",
            comment1: "I have had a bad experience with them",
            comment2: "They look very new!"


        },
        {
            postId: 3,
            username: "Martin Hernandez",
            description: "Message me if you are interested!!",
            userId: 3,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/John_Cotterell_433x440.ashx",
            imagen: "https://cdn.shopify.com/s/files/1/0259/7021/2909/products/GX5822_6_FOOTWEAR_Photography_FrontLateralTopView_transparent_1360x.png?v=1649392029",
            comment1: "Where can I buy these",
            comment2:"Are they available in red?",


        },
        {
            postId: 4,
            username: "Bruno Wilson",
            description: "Too expensive",
            userId: 2,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/Andrew_Rowland.ashx",
            imagen: "https://i.blogs.es/0fad11/zapatillas-animal-print-converse/original.png",
            comment1: "Very nice colors and material",
            comment2:"Great quality"


        },
        {
            postId: 5,
            username: "Martin Hernandez",
            description: "Bad quality",
            userId: 3,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/John_Cotterell_433x440.ashx",
            imagen: "https://images.footlocker.com/is/image/EBFL2/38056002_a2?wid=1600&hei=1600&fmt=png-alp",
            comment1: "I share a similar opinion",
            comment2: "I like the laces!"

        },
        {
            postId: 6,
            username: "Mike Thurston",
            description: "Very Confortable",
            userId: 1,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/AndyAllan.ashx",
            imagen: "https://static.nike.com/a/images/t_default/0da2a6a4-98b2-483c-b144-867cd5d22964/air-max-270-g-golf-shoe-GVHWZK.png",
            comment1: "They look great!",
            comment2:"Do they age badly?"

        },
        {
            postId: 7,
            username: "Gaston Sanchez",
            description: "Nike air max 270",
            userId: 5,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/David_Churchill_2.ashx",
            imagen: "https://www.pgatoursuperstore.com/on/demandware.static/-/Sites-master-catalog-pgatss/default/dw73515365/Golf-Footwear/Golf-Footwear/Mens-Sprt-Cas-Ftwr/Nike/2000000014821/CK6483-102-PHSRH000-2000.png",
            comment1: "Love them!",
            comment2:"Very nice design",


        },
        {
            postId: 8,
            username: "Gaston Sanchez",
            description: "My working boots",
            userId: 5,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/David_Churchill_2.ashx",
            imagen: "https://static.sneakerjagers.com/news/nl/2021/11/Timberland-6-Premium-Boot-2.png",
            comment1: "Awesome!",
            comment2: "They must be very confortable",

        },
        {
            postId: 9,
            username: "Bruno Wilson",
            description: "My sons favorite choice of shoes",
            userId: 2,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/Andrew_Rowland.ashx",
            imagen: "https://cdn.shopify.com/s/files/1/2358/2817/products/dunk-low-nba-75th-anniversary-chicago-bulls-831495.png?v=1638813895",
            comment1: "Cool!",
            comment2:"They are definitely making a comback"


        },
        {
            postId: 10,
            username: "Lucia Perez",
            description: "Bought them for 20% off",
            userId: 4,
            fotoPerfil: "https://www.endava.com/-/media/EndavaDigital/Endava/Images/ManagementPages/Sulina-Connal.ashx",
            imagen: "https://www.koolaburra.com/on/demandware.static/-/Sites-KOOLABURRA-US-master/default/dwaf9cdba5/images/transparent/1015874-CHE_2.png",
            comment1: "Very nice!",
            comment2: "Would look even nicer if they came in orange"


        },

    ],
    commentsList: [{
            postId: "",
            userId: 1,
            comment: "I bought them yesterday", 

        },
        {
            postId: "",
            userId: 2,
            comment: "I had a bad experience with these"

        },
        {
            postId: "",
            userId: 3,
            comment: "I thought so too"
        },
        {
            postId: "",
            userId: 4,
            comment: "Awesome!"

        },
        {
            postId: "",
            userId: 5,
            comment: "Looks Great!"


        },
    ],
    bucarporId: function (id) {
        for (let i = 0; i < this.postsList.length; i++) {
            if (this.postsList[i].postId == id) {
                return this.postsList[i]
            }

        }
    },
    buscarporId: function (id) {
        for (let i = 0; i < this.usersList.length; i++) {
            if (this.usersList) {
                
            }
            
        }
    }


}




// exports
module.exports = db;