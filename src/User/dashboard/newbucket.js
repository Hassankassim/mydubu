import React from 'react';
import './usercard.css'
import NavbarExample from '../../components/Navbar';
function NewBucket() {
  return (
    <>
    <NavbarExample />
    <div className='newbucket'>
        
    <section className="section_form">
        <h1>Create New Bucket</h1>
        <p>Enter the name of Your Team/Group</p>
      <form id="consultation-form" className="feed-form" action="#">
        <input required placeholder="Name of Your Group" type="text" />
        <input required placeholder="Your Name" type="text" />
        <input name="phone" required placeholder="Phone number" />
        <input name="email" required placeholder="E-mail" type="email" />
        <button className="button_submit">CREATE</button>
      </form>
    
    </section>
    </div>
    </>
  );
}

export default NewBucket;
