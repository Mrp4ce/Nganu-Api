'use strict'
const axios = require('axios')
const cheerio = require('cheerio')

let url = "https://nomorkiajit.com/"
class ResultController {

  
async getResult({request,response}){
 // Mendapatkan data dari Https://nomorkiajit.com dengan index Hk
try {
  /* code */
    let data= [];
  await axios.get(url).then((res)=>{
    const $ = cheerio.load(res.data)
      $('table.table.text-center').each((i,element)=>{
      let re = $(element).find('tbody').children('.text-uppercase')
            re.each((ind,val)=>{
              let tanggal = $(val).find("td")[0]
              let res_tgl = $(tanggal).text()
              let hari = $(val).find("td")[1]
              let res_hari = $(hari).text()
              let result = $(val).find("td")[2]
              let lastResult = $(result).text()
              data.push({
                res_tgl,
                res_hari,
                lastResult
              })
            })
    // console.log(`Tanggal : ${tanggal}, Hari : ${hari}, Hasil : ${hasil}`)
    }) //end of each Element
    // return{
    //   message: "sukses",
    //   resource: {
    //     length : data.length,
    //     data : data
    //   }
    // }
    
  })//end of await
      return{
      message: "sukses",
      resource: {
        length : data.length,
        data : data
      }
    }
    
  
  return (resource)
} //end of try
catch (e) {
  console.error(e)
}

    
}//end of async
   
  
}//end of ResultController

module.exports = ResultController
