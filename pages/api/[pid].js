// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {dataBase,createTable, insertRows, getResults } from "./_functions/dbcontroller";



export default async function handler(req, res) {

  const connection = dataBase('db').connection

  if(!connection) return res.status(500).json("Connection failed")

  if(req.method == "POST"){
    const post = JSON.parse(req.body)
    const pid = req.query.pid
    createTable(connection, pid, post[0], true)
    insertRows(connection, pid, post)
    res.status(200)
  }

  if(req.method == "GET"){
    const pid = req.query.pid
    const where  = Object.keys(req.query).filter(e=>e != "pid").map(e=>`${e} = '${req.query[e]}'`).join(' AND ')
    console.log(where)
    const response = await getResults(connection, pid, where)
    res.status(200).json(response)
  }


}
