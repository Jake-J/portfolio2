import todoimg from '../img/projects/project1.png'
import weatherimg from '../img/projects/project2.png'
import devch01 from '../img/projects/project3.png'
import wpsite01 from '../img/projects/project4.png'
import applover from '../img/projects/project5.png'
import devch02 from '../img/projects/project6.png'
import currencyImg from '../img/projects/project7.png' 

export const projects = [
    {
        name: "Todo app",
        technologies:['react.js','webpack','Sass'],
        imgPath:todoimg,
        liveLink: 'https://jake-j.github.io/TODO-APP/',
        codeLink: 'https://github.com/Jake-J/TODO-APP'
    },
    {
        name: "Weather app",
        imgPath:weatherimg,
        technologies:['react.js','superagent','webpack','Sass'],
        liveLink: 'https://jake-j.github.io/weatherAPP/',
        codeLink: 'https://github.com/Jake-J/weatherAPP'
    },
    {
        name: "Bud-dev",
        imgPath:wpsite01,
        technologies:['Wordpress'],
        liveLink:'https://webdevacc11.000webhostapp.com/',
        codeLink:'nolink'
    },
    {
        name: "web dev challenge 01",
        imgPath:devch01,
        technologies:['pure HTML&CSS'],
        liveLink:'https://jake-j.github.io/weekly-web-dev-challange-1/',
        codeLink:'https://github.com/Jake-J/weekly-web-dev-challange-1'
    },
    {
        name: "Applover task",
        imgPath:applover,
        technologies:['bootstrap4','jQuery','slicker.js'],
        liveLink:'https://jake-j.github.io/applover-task/',
        codeLink:'https://github.com/Jake-J/applover-task'
    },
    {
        name: "web dev challenge 02",
        imgPath:devch02,
        technologies:['bootstrap4','jQuery'],
        liveLink:'https://jake-j.github.io/weekly-web-dev-challange-2/',
        codeLink:'https://github.com/Jake-J/weekly-web-dev-challange-2'
    },
    {
        name: "Currency Converter",
        imgPath:currencyImg,
        technologies:['react.js','webpack','Sass'],
        liveLink:'https://jake-j.github.io/currencyAPP/',
        codeLink:'https://github.com/Jake-J/currencyAPP'
    }
]