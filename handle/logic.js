const express=require('express')
const book = [];

const createabook = (req, res) => {
    const { writer, date } = req.body;

    if (!writer || !date) {
        return res.status(400).send('Not all required fields are provided');
    }

    book.push({ writer, date });

    return res.status(201).send('Book created successfully');
};
const getbook=(req,res)=>{
    return res.json(book)
}
const getbyid=(req,res)=>{
    const id=Number(req.params.id)
   
    if ( id > 0 && id <= book.length){
        const bookIndex = id - 1;

        return res.json(book[ bookIndex]).send()
    }
    res.status(404).send('Book not found');

}
// const update=(req,res)=>{
//   const id=Number(req.params.id)
// const {writer, date}=req.body;
// if( writer && date && id >0 && id<=book.length){
//    const id-=1;
//     book[id]={writer, date}
//   return res.send().json(book[id])
// }


// }
module.exports = { createabook,getbook ,getbyid, update};


