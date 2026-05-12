import { messages } from "../db/messages.js"
export const getHome = (req, res ) => {
    res.render('index', {title: 'Mini MessageBoard', messages: messages});
}

export const getNewPage = (req, res) => {
    res.render('new', {title: 'Create a new Message'});
}

export const createNewMessage = (req, res) => {
    const {messageUser, messageText} = req.body;
    messages.push({user: messageUser, text: messageText, added: new Date()});
    res.redirect('/');
}