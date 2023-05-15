import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './styles.css';
import dubulogo from './img/dubu icon.png'
import backendAPI from './api/backendAPI';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const handleSubmit = (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const postDetails = async()=>{
      try{
        setLoading(true);
        const {data} = await backendAPI.post(
        '', {name, phone}
        )
        if(data.success){
          console.log(`${data.name} is saved`)
          setData(`${data.name} is saved`)
        }
      }
      catch(err){
        console.log(err)
      }
      finally{
        setLoading(false) 
      }
    }
    postDetails()
    
  }
  const handleDownloadVcard = ()=>{
    window.location.href = 'https://bucket-egxu.onrender.com/api/v1/download';
  }

  

  return (
    <>
      {/* Navbar */}
      <nav className='navbar'>
        <div className='container-fluid'>
          <a className='navbar-brand'>
                      <span>
              <img width='52px' src={dubulogo} alt='' />
            </span>
          </a>

          <a id='h5' href=''>
            <h5>Explore</h5>
          </a>
        </div>
      </nav>

      {/* Main content */}
      <div className='container mt-5'>
        <div className='title'>
          <h3>TheBucket</h3>
        </div>
        <div className='m-3 text-success'>
          {data && <h5>{data}</h5>}
        </div>
        <div className='m-3 text-warning'>  
        {loading && <h5>loading...</h5>}
        </div>
        <form className='form form-row' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-lg-6 col-sm-6'>
              <div className='form-group has-default bmd-form-group '>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  placeholder='Your Name'
                />
              </div>
            </div>

            <div className='col-lg-6 col-sm-6'>
              <div className='form-group bmd-form-group'>
                <label htmlFor='exampleInput1' className='bmd-label-floating'>
        
                </label>
                
                <input
                  type='text'
                  name='phone'
                  className='form-control'
                  id='exampleInput1'
                  placeholder='Phone Number'
                />
               
              </div>
              <div className='button1'>
                <button type='submit' className='neu-button'>
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='container'>
      <button className='btn btn-primary' onClick={handleDownloadVcard}>
      Download Vcard
      </button>

      </div>

      {/* Footer */}
      <div className='futa' style={{ height: '430px' }}></div>
    </>
  )
}

export default App;
