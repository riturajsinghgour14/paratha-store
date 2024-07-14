import React from 'react'

const Contact = () => {
  return (
   <div className='container p-5'>
        <div className='card p-4 rounded-0 shadow'>
           
        <h2 className='text-center p-4'>Contact</h2>
<form id="contact_form" name="contact_form" method="post">
    <div class="mb-5 row">
        <div class="col">
            <label>First Name</label>
            <input type="text" required maxlength="50" class="form-control" name="first_name"/>
        </div>
        <div class="col">
            <label>Last Name</label>
            <input type="text" required maxlength="50" class="form-control" name="last_name"/>
        </div>
    </div>
    <div class="mb-5 row">
        <div class="col">
            <label for="email_addr">Email address</label>
            <input type="email" required maxlength="50" class="form-control" name="email"
                placeholder="name@example.com"/>
        </div>
        <div class="col">
            <label for="phone_input">Phone</label>
            <input type="tel" required maxlength="50" class="form-control" name="Phone"
                placeholder="+91-0000000000"/>
        </div>
    </div>
    <div class="mb-5">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" name="message" rows="5"></textarea>
    </div>
    <button type="submit" class="btn btn-dark w-100">Contact</button>
</form>
        </div>
      </div>
   
  )
}

export default Contact;
