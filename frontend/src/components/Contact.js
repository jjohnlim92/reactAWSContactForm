import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (name, e) => {
        var change = {};
        change[name] = e.target.value;
        this.setState(change);
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, email, subject, message } = this.state;
        const conf = {
            method: "post",
            body: JSON.stringify({
                'name': name,
                'email': email,
                'subject': subject,
                'message': message,
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'X-Api-Key': '<yourAPIKey>'
            })
        };
        fetch('<yourAPIURL>', conf).then(response => console.log(response));
    };

    render() {
        return (
            <div className="contact">
                <h1 className="header" >Contact Me</h1>

                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form-input" type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />

                    <input className="form-input" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />

                    <input className="form-input" type="text" placeholder="Subject" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this, 'subject')} />

                    <textarea className="form-input" rows="4" cols="50" placeholder="Message" name="message" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} />

                    <input className="btn" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Contact
