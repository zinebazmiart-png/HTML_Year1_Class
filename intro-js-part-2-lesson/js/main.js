const page = document.body.dataset.page;
const pageMeta = {
    home:{
        title: "Home",
        description: "This is a description"
    },
      
    about:{
        title: "About",
        description: "This is an about description"  
    },
    contact:{
        title: "Contact",
        description: "This is a contact description"
    }
};

const ctaContent = {
    home: {
        heading: "123456",
        text:"234455646",
        buttonText:"54645646f",
        link:"index.html"
    },
    about: {
        heading: "fjfxh",
        text:"sdfghsfth",
        buttonText:"5464hsfghxgh5646f",
        link:"index.html"
    },
        contact: {
        heading: "123456",
        text:"234455646",
        buttonText:"54645646f",
        link:"index.html"
    }
};
const favourites = [
    {title: "Espresso", text: "Blah"},
    {title: "Cold Brew", text: "Bluh"},
    {title: "Croissant", text: "Blih"}
];


const meta = pageMeta[page];
renderHead(createMetadata(meta.title, meta.description, meta.robots));

render("#site-header", createHeader(page));
render("#site-footer", createFooter(siteName));
render("#cta",  createCallToAction(ctaContent[page]));

const cardHtml = favourites
.map((item) => createCard(item.title, item.text))
.join("");

render("#cards", cardHtml);