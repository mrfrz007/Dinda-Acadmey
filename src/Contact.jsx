import React from 'react';


const Contact = () => {

    return (

        <>


            <div class="container contact-form">
                
            <form >
                <h3 className="text-center">Drop Us a Message</h3>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" name="txtName" class="form-control" placeholder="Your Name "  />
                    </div>
                    <div class="form-group">
                        <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *"  />
                    </div>
                    <div class="form-group">
                        <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *"  />
                    </div>
                    <div class="form-group">
                        <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{width: "100%", height: "150px"}}></textarea>
                    </div>
                </div>
            </div>
        </form>
</div >
        </>
    )
}

export default Contact;