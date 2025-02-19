const TestMe = ()=>{
  const clicked = async ()=>{
    try{
      const resp = await fetch('http://192.168.59.96/dun/conn.php')
      const res = await resp.json()
      console.log(res)
    }catch(err){
      console.error(err)
    }
  }
  return (
  <button onClick={clicked}>Click Me</button>
  )
}

export default TestMe