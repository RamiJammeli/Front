import React, { Component } from "react";
import UserService from '../../services/UserService'


export default class ModifierProfil extends Component {

    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.saveUser = this.saveUser.bind(this);

        this.state = {
            id: "",
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",

        };
    }
    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    saveUser() {
        var user = {
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            userRole: this.state.userRole
        };
        console.log(user);


        UserService.createUser(user)
            .then(response => {




            })
            .catch(e => {

            });

    }


    render() {
        return (

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <fieldset class="group-border">
                            <legend class="group-border">coordonnées de mon profil</legend>


                            <div className="row" style={{ marginBottom:"20px" }}>
                                <div className="col-4">
                                    <div className="form-floating">
                                        <input className="form-control " required type="text" id="login" name="login" placeholder="login" value={this.state.userName}
                                            onChange={this.onChangeUserName} />
                                        <label htmlFor="cage">Nom d'Utilisateur</label>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-floating">
                                        <input className="form-control" required type="text" id="login" name="login" placeholder="login" value={this.state.firstName}
                                            onChange={this.onChangeFirstName} />
                                        <label htmlFor="cage">Prénom</label>
                                    </div>
                                </div>


                                <div className="col-4">
                                    <div className="form-floating">
                                        <input className="form-control" required type="text" id="login" name="login" placeholder="login" value={this.state.lastName}
                                            onChange={this.onChangeLastName} />
                                        <label htmlFor="cage">Nom de famille</label>
                                    </div>
                                </div>

                            </div>




                            <div className="row">
                                <div className="col-4">
                                    <div className="form-floating">
                                        <input className="form-control" required type="text" id="login" name="login" placeholder="login" value={this.state.email}
                                            onChange={this.onChangeEmail} />
                                        <label htmlFor="cage">Adresse Email</label>
                                    </div>
                                </div>


                                <div className="col-4">
                                    <div className="form-floating">
                                        <input className="form-control" required type="password" id="login" name="login" placeholder="login" value={this.state.password}
                                            onChange={this.onChangePassword} />
                                        <label htmlFor="cage">Mot de passe</label>
                                    </div>
                                    <label style={{  fontSize: '11px' }}>
                                        Pour des raisons de sécurité, le mot de passe doit être composé au moins de 8 caractères,
                                        comprenant au moins une lettre(majuscule et miniscule),
                                        un chiffre et un caractère spécial parmi les suivants:(! # $ %  * + - / = ? )
                                    </label>
                                </div>

                                <div className="col-4">
                                <div className="form-floating">
                                    <input className="form-control" required type="confirmpassword" id="confirm" name="confirm" placeholder="confirm"
                                    />
                                    <label htmlFor="cage">confirmation Mot de passe</label>
                                </div>
                            </div>

                            </div>

                           






                            <div className="col-2">

                                <input type="button" onClick={this.saveUser} className="btn btn-primary3 w-100 py-3" value="Modifier" />
                                <div><br></br></div>

                                

                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

        );
    }
}



