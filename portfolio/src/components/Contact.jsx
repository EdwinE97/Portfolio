import '../App.css'


const Contact = () =>{

    return(
        <>

<hr className="border-line"></hr>
        <div className="title-container">
          <hr className="title-line"></hr>
          <h1 style={{ color: "brown" }}>Contact Me</h1>
          <hr className="title-line"></hr>
        </div>

        <form className='form-container' id='Contact'>
            <div className='form-input-container'>
                <input name='first' placeholder='First Name'required></input>
                <input name='last' placeholder='Last Name'required></input>
                <input name='email' placeholder='Email'required></input>
                <input name='last' placeholder='Phone'required></input>
                <button className='btn-form'>Submit</button>
            </div>
           
        </form>
     
        </>
    )
}



export default Contact;