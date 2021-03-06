import express from 'express'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(()=>{
    const server = express();

    server.get('/board/:title', (req, res) => {
        const page = '/boardView';
        const params = {title: req.params.title}
        app.render(req, res, page, params)
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(3000, (err) => {
        if(err) throw err;
        console.log("> Ready on Server Port: 3000")
    })
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});